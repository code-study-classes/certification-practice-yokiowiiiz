function calculateDistance(x1, x2) {
    return Math.abs(x2 - x1);
  }
  
console.log(calculateDistance(3, 10));
console.log(calculateDistance(-5, 5));

function calculateSegmentProduct(A, B, C) {
    const lengthAC = Math.abs(C - A);
    const lengthBC = Math.abs(B - C);
    return lengthAC * lengthBC;
  }
  
  console.log(calculateSegmentProduct(2, 8, 5));

  function calculateKilobytes(fileSizeInBytes) {
    return Math.floor(fileSizeInBytes / 1024);
  }
  
  console.log(calculateKilobytes(2048));

function calculateSegments(lengthA, lengthB) {
    return Math.floor(lengthA / lengthB);
  }
  
  console.log(calculateSegments(10, 3));

function calculateDigitSum(twoDigitNumber) {
  let first_num = Math.floor(twoDigitNumber % 10);
  let second_num = Math.floor(twoDigitNumber / 10);
  return Math.abs(first_num + second_num);
}

console.log(calculateDigitSum(27));

function swapHundredsAndTens(threeDigitNumber) {
    const hundreds = Math.floor(threeDigitNumber / 100);
    const tens = Math.floor((threeDigitNumber / 10) % 10);
    const ones = threeDigitNumber % 10;
    return tens * 100 + hundreds * 10 + ones;
}

console.log(swapHundredsAndTens(456));

function getHundredsDigit(number) {
    if (number > 999)
    return Math.floor(number / 100) % 10;
}

console.log(getHundredsDigit(1422));

function getFullHours(seconds) {
    return Math.floor(seconds / 3600);
    return Math.floor(seconds / 7200);
    return Math.floor(seconds / 10800);
}

console.log(getFullHours(3600));

function getDayOfWeek(dayOfYear) {
    const firstDayOfWeek = 1;
    const dayOfWeek = (firstDayOfWeek + dayOfYear - 1) % 7;
    return dayOfWeek;
  }
  
  console.log(getDayOfWeek(1));

function countSquares(A, B, C) {
    const horizontalSquares = Math.floor(A / C);
    const verticalSquares = Math.floor(B / C);
    return horizontalSquares * verticalSquares;
  }
  
  console.log(countSquares(4, 6, 2));
  export{calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum, swapHundredsAndTens, getHundredsDigit, getFullHours, getDayOfWeek, countSquares}
