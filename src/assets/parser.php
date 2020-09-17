<?php

/*
This PHP file parser is a helper for the web app found at: thespectrum.org.au/myautism
*/

// Set the file path variable from the URL query
$phpFilePath = $_GET['filepath'];

// Set necessary file headers
header('Content-Type: application/javascript');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

if (isset($phpFilePath)) {

// Retrieve the markdown file path
 $dataStream = file_get_contents($phpFilePath);

 // Output the file as a stream for further processing
 echo $dataStream;

} else {
    // Error message if the file path is not provided
    die('Parser: Error! No filepath was provided. Contact the webmaster for assistance.');
}
 ?>

