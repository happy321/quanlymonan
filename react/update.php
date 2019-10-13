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
 
 // Populate Student ID from JSON $obj array and store into $tenmon.
 $id = $obj['id'];
 
 // Populate Student name from JSON $obj array and store into $tenmon.
 $tenmon = $obj['tenmon'];
 
 // Populate Student Class from JSON $obj array and store into $gia.
 $gia = $obj['gia'];
 
 // Populate Student Phone Number from JSON $obj array and store into $mota.
 $mota = $obj['mota'];
 
 // Populate Email from JSON $obj array and store into $anh.
 $anh = $obj['anh'];
 
 // Creating SQL query and insert the record into MySQL database table.
 
 $Sql_Query = "UPDATE account SET tenmon= '$tenmon', gia = '$gia', mota = '$mota', anh = 'https://cdn.eva.vn/upload/4-2019/images/2019-10-11/medium/1570769876-599-thumbnail.jpg' WHERE id = $id";

 //$Sql_Query = "UPDATE user SET tenmon= 'Phan Van Vi', gia = 'CNTT K14 AG', mota = 'DTC156', anh = 'https://znews-photo.zadn.vn/w480/Uploaded/mdf_kxrxdf/2019_10_09/shuyingli______thumb_thumb.jpg' WHERE id = 14";

 if(mysqli_query($conn,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Update thanh cong !' ;
 
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