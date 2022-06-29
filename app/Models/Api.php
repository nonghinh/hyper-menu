<?php

namespace App\Models;


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Osiset\BasicShopifyAPI\BasicShopifyAPI;
use Osiset\BasicShopifyAPI\Options;
use Osiset\BasicShopifyAPI\Session;

class Api
{
    public static $instance = null;
    public $shop;
    public $apiVersion;
    public $themeId;
    public $api;

    public function __construct($shop = null)
    {
        $this->apiVersion = Config::get('shopify-app.api_version');
        if ($shop) {
            $this->shop = $shop;
            $options = new Options();
            $options->setVersion($this->apiVersion);
            $api = new BasicShopifyAPI($options);
            $api->setSession(new Session($shop->name, $shop->password));
            $this->api = $api;
        } else {
            $this->shop = Auth::user();
            if (!$this->shop && env('DEVELOP')) {
                $this->shop = User::first();
            }
            $this->api = $this->shop->api();
        }
        $this->themeId = $this->shop->theme_id != null ? $this->shop->theme_id : $this->getIdThemeActive();

    }

    public function getIdThemeActive()
    {
        $res = $this->api->rest('GET', "/admin/api/{$this->apiVersion}/themes.json");
        if ($res && !$res['errors'] && $res['body']['themes']) {
            foreach ($res['body']['themes'] as $theme) {
                if ($theme['role'] != 'main') continue;
                if (!$this->shop->theme_id || $this->shop->theme_id != $theme['id']) {
                    $this->shop->theme_id = $theme['id'];
                    $this->themeId = $theme['id'];
                    $this->shop->save();
                }
                return $theme['id'];
            }
        }

        return null;
    }

    public function uploadImage($fileName, $base64Content)
    {
        $res = $this->api->rest('PUT', "/admin/api/{$this->apiVersion}/themes/{$this->themeId}/assets.json", [
            'asset' => [
                'key' => 'assets/'.$fileName,
                'attachment' => $base64Content
            ]
        ]);
        if ($res && !$res['errors']){
            return $res['body']['asset']['public_url'];
        }
        return null;
    }
}
