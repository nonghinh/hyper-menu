<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function search()
    {
        $collections = [
            [
                'id' => 2323234252,
                'title' => 'Laptop',
                'handle' => 'laptop',
            ],
            [
                'id' => 2323234253,
                'title' => 'Mobile',
                'handle' => 'mobile',
            ],
            [
                'id' => 2323234245,
                'title' => 'Accessories',
                'handle' => 'accessories',
            ]
        ];
        return response()-> json(['success' => true, 'collections' => $collections], 200);
    }
}
