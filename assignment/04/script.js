// problem 01

// const ana = 32;
function anaToVori(ana) {
    if (typeof ana != "number") {
        return "Please Give me Number";
    } else if (ana < 0) {
        return "Please Give Positive Number";
    } else {
        return ana / 16;
    }
}

// const vori = anaToVori(ana);
// console.log(vori);


// problem 02
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;

    const TotalSingaraPrice = singaraQuantity * singaraPrice;
    const TotalSomuchaPrice = somuchaQuantity * somuchaPrice;
    const TotalJilapiPrice = jilapiQuantity * jilapiPrice;

    const totalCost = TotalSingaraPrice + TotalSomuchaPrice + TotalJilapiPrice
    return totalCost
}
// const total = pandaCost(1,1,1)
// console.log(total);

// problem 03
function picnicBudget(number) {
    //Picnic cost 1 to 100 = 5000Tk, 101 to 200 = 4000Tk, 201 to 201+ = 3000Tk
    if (typeof number != "number") {
      return "error message";
    } else {
      if (number <= 100) {
        return number * 5000;
      } else if (number <= 200) {
        return (number - 100) * 4000 + 100 * 5000;
      } else {
        return (number - 200) * 3000 + 100 * 4000 + 100 * 5000;
      }
    }
  }




// problem 04

// const names = ["Shahadat", "Dipok","Dipu","Shahadat"]
function oddFriend(names) {
    const odd = []
    for (let element of names) {
        if ( typeof element != "string") {
        return "heare error message";
        }
        if (element.length % 2 == 1) {
            odd.push(element)
        }
        
    }
    return odd;
}
// const uniqueNames = oddFriend(names)
// console.log(uniqueNames);