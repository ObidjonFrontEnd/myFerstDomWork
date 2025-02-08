// function calculator( a , b ) {
//     return a+b;
// }

// calculator(10 , 20);
// calculator(30 , 40);
// calculator(15 , 80);


// function recursive(n) {

//     for( let i = 1 ; i <= n ; i++ ){

//         console.log (i);

//     }

// }
// recursive(10);

// let str = prompt("text kiriting") + "</br>";
// let num = +prompt("son kiriting");

// function takrorlash(str , num) {

//     for( let i = 0 ; i < num ; i++ ){

//         document.write(str);

//     }
    
// }
// takrorlash( str , num );




// function FizzBuzz(n){
    
//     for( let i = 1 ; i <= n ; i++){


//         if( i % 3 == 0 &&  i % 5 == 0){
//             document.write(i+ " " + "FizzBuzz <br>");
//         }
//         else if( i % 3 == 0 ){

//             document.write( i + " " + "Fizz </br>");

//         }else if( i % 5 == 0){

//             document.write( i + " " +"Buzz </br>");

//         }

//     }

// }

// FizzBuzz(100);



// function faktiriolar(x){

//     let total = 1 ;
//     for( let i = 1 ;  i <= x ; i++){

//         total *=i;

//     }
//     return total;

// }

// document.write(faktiriolar(5));



// function stringSplosion(str){
//     let len = str.length;
//     let char ="";
    
//     for( let i = 0 ; i < len ; i++){
    
//       char += str.slice(0 , i+1);
    
//     }
    
//       return char;
//   }

// document.write(stringSplosion("hello")) ;


// function array123(nums){
//    let len = nums.length;
//    let bool = false;

//     for( let i = 0 ; i < len ; i++ ){

//        if( nums[i] == 1 ){

//             if( nums[i+1] != undefined && nums[i+1] == 2){

//                 if( nums[i+2] != undefined && nums[i+2] == 3){

//                     bool = true;

//                 }

//             }

//        }

//     }

//    return bool ; 
// }

