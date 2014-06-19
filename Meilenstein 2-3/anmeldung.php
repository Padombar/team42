<?php

$my_file = 'C:\\xampp\\htdocs\\team42\\team42\\Meilenstein 2-3\\anmeldeDaten\\' . $_GET["messe"] . '.txt';
$handle = fopen($my_file,"a") or die('Cannot open file:  ' . $_GET["messe"] . '.txt');

$data =  "Willkommen " . $_GET["name"] . "\nDeine E-Mail Adresse lautet: " . $_GET["email"] . "\nDeine MatrikelNr ist: " . $_GET["matrikelnr"] . "\n" .
                "Du bist Studiengang: " . $_GET["studiengang"] . "\nDu meldest dich für die: " . $_GET["messe"] . " an" . "\nDeine HandyNr ist: " . $_GET["handy"]."\n";

fwrite($handle, $data);

?>


