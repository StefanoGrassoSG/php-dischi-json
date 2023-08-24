<?php 

$string = file_get_contents('disks.json');

if (isset($_GET['id'])) {

    $dischi = json_decode($string, true);
    $dischifiltrati = [];

    foreach ($dischi as $disco) {
        if ($disco['id'] == $_GET['id']) {
            $dischifiltrati[] = $disco;
        }
    }

    header('Content-Type: application/json');

    echo json_encode($dischifiltrati);
}
else {
    header('Content-Type: application/json');
    
    echo $string;
}

