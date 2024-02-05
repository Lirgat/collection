// 1. 
function findlongestword(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
      }
    }
    return longestWord;
  };
// 2. 
function sumuniquenumbers(arr) {
    let uniqueNumbers = [];
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        uniqueNumbers.push(arr[i]);
      }
    }
  
    for (let j = 0; j < uniqueNumbers.length; j++) {
      sum += uniqueNumbers[j];
    }
  
    return sum;
  };
// 3.
function mergeArrays(...arrays) {
    const mergedArray = [];
    arrays.forEach((array) => {
      array.forEach((element) => {
        if (!mergedArray.includes(element)) {
          mergedArray.push(element);
        }
      });
    });
    return mergedArray;
  };
// 4.
function hasproperty(object, propertyName) {
    return propertyName in object;
  }
// 5. 
function getpropertyvalue(obj, propertyName) {
    return obj[propertyName];
  }
