<?php
	$URL = explode('/', strtok($_SERVER['REQUEST_URI'], '?'));
	$parse = urldecode($URL['2']);
	$fp = @fopen("whitelist.txt", 'r'); 
	if($fp) {
	   $array = explode("\n", fread($fp, filesize("whitelist.txt")));
	}
	$trimmed_array = array_map('trim', $array);
	if(array_search($parse,$trimmed_array)){
		header("Status: 200 OK");
	}else{
		header("Status: 404 Not Found");
	}
	
	
	if(array_search($parse,$trimmed_array)){
		require 'index.php';
	}else{ 
		require 'template404.php';
	} 
?>