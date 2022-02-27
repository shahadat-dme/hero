function foo(a, b, c){
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
}
var arr = [1, 2, 3];
foo(...arr);