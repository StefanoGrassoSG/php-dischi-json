<?php 

$string = file_get_contents('disks.json');

$disks = json_decode($string, true);

var_dump($disks);