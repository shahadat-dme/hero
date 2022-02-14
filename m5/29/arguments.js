function getFullName(first, last){
    let fullName = '';
    // const fullName = first + ' ' + last;
    // return fullName;
    for(const part of arguments){
        fullName = fullName + part +' ';
    }
    return fullName;
}
const name = getFullName('Md','Shahadat', 'Hossain','Murad');
console.log(name);