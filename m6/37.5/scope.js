function PatriChai(age, earning){
    console.log(trueAge);
    var decision = canMarry(15000)
    console.log(decision);
    console.log(age);
    console.log(earning);
    
    var trueAge = age + 7

    function canMarry(expense){
        const remaining = earning - expense;
        if(remaining > 1000){
            return true;
        }
        return false;
    }
}
PatriChai(21, 5000)