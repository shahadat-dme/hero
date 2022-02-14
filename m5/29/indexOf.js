function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please provide array of strings'
    }
    let mega = friends[0]
    for(let friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['dipok','sobuj','jahid','safayet']
const myBuddy= megaFriend(friends)
// console.log(myBuddy);
if(friends.indexOf('sobuj') != -1){
    console.log('Lion exists');
}else{
    console.log("Does't exists");
}
if(friends.includes('dipok')){
    console.log('includes');
}