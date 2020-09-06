<?php

// This PHP file is a helper for the web app found at: thespectrum.org.au/myautism

// Set headers
 header('Content-Type: application/javascript');
 // Website path to content file
 $data = file_get_contents('https://thespectrum.org.au/myautism-data/content.json?callback=ng_jsonp_callback_0');
 // Create JSONP response
 echo $_GET['callback'] . "(" . $data . ")";

 ?>
