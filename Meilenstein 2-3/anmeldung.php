<?php

$my_file = 'C:\\xampp\\htdocs\\team42\\team42\\Meilenstein 2-3\\anmeldeDaten\\' . $_GET["messe"] . '.txt';
$handle = fopen($my_file,"a") or die('Cannot open file:  ' . $_GET["messe"] . '.txt');

$data =  $_GET["vorname"]." ".$_GET["name"].", ".  $_GET["matrikelnr"] .", ". $_GET["email"].", " . $_GET["handy"].", " . $_GET["studiengang"].";\n";

fwrite($handle, $data);

?>


