<?php

namespace App\Http\Controllers;

use App\Models\Api;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
           'image' => 'required|image|mimes:jpg,jpeg,png,gif,svg|max:2048'
        ]);
        if ($image = $request->file('image')){
            $fileType = $image->getClientOriginalExtension();
            $fileName = 'nx8_hm_'.date('YmdHis').'_'.rand(11111,99999).'.'.$fileType;
            $fileContent = file_get_contents($image->getPath().'/'.$image->getFilename());
            if ($fileContent){
                $api = new Api();
                $url = $api->uploadImage($fileName, base64_encode($fileContent));
                if ($url){
                    return response()->json(['success' => true, 'image_url' => $url]);
                }
            }
        }

        return response()->json(['success' => false, 'image_url' => '']);
    }
}
