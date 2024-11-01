<!DOCTYPE html>
<html>


<head>

	<title>
		TD3 - Ruzzle
	</title>
	<meta http-equiv = "Content-Type" content = "text/html; charset=utf-8" />

</head>


<body>


	<div id = "jeu">
	
		<div id = "chrono">
			START
		</div>
		
		<div id = "score"></div>
		
		<div id = "mot"></div>
		
		<div id = "plateau"></div>
		
	</div>
	
	
	<audio id = "son_ok" src = "td3_ok.mp3"></audio>
	<audio id = "son_ko" src = "td3_ko.mp3"></audio>
	<audio id = "son_fin" src = "td3_fin.mp3"></audio>
	

</body>


<link charset = "utf-8" href = "style.css" media = "screen" rel = "stylesheet" type = "text/css" />
<script charset = "utf-8" src = "dico.js" type = "text/javascript"></script>
<script charset = "utf-8" src = "script.js" type = "text/javascript"></script>

<script>
	initJeu ();
</script>


</html>
