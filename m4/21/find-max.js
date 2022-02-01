const bus = 160;
const bike = 150;
const army = 170;

if( bus > bike && bus > army){
    console.log("bus");
}else if(bike > bus && bike > army){
    console.log("bike");
}
// else if(army > bus && army > bike){
// console.log("army")
// }
else{
console.log("army")
}