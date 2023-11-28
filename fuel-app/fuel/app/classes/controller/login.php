<?php
namespace Controller;
class Login extends \Controller
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
        return \Response::forge('ログインできませんでした。', 401);
      }

      $email = \Input::json('email');
      $password = \Input::json('password');
      $hash_password = \Auth::hash_password($password);

      $user_id = \Model\User::login_user($email,$hash_password);
      if (!$user_id) {
        return \Response::forge('メールアドレスまたはパスワードが違います',401);
      } else {
        \Session::set('user_id', $user_id);
      }
      
      $username = \Model\User::get_username($email,$hash_password);
      \Session::set('user_name', $username);

      return \Response::forge('ok', 200);
    }
}

