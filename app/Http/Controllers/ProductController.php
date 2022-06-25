<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function search(Request $request)
    {
        $products = [
            [
                'id' => 632910392,
                'handle' => 'apple-iphone',
                'title' => 'Apple iphone',
                'images' => [
                    [
                        'id' => 850703190,
                        'position' => 1,
                        'src' => 'https://i.picsum.photos/id/871/200/200.jpg?hmac=RiUSuXl3prTnCTwjRX_be5hca7AJGWw75b50TxlMcFA'
                    ]
                ],
                'variants' => [
                    [
                        'id' => 808950810,
                        'title' => 'Pink',
                        'price' => 1200,
                        'compare_at_price' => 1500,
                        'position' => 1
                    ],
                    [
                        'id' => 808950811,
                        'title' => 'Black',
                        'price' => 1200,
                        'compare_at_price' => 1500,
                        'position' => 1
                    ],
                ]
            ],
            [
                'id' => 632910393,
                'handle' => 'apple-macbook',
                'title' => 'Apple Macbook',
                'images' => [
                    [
                        'id' => 850703191,
                        'position' => 1,
                        'src' => 'https://i.picsum.photos/id/871/200/200.jpg?hmac=RiUSuXl3prTnCTwjRX_be5hca7AJGWw75b50TxlMcFA'
                    ]
                ],
                'variants' => [
                    [
                        'id' => 808950910,
                        'title' => 'Default title',
                        'price' => 2200,
                        'compare_at_price' => 2500,
                        'position' => 1
                    ],
                ]
            ],
            [
                'id' => 632910394,
                'handle' => 'lv-tshirt',
                'title' => 'Lv T-shirt',
                'images' => [
                    [
                        'id' => 850703191,
                        'position' => 1,
                        'src' => 'https://i.picsum.photos/id/871/200/200.jpg?hmac=RiUSuXl3prTnCTwjRX_be5hca7AJGWw75b50TxlMcFA'
                    ]
                ],
                'variants' => [
                    [
                        'id' => 808950315,
                        'title' => 'Default title',
                        'price' => 390,
                        'compare_at_price' => 500,
                        'position' => 1
                    ],
                ]
            ],
        ];
        return response()->json(['success' => true, 'products' => $products], 200);
    }
}
