<?php 

$HostName = "localhost";

$DatabaseName = "sinhvien12";

$HostUser = "root";

$HostPass = "";
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 


$json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Student name from JSON $obj array and store into $tenmon.
 $tenmon = $obj['tenmon'];
 
 // Populate Student Class from JSON $obj array and store into $gia.
 $gia = $obj['gia'];
 
 // Populate Student Phone Number from JSON $obj array and store into $mota.
 $mota = $obj['mota'];
 
 // Populate Email from JSON $obj array and store into $S_Email.
 //$anh = $obj['anh'];

 //$anh = 'https://photo-atm-baomoi.zadn.vn/w200_r1x1/adtima-media.zadn.vn/2019/10/a3643bb4-6a38-4296-abe8-f8eb5196644c.png';


 
 // Creating SQL query and insert the record into MySQL database table.
 // $Sql_Query = "insert into account (tenmon,gia,mota,anh) values ('$tenmon','$gia','$mota','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9Vz8R-MCwCH5J8j-9udm-bc8Yf3dSDbeGzZKBhbrEsw5vg9t')";
 
  $Sql_Query = "insert into  account (tenmon,gia,mota,anh) values ('gà nướng','100k','gà nướng món ăn dân tộc thái','https://media.metrip.vn/images/h8%27(1).jpg')";
 
 if(mysqli_query($conn,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Them thanh cong' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($conn);

 ?>