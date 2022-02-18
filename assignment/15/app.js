function bmi(){
    var height=parseFloat(document.getElementById("h").value)
    var weight=parseFloat(document.getElementById("w").value)
    var bmi=weight/(height*height);
    var userBMI=document.getElementById("bmi_index");
    userBMI.textContent=bmi.toFixed(2);
}
