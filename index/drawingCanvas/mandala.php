<?php


sleep(1);

$img = $_POST['imgBase64'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);

$fileName = $_POST['fileName'];
$arrayElement = $_POST['arrayElement'];
$txtFile = 'filesSaved.txt';

file_put_contents('mandalas/'.$fileName, $fileData);

$file = fopen($txtFile,  'a');
$arrayElement .= ', ';
fwrite($file, $arrayElement);
fclose($file);

?>
