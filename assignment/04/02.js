function pandaCost(singara, somucha, jilapi) {
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;
    // error handaling
    const items = errorHandale(singara, somucha, jilapi);
  
    if (items == false) {
      return (
        singara * singaraPrice + somucha * somuchaPrice + jilapi * jilapiPrice
      );
    } else {
      return items;
    }
  }
