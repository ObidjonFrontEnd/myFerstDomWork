// let users = {
    
// }


// function isEmpty(obj){

//     let value = Object.keys(obj);
   
//     if(value.length == 0){

//         return true;

//     }

//     return false;
// }

// console.log(isEmpty(users));



// function total(obj){

//     let value = Object.values(obj);
//     let result = 0; 

//     value.forEach(function(val){

//         result +=val;

//     })

//     return result;

// }

// let son = {
//     n1:1,
//     n2:2,
//     n3:3,
//     n4:4,
//     n5:5,
//     n6:6,
//     n7:7,
//     n8:8,
//     n9:9,
//     n10:10
// }

// console.log(total(son));

// function toObject(arr , obj){
//     let keys = Object.keys(obj);
//     let objectNumberOne = {
//         year : 2002,
//     };
//     for(let i = 0 ; i < keys.length ; i++){
//         Object.defineProperty( objectNumberOne , keys[i] , {value:arr[i]} ) 
//     }
//     return objectNumberOne;
// }

// function double(obj){
//     let newArr = Object.values(obj);
//     let arr = [];
    
//     newArr.forEach(function(value){

//         if((typeof value) == "number"){

//            arr.push(value*2); 

//         }

//     })

//     return arr;
// }

// let object = {
//     name: "light" ,
//     age : 22 ,
//     rost: 180 ,
// }

// let art = [10 , 20 , 30]
// console.log(double(object));
// console.log( art , object) ;

// function seeColor(str){
//     let color =[ "red" , "yello" , "blue" , "black" , "white","green" , "grey" , "violet" ];
    
//     color.forEach(function(clr){
//       let len = clr.length;
//       if(clr == str.slice(0 , len)){
//           return str.slice(0 , len);
//       }
    
//     })
//   }

//   console.log(seeColor("red"));
  