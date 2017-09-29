/*
var day = prompt("Is it morning, noon or night right now?")

if (day === "morning");{
  console.log ("You should try some eggs and toast for breakfast!")
}

if (day === "noon");{
  console.log ("You might want to try a salad for lunch!")
}
*/




var m = "morning";
var n = "noon";
var e = "night";
var day = prompt("Is it morning, noon or night right now?")



if (day === m){
  console.log ("You should try some eggs and toast for breakfast!");
}else if (day === n){
  console.log ("You might want to try a salad for lunch!");
}else if (day === e){
  console.log ("You might enjoy some chicken and rice for dinner tonight!")
}else if(day !== m, n, e){
  console.log ("you might want to check your spelling hombre!!")
}