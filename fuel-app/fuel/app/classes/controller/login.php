<?php

class Login extends \Controller
{
    public function before()
    {
        parent::before();

        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Allow-Headers: Content-Type, *');
        header('Access-Control-Allow-Credentials: true');
        header('X-Frame-Options: DENY');

        if (\Input::method() == 'OPTIONS') {
            exit;
        }
    }

    public function action_index()
    {
        if (\Input::method() !== 'POST') {
            return \Response::forge('無効なリクエストメソッドです。', 405);
        }

        $email = \Input::json("email");
        $password = \Input::json("password");

        // 入力の検証
        if (empty($email) || empty($password)) {
            return \Response::forge('無効なメールアドレスまたはパスワードです。', 400);
        }

        // パスワードのハッシュ化（FuelPHPが自動的に提供していないと仮定）
        $hashedPassword = hash('sha256', $password);

        // FuelPHPのORMが利用可能であればそれを使用し、そうでなければクエリビルダーを使用
        $user = Model_User::find_by('email', $email, '=');

        if ($user && password_verify($password, $user->password)) {
            // セッションにユーザーデータを設定
            \Session::set('email', $email);
            return \Response::forge('ログイン成功。', 200);
        } else {
            return \Response::forge('無効なメールアドレスまたはパスワードです。', 401);
        }
    }
}
// 続き

// Model_Userクラスの例
class Model_User extends Orm\Model
{
    protected static $_properties = array(
        'id',
        'email',
        'password',
        // 他のプロパティを追加
    );

    // パスワードをハッシュ化する前に実行されるフック
    protected static function _pre_save($object)
    {
        // パスワードが変更されている場合のみハッシュ化
        if ($object->is_changed('password')) {
            $object->password = password_hash($object->password, PASSWORD_BCRYPT);
        }
    }
}

