<?php
use phpmailer\PHPMailer;
use phpmailer\SMTP;
use phpmailer\Exception;

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$mail = new PHPMailer(true);

$mail->isSMTP();   
$mail->CharSet = "UTF-8";
$mail->SMTPAuth   = true;
// $mail->SMTPDebug = 2;
$mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

// Настройки вашей почты
$mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
$mail->Username   = 'zsmile@mail.ru'; // Логин на почте
$mail->Password   = 'd13wuLfyiCxkiipVzEk5'; // Пароль на почте
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;

//от кого письмо
$mail->setFrom('zsmile@mail.ru', 'Мария'); // Адрес самой почты и имя отправителя
// кому письмо
$mail->addAddress('mariya.zeleneva@gmail.com', 'Mariya Zeleneva');  

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$city = $_POST['city'];
$message = $_POST['message'];

//Тело письма
$body = '<html><h1>Добрый день. </h1><br><h2>Новая заявка.</h2>';

//Проверка заполнения полей на стороне сервера
if(trim(!empty($name))){
    $body.='<p><strong>Имя клиента:</strong> '.$name.'</p>';
}
if(trim(!empty($email))){
    $body.='<p><strong>Почта клиента:</strong> '.$email.'</p>';
}
if(trim(!empty($phone_number))){
    $body.='<p><strong>Номер телефона:</strong> '.$phone_number.'</p>';
}
if(trim(!empty($city))){
    $body.='<p><strong>Город:</strong> '.$city.'</p>';
}
if(trim(!empty($message))){
    $body.='<p><strong>Описание заявки:</strong> '.$message.'</p><br><p>С уважением, Ваш новый клиент!</p></html>';
}

$mail->IsHTML(true);
$mail->Subject = 'Заявка на подключение робот-мойки';
$mail->Body = $body;

//Отправляем
if (!$mail->send()) {
    $result = 'Ошибка';
} else {
    $result = 'Данные отправлены!';
} catch (Exception $e) {
    $result = 'Ошибка';
    $status = 'Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}';
}

// Отображение результата
$response = ["result" => $result, "resultfile" => $rfile, "status" => $status];
header('Content-type: application/json');
echo json_encode($response);

?>



