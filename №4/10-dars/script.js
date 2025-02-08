// class Im {
//     constructor( name , surname , age , gender , birthday){
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.gender = gender;
//         this.birthday = birthday;

//     }

//     getFullinfo(){
//         return `My fullname is ${this.surname} ${this.name}. I'm ${this.age} year old. I'm ${this.gender} . I vosborn ${this.birthday}`
//     }
// }

// let im = new Im("Obidjon " , "Yolg'oshov" , 22 , "male" , "2002-03-27");

// console.log(im.getFullinfo());




//=============================================================Uyga vazifa============================================

// ====================================================1-misol=========================================================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     helloName(input1.value );
   
    
// }
// function helloName(name){
//     optput.innerHTML = "Hello " + name + "!";
// }


//========================================================= 2-misol ================================================





// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     makeAbba(input1.value , input2.value);
   
// }
// function makeAbba(a, b){

//     optput.innerHTML = a+b+b+a;

// }




// ================================================= 3 -misol========================================================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     makeTags(input1.value , input2.value);
   
    
// }

// function makeTags(tag, word) {
//     optput.innerHTML = `<${tag}>${word}</${tag}>`
// }



//====================================================================4-misol=============================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     makeOutWord(input1.value , input2.value);
   
// }

// function makeOutWord(out, word){
//     let ferst = out.slice(0 , 2);
//     let end = out.slice(2);
    
//     optput.innerHTML = ferst+word+end;
// }



// ============================================================5-misol=============================================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     extraEnd(input1.value );
   
// }


// function extraEnd(str){
//     let last = str.slice(-2)
//     optput.innerHTML = last.repeat(3)
    
// }



//  =======================================================6-misol==========================================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     firstTwo(input1.value );
   
// }


// function firstTwo(str){
//     let ferst = str.slice(0 , 2);
//     optput.innerHTML =  ferst
// } 

// ======================================================= 7-misol =============================================================
// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     firstHalf(input1.value );
   
// }


// function firstHalf(str){
//     let len = str.length;
//     optput.innerHTML = str.slice(0 , str.length/2)
// }


// =======================================================8-misol=================================================================
// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     withoutEnd(input1.value );
   
// }


// function withoutEnd(str){
//     optput.innerHTML = str.slice(1 , -1);
// }


// =======================================================9-misol================================================================
// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     comboString(input1.value , input2.value );
   
// }


// function comboString(a, b){
//     let lenA = a.length;
//     let lenB = b.length;
      
//     if(lenA > lenB){
//         optput.innerHTML = b + a + b;
//     }
//     optput.innerHTML = a + b + a;
// }

//==========================================================10-misol=============================================================
// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     nonStart(input1.value , input2.value );
   
// }


// function nonStart(a, b){
//     optput.innerHTML = a.slice(1) + b.slice(1);
// }

//==================================================================11-misol=====================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     left2(input1.value );
   
// }


// function left2(str){
  
//     optput.innerHTML = str.slice(2) + str.slice(0 , 2);
// }


//=================================================================12-misol=====================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     right2(input1.value );
   
// }


// function right2(str){

//     optput.innerHTML = str.slice(-2) + str.slice(0 , -2);

// }



//=================================================================13-misol=====================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     theEnd(input1.value , input2.value);
   
// }


// function theEnd(str, front){
//     if(str.length < 2){
//         optput.innerHTML = str;
//     }
//     if(front){
//         optput.innerHTML = str[0];
//     }
//     optput.innerHTML = str.slice(-1)
// }



//=================================================================14-misol=====================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     withoutEnd2(input1.value );
   
// }


// function withoutEnd2(str){
//     optput.innerHTML = str.slice(1 , -1);
// }


//=================================================================15-misol=====================================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     middleTwo(input1.value );
   
// }

// function middleTwo(str){
//     let len = str.length;
//     let indexMid = len/2;
//      if( len % 2 == 0 ){
//         optput.innerHTML = str[indexMid-1] + str[indexMid];
//      }
    
//      optput.innerHTML = str;
  
    
// }

// ============================================16-misol =========================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     endsLy(input1.value );
   
// }

// function endsLy(str){
//     if(str.slice(-2) == "ly"){

//         optput.innerHTML = "true";

//     }else{

//         optput.innerHTML = "false";

//     }
    
// }


// ============================================17-misol =========================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     nTwice(input1.value , input2.value);
   
// }

// function nTwice(str, n){
//     if(n == 0){
//         optput.innerHTML = "";
//     }
//     optput.innerHTML = str.slice(0 , n) + str.slice(-n);
// }


// ============================================18-misol =========================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     twoChar(input1.value , input2.value);
   
// }

// function twoChar(str, index){
//     let cat = str.slice(index , index+2);
//      if(index < 0 || index+2 > str.length){
//         optput.innerHTML = str.slice(0 , 2);
//      }
//      optput.innerHTML = cat
// }


// ============================================19-misol =========================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     middleThree(input1.value);
   
// }

