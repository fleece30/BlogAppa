<?php
    $name=$_POST["search"];
    $con=mysqli_connect("localhost","test","password","test");
    if(!$con){
        die(mysqli_connect_error($con));
    }
        $query="select emp_id,last_name,horedate from employee where first_name=$name;";
        $result=mysqli_query($con,$query);
        echo "<table border=\"1\">";
        while($row=mysqli_fetch_assoc($result)){
            echo "<tr><td>".$row["emp_id"]."</td><td>".$row["last_name"]."</td><td>".$row["horedate"]."</td></tr>";
        }
        echo "</table><br><br>";
?>