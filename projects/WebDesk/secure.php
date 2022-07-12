<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HashB64Secure</title>
    <link rel="stylesheet" href="styles/base.css">
</head>
<body>

<style>
body {
    padding: 10px;
}
</style>
<?php
function hash_sha512($string) {
    return hash('sha512', $string);
}

function window_console($data) {
    echo '<script> console.log("'.$data.'")</script>';
}

function js($script) {
    echo '<script>'.$script.'</script>';
}

?>
<h2>Data</h2>
<?php
      echo "<br>";
      echo hash_sha512($_POST['password']).' (as HASH-SHA512)';
      echo '<br>';
      echo base64_encode(base64_encode($_POST['username'])).' (as b64(b64)))';
?>
</body>
</html>