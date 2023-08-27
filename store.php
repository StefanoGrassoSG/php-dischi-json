<?php
include 'functions.php';

$response = 'error';

if(validation()) {
    $response = json_encode($_POST['disc']);

    $disks = file_get_contents('database/disks.json');
    $disks = json_decode($disks, true);

    $newDisk = [
        'id' => $disks[count($disks) - 1]['id'] + 1,
        'title' => $_POST['disc']['title'],
        'author' => $_POST['disc']['author'],
        'year' => $_POST['disc']['year'],
        'img' => $_POST['disc']['img']
    ];

    $disks[] = $newDisk;

    file_put_contents('database/disks.json', json_encode($disks));
}

header('Content-Type: application/json');

echo $response;