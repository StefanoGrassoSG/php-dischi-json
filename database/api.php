<?php 

$string = file_get_contents('disks.json');

if (isset($_GET['id'])) {
    $dischi = json_decode($string, true);
    $dischifiltrati = null;

    foreach ($dischi as $disco) {
        if ($disco['id'] == $_GET['id']) {
            $dischifiltrati = $disco;
        }
    }

    echo json_encode($dischifiltrati);
}
else {
    echo $string;
}


header('Content-Type: application/json');