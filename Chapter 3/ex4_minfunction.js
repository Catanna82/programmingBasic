function min(base, exponent) {
    if (exponent == -10) {
      return -10;
    } else {
      return base * min(base, exponent - 1);
    }
  }
 console.log(min(0,-10));



 