// function middleThree(str){
//     let len = str.length;
//     let mid = Math.floor(len/2);
//     optput.innerHTML =  str[mid-1] + str[mid] +str[mid+1] ;
// }


// ============================================20-misol =========================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     hasBad(input1.value);
   
// }

// function hasBad(str){
//     if( str.slice(0 , 3) == "bad" ||
//        str.slice(1 , 4) == "bad"){
    
//         optput.innerHTML = true
      
//     }
//     optput.innerHTML = false
// }

// ============================================21-misol =========================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     atFirst(input1.value);
   
// }

// function atFirst(str){
//     let first = str.slice(0 , 2);
//     let char = first;
    
//     while(char.length < 2){
//        char += "@";
//     }
     
//     optput.innerHTML = char;
// }


// ============================================22-misol =========================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     lastChars(input1.value , input2.value);
   
// }

// function lastChars(a, b){
//     if(a.length == 0){
     
//       a = "@";
      
//     }
//     if(b.length == 0){
    
//       b = "@";
    
//     }
//     optput.innerHTML = a[0]+b.slice(-1);

//   }


// //================================================23-misol==================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     conCat(input1.value , input2.value);
   
// }


// function conCat(a, b){
//     if(a.slice(-1) == b[0]){
//         optput.innerHTML = a.slice(0 , -1) + b;
//     }
//     optput.innerHTML = a+b
// }



//================================================24-misol==================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     lastTwo(input1.value );
   
// }


// function lastTwo(str){

//     optput.innerHTML = str.slice(0 , -2 ) + str.slice(-1) + str.slice(-2 , -1);

// }

//==============================================25-misol==================================================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     seeColor(input1.value );
   
// }

// function seeColor(str){
//     let color =["red" , "yello" , "blue" , "black" , "white" , "green" , "grey" , "violet"];
    
//     for(let i = 0 ; i < color.length ; i++){
//       let len = color[i].length;
//       if(color[i] == str.slice(0 , len)){
//         optput.innerHTML = str.slice(0 , len)
//       }
      
//     };
//     optput.innerHTML = ""
    
// }


//=====================================================26-misol====================================================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     frontAgain(input1.value );
   
// }

// function frontAgain(str){

//     if(str.length < 2){

//         optput.innerHTML = false

//     }
//     if(str.slice(0 , 2) == str.slice(-2)){
    
//         optput.innerHTML = true;
    
//     }

//         optput.innerHTML = false;

// }

//=====================================================27-misol====================================================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     minCat(input1.value , input2.value);
   
// }

// function minCat(a, b){
//     let lenA = a.length;
//     let lenB = b.length;
    
//     if(lenA == 0){
//         optput.innerHTML = "";
//     }
//     if(lenB == 0){
//         optput.innerHTML = "";
//     }
//     if(lenA > lenB){
      
//         optput.innerHTML = a.slice(-lenB) + b;
      
//     }
//     if(lenA < lenB){
    
//         optput.innerHTML = a + b.slice(-lenA);
    
//     }
    
// }

//================================================28-misol=====================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     extraFront(input1.value );
   
// }

// function extraFront(str){
//     let ferst = str.slice(0 , 2);
//     optput.innerHTML = ferst.repeat(3)
// }


//================================================29-misol=====================================================

// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     without2(input1.value );
   
// }

// function without2(str){
  
//     if(str.length < 2){

//         optput.innerHTML = str;

//     }
//     if(str.slice(0 , 2) == str.slice(-2)){

//         optput.innerHTML = str.slice(2);

//     }

//     optput.innerHTML = str;

// }

//================================================30-misol=====================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     deFront(input1.value );
   
// }

// function deFront(str){
//     let char ="";
//     if(str[0] == "a"){
    
//       char += "a" ;
    
//     }
//     if(str[1] == "b"){
    
//       char += "b" ;
    
//     }
    
//     optput.innerHTML = char + str.slice(2)
    
// }


// ================================================31-misol=====================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     startWord(input1.value );
   
// }

// function startWord(str, word) {
//     let len = word.length;

    
//     if (len > str.length) {
      
//         optput.innerHTML = '';
      
//     }

    
//     if (str.slice(1, len) == word.slice(1)) {
        
//         optput.innerHTML = str.slice(0, len);
      
//     }

//     optput.innerHTML = '';  
  
// }


//================================================31-misol=====================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     withoutX(input1.value );
   
// }


// function withoutX(str){
//     let char = str;
//     if(str[0] == "x" ){
    
//       char = char.slice(1);
    
//     }
//     if(str.slice(-1) == "x" ){
    
//       char = char.slice(0 , -1);
    
//     }
    
//     optput.innerHTML = char
      
// }


//================================================32-misol=====================================================


// let optput = document.getElementById("optput");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let btn = document.getElementById("btn");

// btn.onclick = function(){

//     withoutX2(input1.value );
   
// }

// function withoutX2(str){
//     let char = str;
    
//     if(str[0] == "x"){

//       char = char.replace("x" , "");

//     }
//     if(str[1] == "x"){

//       char = char.replace("x" , "");

//     }
   
//     optput.innerHTML = char;

// }