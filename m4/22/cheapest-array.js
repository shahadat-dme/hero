const phones = [
    {name: 'sam', p: 450, camera: 12, storage: 32},
    {name: 'walton', p: 250, camera: 12, storage: 32},
    {name: 'xiaomi', p: 150, camera: 12, storage: 32},
    {name: 'oppo', p: 350, camera: 12, storage: 32},
    {name: 'noki', p: 850, camera: 12, storage: 32},
    {name: 'apple', p: 950, camera: 12, storage: 32},
]
let cheapest = phones[0]
for(let phone of phones){
    if(phone.p < cheapest.p){
        cheapest = phone
    }
}
console.log(cheapest);