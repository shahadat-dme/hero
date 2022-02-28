// Error Type: 1. parse Time 2. run time
// try, catch, finally, throw - error handling in JavaScript
/*
try {
    console.log('Start of try');
    unicycle;
    console.log('End of try runs --never reached');
}catch(err){
    console.log('Error has occured: '+ err);
} finally{
    console.log('This is always run');
}
console.log('...Then the excution continues');
*/

// let json = '{"age": 30, "name": "SH"}'  // no error
let json = '{"age": 30}'
try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete date: no name");
    }
    console.log( user.name );
}catch(e){
    console.log("JSON Error: "+ e);
}