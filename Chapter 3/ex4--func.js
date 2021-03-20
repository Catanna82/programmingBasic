function min(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * min(base, exponent - 1);
    }
  }
 console.log(min(0,10));
