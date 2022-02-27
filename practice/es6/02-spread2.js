var obj = {
    a: 1, 
    b: 2, 
    c: 3,
    
    foo: function(d, e, f){
        console.log("a d", this.a, d);
        console.log("b e", this.b, e);
        console.log("c f", this.c, f);
    }
};
var arr = [4, 5, 6];

obj.foo(...arr);