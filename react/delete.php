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
 
 // Populate Student ID from JSON $obj array and store into $id.
 $id = $obj['id'];
 
 // Creating SQL query and Updating the current record into MySQL database table.

 $Sql_Query = "DELETE FROM account WHERE id = '$id'" ;

 //$Sql_Query = "DELETE FROM user WHERE id = '12'" ;
 
 
 if(mysqli_query($conn,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Xoa thanh cong !' ;
 
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