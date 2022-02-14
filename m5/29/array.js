function megaFriend(friends){
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
console.log(myBuddy);