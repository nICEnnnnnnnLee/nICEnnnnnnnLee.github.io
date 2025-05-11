<?php

header('Content-Type: text/plain');

$headers = getallheaders();

if ($headers === false) {
    echo "Cannot access headers";
} else {
    echo "HTTP headers:\n\n";
    foreach ($headers as $name => $value) {
        echo "$name: $value\n";
    }
}

/**
<?php

header('Content-Type: text/plain');

echo "HTTP headers:\n\n";

foreach ($_SERVER as $name => $value) {
    if (substr($name, 0, 5) == 'HTTP_') {
        $headerName = str_replace(' ', '-', ucwords(str_replace('_', ' ', strtolower(substr($name, 5)))));
        echo "$headerName: $value\n";
    }
}

?>

**/

?>
