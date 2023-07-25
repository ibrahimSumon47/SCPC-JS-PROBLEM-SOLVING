const romanToInteger = (roman) => {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let result = 0;
  for (let i = 0; i < roman.length; ++i) {
    const currentSymbolValue = romanMap.get(roman[i]);
    const nextSymbolValue = romanMap.get(roman[i + 1]);
    if(nextSymbolValue> currentSymbolValue){
        result -=currentSymbolValue
    }else{
        result += currentSymbolValue
    }
  }
  return result
};
console.log(romanToInteger("I"));
console.log(romanToInteger("V"));
console.log(romanToInteger("VI"));
console.log(romanToInteger("III"));
console.log(romanToInteger("IV"));
console.log(romanToInteger("X"));
console.log(romanToInteger("XI"));
console.log(romanToInteger("L"));
console.log(romanToInteger("XC"));
console.log(romanToInteger("LD"));
