// Bai 1

function random_item(items) {

  return items[Math.floor(Math.random() * items.length)];

}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

// Bai 2

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var arr = [2, 11, 37, 42];
shuffleArray(arr);
console.log(arr);

// Bai 3

var array1 = ["cat", "sum", "fun", "run"],
  array2 = ["bat", "cat", "dog", "sun", "hut", "gut"];

function getMatch(a, b) {
  var matches = [];

  for (var i = 0; i < a.length; i++) {
    for (var e = 0; e < b.length; e++) {
      if (a[i] === b[e]) matches.push(a[i]);
    }
  }
  return matches;
}

getMatch(array1, array2);

// Bai 4

var array1 = ["cat", "sum", "fun", "run"],
  array2 = ["bat", "cat", "dog", "sun", "hut", "gut"];

function symmetricDifference(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  for (i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) === -1) {
      result.push(a2[i]);
    }
  }
  return result;
}

symmetricDifference(array1, array2)

//   Bai 5
var array1 = ["cat", "sum", "fun", "run"],
  array2 = ["bat", "cat", "dog", "sun", "hut", "gut"];

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var a = array1.concat(array2)
var unique = a.filter(onlyUnique);

console.log(unique);

// Bai 6

'#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

// Bai 7
function getAllSubstrings(str) {

  var i, j, result = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

var theString = 'somerandomword';
console.log(getAllSubstrings(theString));

// Bai 8

var isAscending = a => a.slice(1)
  .map((e, i) => e > a[i])
  .every(x => x);

console.log(isAscending([1, 2, 3, 4]));
console.log(isAscending([1, 2, 5, 4]));

// Bai 9

function checkDecrease(arr) {
  for (var i in arr) {
    for (var j = i + 1; j < arr.length + 1; j++) {
      if (typeof arr[i] === 'number' && typeof arr[j] === 'number' && arr[i] % 2 !== 0 && arr[j] % 2 !== 0 && arr[i] > arr[j]) return true;
    }
  }
  return false;
}

console.log(checkDecrease([29, 7, 3]))

// Bai 10


function smallestPossibleNumber(num) {
  let sorted = num.split('').sort();
  if (sorted[0] != '0') {
    return sorted.join('');
  }
  let index = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > "0") {
      index = i;
      break;
    }
  }

  let temp = sorted[0];
  sorted[0] = sorted[index];
  sorted[index] = temp;
  return sorted.join('');
}

console.log(smallestPossibleNumber('55010'));
console.log(smallestPossibleNumber('7652634'));
console.log(smallestPossibleNumber('000001'));
console.log(smallestPossibleNumber('000000'));

// Bai 11

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

var color = random_rgba();
console.log(color);

// Bai 12
var names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];

var uniq = names.reduce(function (a, b) {
  if (a.indexOf(b) < 0) a.push(b);
  return a;
}, []);

console.log(uniq, names)

// bai 13


const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort();
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}

let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);


// Bai 14


console.log(stringContainString(["Alien", "line"]));    // true
console.log(stringContainString(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));    // true
console.log(stringContainString(["Hello", "hey"]));    // false

function stringContainString(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

// Bai 15 

function lowest(arr, numb) {
  arr.push(numb);
  var store;
  var index;
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        store = arr[i];
        arr[i] = arr[j];
        arr[j] = store;
      }
    }
  }
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] === numb) {
      index = k;
      break;
    }
  }
  return index;
}
console.log(lowest([3, 10, 5], 3));
console.log(lowest([40, 60], 50));
console.log(lowest([10, 20, 30, 40, 50], 35));

// Bai 16

console.log(newArray([0, 1, 2, 3, 4, 5],2));
function newArray(arr, quantity) {
	var begin = [];
	var newArr = [];
	for (var i = 0; i <= quantity; i ++) {
		begin.push(arr[i]);
		arr.splice(i, 1);
		i = i - 1;
		quantity = quantity - 1;
	}
	newArr.push(begin);
	newArr.push(arr);
	console.log(newArr);
	return JSON.stringify(newArr);
}





