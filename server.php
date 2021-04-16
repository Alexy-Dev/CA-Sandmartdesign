<?php
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);
$con_str=mysql_connect('localhost', 'root', '7777gala', 'snowgalaxy_smd-db');
  if(mysql_connect('localhost','root')){
  echo "Hello!!";
}
  mysql_select_db('snowgalaxy_smd-db',$con_str);
  $query_str="INSERT INTO `snowgalaxy_smd-db`.`requests` (`id`, `name`, `phone`) VALUES (NULL, 'Leon', 380503559235)";
  mysql_query($query_str);
  mysql_close();