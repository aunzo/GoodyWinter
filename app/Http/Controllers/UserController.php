<?php

namespace App\Http\Controllers;

use Auth;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        
        $isLoginSuccess = false;
        if (Auth::attempt([
            'username' => $request->username, 
            'password' => $request->password],
             $request->remember))
        {
            $isLoginSuccess = true;
        }

        return response()->json([
            'isLoginSuccess' => $isLoginSuccess
        ]);
    }

    public function isLogin()
    {
        return response()->json([
            'isLogin' => Auth::Check()
        ]);
    }

    public function getUserRole()
    {
        return Role::all();
    }
}
