<?php
 header("Access-Control-Allow-Origin: *");

require('Pintlabs/Service/Brewerydb.php');

// currently using apikey from Ben (limit of 400 calls per day)
$apikey = "abb91e648ffa2876c0a10ff6beb50455";

$bdb = new Pintlabs_Service_Brewerydb($apikey);
$bdb->setFormat('php');


try {
    // The first argument to request() is the endpoint you want to call
    // 'brewery/BrvKTz', 'beers', etc.
    // The third parameter is the HTTP method to use (GET, PUT, POST, or DELETE)
    $results = $bdb->request('styles', $params, 'GET'); // where $params is a keyed array of parameters to send with the API call.
    echo json_encode($results);
} catch (Exception $e) {
    $results = array('error' => $e->getMessage());
}

?>
