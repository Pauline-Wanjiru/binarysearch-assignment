// Given an array of unsorted numbers, return the index of the following 
// target if the target exists in the array. If the target is not found,
//  return null



function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
  let num = [45, 12, 6, 89, 2, 5];
  let sortedNum = mergeSort(num);
  console.log(sortedNum)
  function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
      const midIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (arr[midIndex] === target) {
        return midIndex;
      } else if (arr[midIndex] < target) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    }
    return null;
  }
  let target = 6;
  let targetIndex = binarySearch(sortedNum, target);
  console.log(targetIndex);



// Given an unsorted array of numbers return the sorted array in descending order

function sortDescending(arr) {
  if(arr.length < 2) {
  return arr;
  }
  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid);
  return sort(sortDescending(left), sortDescending(right));
  }
  function sort(left, right) {
  let result = [];
  while(left.length && right.length) {
  if(left[0] > right[0]) {
  result.push(left.shift());
  } else {
  result.push(right.shift());
  }
  }
  return [...result, ...left, ...right];
  }
  let arr=[123,89,5,23,9,56];
  let descendingArrs = sortDescending(arr.reverse());
  console.log(descendingArrs);

  




// Given the following array, search for the following target

function mergeSorting(array) {
    if (array.length <= 1) {
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    const right = array.slice(middle);
    return sorting(mergeSorting(left), mergeSort(right));
  }
  function sorting(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
   let arr2 = [1,4,78,2,67,3];
  const sortedarr2 = mergeSorting(arr2);
  console.log(sortedarr2)
  function binarySearch2(arr2, target2) {
    let leftIndex = 0;
    let rightIndex = arr2.length - 1;
    while (leftIndex <= rightIndex) {
      let midIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (arr2[midIndex] === target) {
        return midIndex;
      } else if (arr2[midIndex] < target2) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    }
    return null;
  }
  let target2 = 34;
  let target2Index = binarySearch2(sortedarr2, target2);
  console.log(target2Index);


















   
   










