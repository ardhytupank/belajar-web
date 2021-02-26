<?php

// $mahasiswa = [
//   [
//     "nama" => "Ardiansyah",
//     "nrp" => "8040130206",
//     "email" => "ardhytupank21@gmail.com"
//   ],
//   [
//     "nama" => "Martono",
//     "nrp" => "8040130231",
//     "email" => "martono@gmail.com"
//   ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=apotek', 'root', '');
$db = $dbh->prepare('SELECT * FROM obat');
$db->execute();
$obat = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($obat);
echo $data;
