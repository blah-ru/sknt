<?php
function getJsonData($url){
    $ch = curl_init(); // initialize curl handle
    curl_setopt($ch, CURLOPT_URL, $url); // set url to post to
    curl_setopt($ch, CURLOPT_FAILONERROR, 1); // Fail on errors
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // return into a variable
    curl_setopt($ch, CURLOPT_TIMEOUT, 15); // times out after 15s
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    return curl_exec($ch);
};
 $json = getJsonData('http://sknt.kvanyukov.ru/data.json');

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="/favicon.ico">
    <link href="/static/css/main.96e7e57c.css" rel="stylesheet">
    <title>Тестовое задание sknt.ru/job/frontend/ - Кирилл Ванюков</title>
</head>

<body>
    <div id="root"></div>
    <script>
        dataRate = <?php echo $json; ?>
    </script>
    <script type="text/javascript" src="/static/js/main.8b78418e.js"></script>

</body>

</html>