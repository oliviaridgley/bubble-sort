"use strict";

var array = [2, 5, 1, 4, 7, 6];


function bubbleSort(arr) {
  var swapped = false;

  while (!swapped) {
    swapped = true;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swapped = false;
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  }
  return arr;
}


bubbleSort(array)
