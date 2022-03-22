<?php
function callback($buffer) {	
	$URL = explode('/', strtok($_SERVER['REQUEST_URI'], '?'));
	if(isset($URL['2']) && !empty($URL['2'])){
		$parse = urldecode(str_replace('-', ' ', $URL['2']));
	}else{
		$parse = "Milano";
	}
	$arr = explode(' ',trim($parse));
	$first_char = $arr[0][0];	
	if($first_char == "a"){		
		return $result = preg_replace(['/([aA]) PLACEHOLDER/', '/PLACEHOLDER/'], ["$1d ".ucwords($parse), "ad ".ucwords($parse)], $buffer);
	}else{
		return $result = preg_replace(['/([aA]) PLACEHOLDER/', '/PLACEHOLDER/'], ["$1 ".ucwords($parse), "$1 ".ucwords($parse)], $buffer);
	}	
}
ob_start("callback");


?>