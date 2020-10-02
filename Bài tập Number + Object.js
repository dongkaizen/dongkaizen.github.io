// Bài 1

function tinhTheTichHinhCau(bankinh) {
    return thetich = bankinh ** 3 * 4 / 3 * Math.PI;
}

tinhTheTichHinhCau(4)

// Bai 2

function order(min, max) {
    return min - max;
}


function sumAll(arr) {
    var list = arr.sort(order);
    var a = list[0];
    var b = list[1];
    var c = 0;

    while (a <= b) {
        c = c + a;
        a += 1;
    }

    return c - list[0] - list[1];
}

sumAll([8, 3]);

// Bai 3

function kiemTraSoNguyenTo(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(kiemTraSoNguyenTo(37))


// Bai 4

function isPrime(val) {
    for (var i = 2; i < val; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrimes(num) {
    var answer = 0;


    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            answer += i;
        }
    }
    return answer;
}

sumPrimes(977);

// Bai 5

function divisorsSum(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i == 0)
            sum = sum + i;
    }
    return sum;
}

divisorsSum(12);


//Bai 6

const tenHam = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
};

console.log(Object.keys(tenHam));

// Bai 7
const traVaLue = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
};

console.log(Object.values(traVaLue));

//   Bai 8

var obj = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
};

if ("name" in obj) {
    console.log(true);
} else console.log(false);

// Cach 2

var obj = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
};

console.log(obj.hasOwnProperty('name'));

// Bai 9

var Object2 = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
}

console.log(Object.keys(Object2))

// Cach 2

var Object2 = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
}

Object.keys(Object2).length;

// bai 10

obj1 = {name: "Ba",age: 29,isStatus: false}

obj2 = {name: "Kristian",age: 27,isStatus: true}

obj3 = {name: "John",age: 52,isStatus: false}

obj4 = {name: "Brian",age: 20,isStatus: true}

obj5 = {name: "Thuy",age: 26,isStatus: true}

arr = [obj1, obj2, obj3, obj4, obj5];

result = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i].age > 25 && arr[i].isStatus) {
        result.push(arr[i]);
    }
}
console.log(result);

// bai 11
obj1 = {name: "Ba",age: 29,isStatus: false}

obj2 = {name: "Kristian",age: 27,isStatus: true}

obj3 = {name: "John",age: 52,isStatus: false}

obj4 = {name: "Brian",age: 20,isStatus: true}

obj5 = {name: "Thuy",age: 26,isStatus: true}

arr = [obj1, obj2, obj3, obj4, obj5];

arr.sort(function(a,b){
    return a.age - b.age 
})

console.log(arr);

// Case 2
var employees=[
    {name:"George", age:32, retiredate:"March 12, 2014"},
    {name:"Edward", age:17, retiredate:"June 2, 2023"},
    {name:"Sarah", age:62, retiredate:"April 30, 2020"},
    {name:"Christine", age:58, retiredate:"December 20, 2036"}
  ]

  employees.sort(function(a, b){
    return a.age-b.age
   })

console.log(employees);