//Putting the list of days into array
var day_list=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

var $small_time=document.getElementsByClassName("time_small")[0];//getting small_time element
var $big_time=document.getElementsByClassName("time_big")[0];//getting the big time
var $day=document.getElementsByClassName("day")[0];//getting the date element

var d=new Date();
$small_time.innerHTML=d.getHours()+":"+d.getMinutes();
$big_time.innerHTML=d.getHours()+":"+d.getMinutes();
$day.innerHTML=day_list[d.getDay()]
