//           =================================================uygi vazifa=============================================

let input = document.getElementById("input");
let input2 = document.getElementById("input2");
let output = document.getElementById("output");
let btn = document.getElementById("btn");








//===================================================1-misol==================================================================


function firstLast6(nums) {

    if (nums[0] == 6 || nums[nums.length - 1] == 6) {

        output.value = "true";

    } else {

        output.value = "false";

    }

}

// btn.onclick = function(){

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");
//     firstLast6( inputArr );

// }



//===================================================2-misol==================================================================


function sameFirstLast(nums) {

    if (nums.length === 0) {

        output.value = "false";


    } else if (nums[0] === nums[nums.length - 1]) {

        output.value = "true";

    } else {

        output.value = "false";

    }

}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     let input2Arr = input2.value.split(",");


//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     sameFirstLast(inputArr);

// }


//===================================================3-misol==================================================================

function commonEnd(a, b) {

    if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {

        output.value = "true";

    } else {

        output.value = "false";

    }

}

// btn.onclick = function () {
//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     commonEnd(inputArr, input2Arr);

// }
//===================================================4-misol==================================================================
function sum3(nums) {

    let total = 0;

    nums.forEach(function (num) {

        total += +num;

    })


    output.value = total;

}

// btn.onclick = function () {
//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     sum3(inputArr);

// }



//===================================================5-misol==================================================================

function rotateLeft3(nums) {

    let arr = [];

    for (let i = 1; i < nums.length; i++) {

        arr.push(nums[i]);

    }
    arr.push(nums[0]);

    output.value = arr;

}


// btn.onclick = function () {
//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     rotateLeft3(inputArr);

// }



//===================================================6-misol==================================================================
function reverse3(nums) {

    let arr = [];

    for (let i = nums.length - 1; i >= 0; i--) {

        arr.push(nums[i]);

    }

    output.value = arr;
}

// btn.onclick = function () {
//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     reverse3(inputArr);

// }

//===================================================7-misol==================================================================

function maxEnd3(nums) {

    let arr = [];
    let max = 0;

    if (nums[0] > nums[nums.length - 1]) {

        max = nums[0];

    } else {

        max = nums[nums.length - 1];

    }

    nums.forEach(function () {

        arr.push(max);

    })

    output.value = arr;

}

// btn.onclick = function () {
//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     maxEnd3(inputArr);

// }


//===================================================8-misol==================================================================
function sum2(nums) {

    if (nums.length == 0) {

        output.value = 0;

    } else if (nums.length < 2) {

        output.value = nums[0];

    } else {

        output.value = +nums[0] + +nums[1];

    }



}

// btn.onclick = function () {
//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     sum2(inputArr);

// }

//===================================================9-misol==================================================================

function middleWay(a, b) {

    let arr = [];

    arr.push(a[1]);
    arr.push(b[1]);

    output.value = arr;

}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     middleWay(inputArr, input2Arr);

// }


//===================================================10-misol==================================================================

function makeEnds(nums) {

    let arr = [];

    arr.push(nums[0]);
    arr.push(nums[nums.length - 1]);

    output.value = arr;
}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     makeEnds(inputArr);

// }


//===================================================11-misol==================================================================

function has23(nums) {

    if (nums[0] == 2 || nums[0] == 3 || nums[1] == 2 || nums[1] == 3) {

        output.value = true;

    } else {

        output.value = false;

    }
}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     has23(inputArr);

// }
//===================================================12-misol==================================================================

function no23(nums) {


    if (nums[0] == 2 || nums[0] == 3 || nums[1] == 2 || nums[1] == 3) {

        output.value = false;

    }
    else {

        output.value = true;

    }

}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     no23(inputArr);

// }
//===================================================13-misol==================================================================
function makeLast(nums) {
    let arr = [];

    for (let i = 0; i < nums.length * 2 - 1; i++) {

        arr.push(0);

    }

    arr.push(nums[nums.length - 1]);
    output.value = arr

}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     makeLast(inputArr);

// }
//===================================================14-misol==================================================================

function double23(nums) {
    if (nums.length >= 2 && nums[0] == nums[1]) {

        output.value = true;

    } else {

        output.value = false;

    }

}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     double23(inputArr);

// }

//===================================================15-misol==================================================================
function fix23(nums) {

    let arr = nums.slice(1, 3);
    let index = arr.indexOf("3");

    arr[index] = 0;
    arr.unshift(nums[0]);
    output.value = arr;

}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     fix23(inputArr);

// }

//===================================================16-misol==================================================================
function start1(a, b) {

    let count = 0;

    if (a[0] == 1) {
        count++
    }
    if (b[0] == 1) {

        count++

    }

    output.value = count;

}


// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     start1(inputArr , input2Arr);

// }

//===================================================17-misol==================================================================

function biggerTwo(a, b) {
    let A = a[0] + a[1];
    let B = b[0] + b[1];

    if (A == B) {

        output.value = a;

    }
    if (A > B) {

        output.value = a;

    } else {

        output.value = b;

    }

}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     biggerTwo(inputArr, input2Arr);

// }

//===================================================18-misol==================================================================

function makeMiddle(nums) {
    let len = nums.length;
    let middle = Math.floor(len / 2);
    let arr = [];
    arr.push(nums[middle - 1]);
    arr.push(nums[middle]);

    output.value = arr;
}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     makeMiddle(inputArr);

// }
//===================================================19-misol==================================================================

function plusTwo(a, b) {
    let arr = a.concat(b);
    output.value = arr;
}

// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     plusTwo(inputArr, input2Arr);

// }

//===================================================20-misol==================================================================

function swapEnds(nums) {
    let last = nums[nums.length - 1];
    let middle = nums.slice(1, last);
    let arr = [];
    arr.push(last);

    for (let i = 1; i < middle.length; i++) {

        arr.push(nums[i]);

    }
    if (nums.length < 2) {
        output.value = nums;
    }

    arr.push(nums[0]);

    output.value = arr;
}


// btn.onclick = function () {

//     let inputArr = input.value.split(",");
//     let input2Arr = input2.value.split(",");

//     if (inputArr.length === 1 && inputArr[0] === "") {

//         inputArr = [];

//     }

//     if (input2Arr.length === 1 && input2Arr[0] === "") {

//         input2Arr = [];

//     }

//     swapEnds(inputArr);

// }