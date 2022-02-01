const m1 = Math.round(Math.random()*10)
console.log(m1);

const m2 =  Math.max(5,7,4,2)
console.log(m2);

const m3 =  Math.floor(13.67)
console.log(m3);

const m4 =  Math.abs(-78)
console.log(m4);

var a = 2; 
var b = 3; 
if(a < b){
    console.log("Hello");
}

function add (a, b){
    return a + b
}
console.log(add("adam"+"eve"));

var result = 100 + Math.random()*100;
console.log(result);


var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter = 'a'){
    count++;
  }
}
console.log(count)