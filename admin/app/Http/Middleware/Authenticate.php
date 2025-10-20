<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Auth\AuthenticationException;

class Authenticate
{
    public function handle(Request $request, Closure $next, ...$guards)
    {
        if (! $request->user()) {
            throw new AuthenticationException('Unauthenticated.');
        }

        return $next($request);
    }
}
