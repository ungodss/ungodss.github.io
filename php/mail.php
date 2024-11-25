<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/assets/css/style.min.css">
	<title>Ваше сообщение отправлено</title>
</head>

<body class="modalback-page">

	<?php
	$back = "<p class='msg__back'><a class='msg__backlink' href=\"/index.html\">Вернуться назад</a></p>";

	if (!empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['mail']) and !empty($_POST['message'])) {
		$choose1 = $_POST['choose1'];
		$name = trim(strip_tags($_POST['name']));
		$company = trim(strip_tags($_POST['company']));
		$phone = trim(strip_tags($_POST['phone']));
		$mail = trim(strip_tags($_POST['mail']));
		$message = trim(strip_tags($_POST['message']));

		mail('ssolodchuk@inbox.ru', 'Письмо с demetra-soft', 'Вид услуги: ' . $choose1 . PHP_EOL . 'Вам написал: ' . $name . PHP_EOL . 'Название организации: ' . $company . PHP_EOL . 'Его номер: ' . $phone . PHP_EOL .'Его почта: ' . $mail . PHP_EOL .'Его сообщение: ' . $message, 'From: sadad81@bk.ru');

		echo  "<div class='msg__text'>Ваше сообщение успешно отправлено!<Br> Вы получите ответ в ближайшее время<Br></div> $back";
			
		exit;
	} else {
		echo " Для отправки сообщения заполните все поля! $back ";
		exit;
	}
	?>

</body>

</html>