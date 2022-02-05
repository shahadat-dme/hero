function pandaCost(singara, somucha, jilapi) {
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;
    // Function call for error handaling
    const value = errorHandale(singara, somucha, jilapi);
  
    if (value == false) {
      return (
        singara * singaraPrice + somucha * somuchaPrice + jilapi * jilapiPrice
      );
    } else {
      return value;
    }
  }