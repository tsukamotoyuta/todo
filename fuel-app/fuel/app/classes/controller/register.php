<?php
namespace Controller;
class Register extends \Controller
{
    public function before()
    {
        parent::before();

        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Allow-Credentials: true');
        header('X-Frame-Options: DENY');

        if (\Input::method() == 'OPTIONS') {
            header('HTTP/1.1 200 OK');
            exit;
        }
    }

    public function action_index()
    {
      if (\Input::method() !== 'POST') {
        return \Response::forge('登録できませんでした。', 401);
      }

      $username = \Input::json('username');
      $email = \Input::json('email');
      $password = \Input::json('password');
      $hash_password = \Auth::hash_password($password);
  
      // Userモデルのcreate_userメソッドを呼び出し
      $user = \Model\User::create_user($username, $email, $hash_password);
      \Session::set('user_name', $username);
      \Session::set('email', $email);

      return \Response::forge('ok', 200);
    }
}

