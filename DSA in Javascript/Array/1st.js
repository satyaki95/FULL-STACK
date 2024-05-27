/**
 *Given an array ["123f", "1dsa12", "65fd", "sadfa", "asdasd"]
 *Each item can contain 0-9, a-z, A-Z where a-z, A-Z characters are unwanted
 *Sum of all the numbers after removing all the unwanted characters 123+112+1212+65
 **/

const sumArr = (arr) => {
  const sum = arr.reduce((acc, item) => {
    const number = parseInt(item.replace(/[^0-9]/g, ""));

    if (!isNaN(number)) {
      return acc + number;
    }
    return acc;
  }, 0);
  return sum;
};

console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
console.log(sumArr(["asdasd"])); // 0
console.log(sumArr(["asdasd12"])); //12
console.log(sumArr(["12"])); // 12
