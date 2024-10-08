console.log("working in arrays");

const arr =[5,1,7,3,8,5];
arr.sort();
console.log(arr);
arr.reverse();  // reverse an array
console.log(arr);


//push
const arr_access = [1,2,3,4,5];
arr_access.push(6);
console.log("push",arr_access);

//pop
arr_access.pop();
console.log("pop",arr_access);

// unshift
arr_access.unshift(0);
console.log("unshift",arr_access);

//shift
arr_access.shift();
console.log("shift",arr_access);

// sliced
const sliced_arr = arr_access.slice(0, 2);
console.log("original arr", arr_access);
console.log("slice arr", sliced_arr);

//spliced
arr_access.splice(1,3,);
console.log("spliced original arr",arr_access);

//MRF  (MAP, FILTER, REDUCE)

let mrf =[50, 40, 75, 49];

let newmrf = mrf.map((val, index, accarr) =>{
    console.log("value : ", val);
    console.log("index : ", index);
    console.log("accarr : ", accarr);
return val * 2;
})
console.log(newmrf);

// filter

let fil_newmrf = newmrf.filter((val, index, accarr) =>{
    console.log("value : ", val);
    console.log("index : ", index);
    console.log("accarr : ", accarr);
return val != 4;
})
console.log(fil_newmrf);

// reduce
let result = fil_newmrf.reduce((acc, val, index, accarr) =>{
    console.log("value : ", val);
    console.log("index : ", index);
    console.log("accarr : ", accarr);
return (acc += val);
})
console.log(result);


//task

const failure =[50, 30, 75, 39, 80];
const failure_result =failure
.map((val) => val +10)
.filter((val) => val > 40)
.reduce((acc, val) =>{
    acc++;
    return (acc += val);
}, 0);
console.log("failure_result", failure_result)
