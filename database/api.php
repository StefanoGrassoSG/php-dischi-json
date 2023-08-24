<?php 

$string = file_get_contents('disks.json');

header('content-type: application/json');

echo $string;