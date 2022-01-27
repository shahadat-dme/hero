var danishP = 50;
var butterP = 25;
var toastP = 10;
var budget = 100; 
// var budget = 40; 
// var budget = 20; 

if(danishP < budget){
    console.log("Danish")
}else if(butterP < budget){
    console.log("Butter");
}else if (toastP < budget){
    console.log("toast");
}
else{
    console.log("Batash");
}