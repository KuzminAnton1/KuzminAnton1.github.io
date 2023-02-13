<?php

if(!is_dir('../message/')){
    mkdir('../message/');
    file_put_contents('../message/', 'message-list.txt');
}

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

$newPeople = 'name - ' . $name . ', email - ' . $email . ', message - ' . $message;

file_put_contents('../message/message-list.txt', PHP_EOL . $newPeople, FILE_APPEND);

// $newFile = fopen("../message/message-list.txt", 'a');
// fwrite($newFile, $newPeople);
// fclose($newFile);


