<?php
namespace Controller;
class Api extends \Controller
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
      $user_id = \Session::get('user_id');

      $schedule_title = \Model\schedule::get_schedule_title($user_id);
      $schedule_action_at = \Model\schedule::get_schedule_action_at($user_id);
      $schedule_end_at = \Model\schedule::get_schedule_end_at($user_id);

      $json = \Format::forge([
        'title' => $schedule_title,
        'action_at' => $schedule_action_at,
        'end_at' => $schedule_end_at,
      ])->to_json();
      return \Response::forge($json, 200);
    }

    public function action_create()
    {
      $user_id = \Session::get('user_id');
      $title = \Input::json('title');
      $action_at = \Input::json('start');
      $end_at = \Input::json('end');

      $schedule = \Model\schedule::create_schedule($user_id, $title, $action_at, $end_at);

      return \Response::forge(200);
    }
    public function action_sessionset()
    {
      $pp = \Session::get();
      var_dump($pp);
    }
}

