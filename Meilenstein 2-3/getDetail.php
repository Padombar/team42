<?php


header("Content-type: application/json");

if($_SERVER["REQUEST_METHOD"] == "GET"){
    $params = $_GET;
}
$file = $_SERVER["DOCUMENT_ROOT"]."/team42/Meilenstein 2-3/json/".$params["dateiname"].".json";
echo(file_get_contents($file));

?>