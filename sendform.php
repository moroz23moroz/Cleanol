<?php
$contacts = array("info@aqts.by", "sales@aqts.by", "maria@texo.by");
$name = trim($_POST['name']);
$phone = trim($_POST['tel']);
$email = trim($_POST['email']);
$city = trim($_POST['city']);
$message = trim($_POST['message']);
$hidden = trim($_POST['title']);
$fromMail = 'info@robot.aqts.by'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = implode(',', $contacts); //Ваша почта
$subject = 'Форма обратной связи robot.aqts.by';
$subject = '=?utf-8?b?' . base64_encode($subject) . '?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: " . $fromName . " <" . $fromMail . "> \r\n";

// Содержимое письма 
$body = "Получено письмо с сайта \n Имя: $name\nТелефон: $phone\nПочта: $email\nГород: $city\nСообщение: $message\nС какой формы: $hidden";

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) {
    $mail = mail($emailTo, $subject, $body, $headers, '-f' . $fromMail);
    return;
}
