<?php

$handle = fopen('http://localhost/team42/Meilenstein%202-3/anmeldeDaten/' . $_GET["messe"] . '.txt', 'w') or die('Cannot open file:  ' . $_GET["messe"] . '.txt');

$data =  "Willkommen" . $_GET["name"] . "\n" .
                "Deine E-Mail Adresse lautet:" . $_GET["email"] . "\n" .
                "Deine MatrikelNr ist:" . $_GET["matrikelnr"] . "\n" .
                "Du bist Studiengang:" . $_GET["studiengang"] . "\n" .
                "Du meldest dich für die:" . $_GET["messe"] . an . "\n" .
                "Deine HandyNr ist:" . $_GET["handy"];

fwrite($handle, $data);

?>


