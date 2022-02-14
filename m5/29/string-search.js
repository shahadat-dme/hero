// const products = ['The United Nations is',
//  'in close contact with the', 
//  'authorities to secure their release," Geekie said. ']

//  const searching = 'Nations';

//  const output = [];
// for(const product of products){
//     if(product.indexOf(searching) != -1){
//         if(product.toLowerCase.indexOf(searching.toLowerCase()))
//         output.push(product)
//     }
// }
// console.log(output);


const products = ['The United Nations is',
                    'in close contact with the', 
                    'authorities to secure their release," Geekie said. ']

 const searching = 'Nations';

 const output = [];
for(const product of products){
        if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1 ){
            output.push(product)
        }

    }
console.log(output);