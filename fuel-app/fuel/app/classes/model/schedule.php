<?php
namespace Model;

class Schedule extends \Model
{
    protected static $_table_name = 'schedules';
    protected static $_primary_key = array('id');

    // プロパティの定義
    protected static $_properties = array(
        'id' => array(
            'data_type' => 'int',
            'label' => 'Id',
        ),
        'user_id' => array(
            'data_type' => 'int',
            'label' => 'User ID',
        ),
        'title' => array(
            'data_type' => 'varchar',
        ),
        'action_at' => array(
            'data_type' => 'date',
            'label' => 'Action Date',
        ),
        'end_at' => array(
            'data_type' => 'date',
            'label' => 'End Date',
        ),
        'created_at' => array(
            'data_type' => 'date',
            'label' => 'Created Date',
        ),
        'deleted_at' => array(
            'data_type' => 'date',
            'label' => 'Deleted Date',
        ),
    );

    // スケジュール取得
    public static function get_schedule_title($user_id)
    {
      $select = "SELECT title FROM schedules WHERE user_id = :user_id AND deleted_at IS NULL";
      $query = \DB::query($select)->bind("user_id", $user_id)->execute()->as_array();
      $query = array_column($query,"title");
      return $query;
    }
    public static function get_schedule_action_at($user_id)
    {
      $select = "SELECT action_at FROM schedules WHERE user_id = :user_id AND deleted_at IS NULL";
      $query = \DB::query($select)->bind("user_id", $user_id)->execute()->as_array();
      $query = array_column($query,"action_at");
      return $query;
    }
    public static function get_schedule_end_at($user_id)
    {
      $select = "SELECT end_at FROM schedules WHERE user_id = :user_id AND deleted_at IS NULL";
      $query = \DB::query($select)->bind("user_id", $user_id)->execute()->as_array();
      $query = array_column($query,"end_at");
      return $query;
    }

    // スケジュール作成
    public static function create_schedule($user_id, $title, $action_at, $end_at)
    {
      $insert = "INSERT INTO schedules (user_id, title, action_at, end_at) VALUES (:user_id, :title, :action_at, :end_at)";
      $query = \DB::query($insert)->bind("user_id", $user_id)->bind("title", $title)->bind("action_at", $action_at)->bind("end_at", $end_at)->execute();
      return $query;
    }
}
