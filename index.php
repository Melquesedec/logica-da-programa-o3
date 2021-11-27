<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/estilo.css?<?php echo mt_rand(1, 9) ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 03</title>
</head>
<body>
        <div id="borda">
    <h2>Conversor de temperatura</h2>
    <label>Temperatura em</label>
    <select id="seleciona-temperatura1">
        <option value="0">Kelvin</option>
        <option value="1">Fahrenheit</option>
        <option value="2">Celsius</option>
    </select>
    <input type="text" name="temperatura" id="temperatura" maxlength="4"> 
    <label>para</label>
    <select id="seleciona-temperatura2">
        <option value="0">Kelvin</option>
        <option value="1">Fahrenheit</option>
        <option value="2">Celsius</option>
    </select>
    <input type="submit" name="converter" id="converter" value="Converter" onclick="resultado()">
    <div id="resultado"></div>
        </div>
    <script type="text/javascript" src="javascript/javascript.js?<?php echo mt_rand(1, 9) ?> "></script>
</body>
</html>