<?php

namespace Model;
class User extends \Model
{
    protected static $_table_name = 'users';
    protected static $_primary_key = array('id');
    
    // プロパティの定義
    protected static $_properties = array(
        'id' => array(
            'data_type' => 'int',
            'label' => 'Id',
        ),
        'username' => array(
            'data_type' => 'varchar',
        ),
				'email' => array(
					'data_type' => 'varchar',
				),
        'password' => array(
            'data_type' => 'varchar',
        ),
        'created_at' => array(
            'data_type' => 'timestamp',
            'label' => '作成日',
        ),
    );
		protected static $_created_at = 'created_at';

		//新規ユーザー登録
		public static function create_user($username, $email, $password)
		{
				$query = \DB::insert(static::$_table_name);
				$query->set([
						'username' => $username,
						'email' => $email,
						'password' => $password,
				])->execute();
				return $query;
		}

		public static function get_user_id($username)
		{
				$select = "SELECT id FROM users WHERE name = :name";
				$query = \DB::query($select)->bind("username", $username)->execute()->as_array();

				if ($query) {
						return $query[0]['id'];
				} else {
						return false; // 挿入に失敗した場合はfalseを返す
				}
		}

		public static function login_user($email, $password)
		{
				$select = "SELECT id FROM users WHERE email = :email AND password = :password";
				$query = \DB::query($select)
						->bind("email", $email)
						->bind("password", $password)
						->execute();

				if ($query && $query->count() > 0) {
						$result = $query->current();
						return $result['id'];
				} else {
						return false; // ユーザーが見つからなかった場合は false を返す
				}
		}

		public static function update_username($username, $inputUsername)
		{
				$update = "UPDATE users SET username = :inputUsername WHERE username = :username";
				$query = \DB::query($update)
						->bind("inputUsername", $inputUsername)
						->bind("username", $username)
						->execute();

				if ($query) {
						return true;
				} else {
						return false; // 挿入に失敗した場合はfalseを返す
				}
		}

		public static function get_username($email, $password)
		{
				$select = "SELECT username FROM users WHERE email = :email AND password = :password";
				$query = \DB::query($select)
						->bind("email", $email)
						->bind("password", $password)
						->execute();

				if ($query && $query->count() > 0) {
						$result = $query->current();
						return $result['username'];
				} else {
						return false; // ユーザーが見つからなかった場合は false を返す
				}
		}

}
