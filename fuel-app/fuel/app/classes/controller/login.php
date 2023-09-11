class Controller_Login extends Controller{
    public function before()
  {
      parent::before();

      // CORSヘッダーを設定
      header('Access-Control-Allow-Origin: *');
      header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
      header('Access-Control-Allow-Headers: *');

      if (Input::method() == 'OPTIONS') {
          exit;
      }
  }
  public function action_index()
  {
    if (Input::method() !== 'POST') {
      return Response::forge('ログインできませんでした。', 401);
    }

    $email = Input::json('email');
    $password = Input::json('password');
    
    $query= DB::query('SELECT * FROM `users` WHERE email = :email AND password = :password', DB::SELECT);
    $user = $query->bind('email', $email)->bind('password', $password)->execute()->as_array();
    

    if (empty($user)) {
      return Response::forge('ログインできませんでした。', 401);}
    } 
}