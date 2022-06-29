<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthShop
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::guest() && env('DEV_APP', false)){
            $user = User::where('id', '>', 0)->first();
            if ($user) {
                Auth::login($user);
                return $next($request);
            }
        }
        if (Auth::guest() && (!$request->shop || !$request->hmac || !$request->timestamp)){
            return redirect()->route('login');
        }
        return $next($request);
    }
}
