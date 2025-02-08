// for(let i = 1 ; i <= 10 ; i++){

//     document.write("<h1>" + i + "</h1>");

// }

// let total = 0;
// for(let i = 1 ; i <= 10 ; i++){

//    total +=i;

// }

// document.write("<h1>" + total + "</h1>");


// let input = +prompt("son kiriting");
// let total = 0;
// for(let i = 1 ; i <= input ; i++){

//    total +=i;

// }

// document.write("<h1>" + total + "</h1>");

// let input = +prompt("son kiriting");
// let output = 0;

// let i = 1;

// while(i<=input){
//    output +=i;
//    i++;
// }

// document.write("<h1>" + output + "</h1>");

// let week = +prompt("1-7gacha");

// switch(week){
//    case 1:
//       console.log("dush");
//       break; 
//    case 2:
//       console.log("sesh");
//       break;  
//    case 3:
//       console.log("chosh");
//       break; 
//    case 4:
//       console.log("pash");
//       break; 
//    case 5:
//       console.log("jum");
//       break; 
//    case 6:
//       console.log("sham");
//       break; 

//    case 7:
//       console.log("yak");
//       break;    
//    default:
//       console.log("0 dan 7 gacha")      
// }


// let input = prompt("+ -  * /");
// let inputNum = +prompt("number one");
// let inputNum2 = +prompt("number two");
// let plus = inputNum + inputNum2;
// let minus = inputNum - inputNum2;
// let kop = inputNum * inputNum2;
// let bol = inputNum / inputNum2;

// switch(input){
//    case "+":
//       document.write(`${inputNum} + ${inputNum2} = ${plus}`);
//       break; 
//    case "-":
//       document.write(`${inputNum} - ${inputNum2} = ${minus}`);

//       break;  
//    case "*":
//       document.write(`${inputNum} * ${inputNum2} = ${kop}`);

//       break; 
//    case "/":
//       document.write(`${inputNum} / ${inputNum2} = ${bol}`);

//       break; 
      
// }




   let bir = document.getElementById("bir");
   let ikki = document.getElementById("ikki");
   let uch = document.getElementById("uch");
   let tor = document.getElementById("tor");
   let besh = document.getElementById("besh");
   let olti = document.getElementById("olti");
   let yeti = document.getElementById("yeti");
   let sakkiz = document.getElementById("sakkiz");
   let toqiz = document.getElementById("toqiz");
   let nol = document.getElementById("nol");

   let pilus = document.getElementById("pilus");
   let minus = document.getElementById("minus");
   let kop = document.getElementById("kop");
   let bol = document.getElementById("bol");

   let rezalt = document.getElementById("rezalt");
   let btn = document.getElementById("btn");
   let input = document.getElementById("in_id");
   let clearLast = document.getElementById("clearLast");
   let clear = document.getElementById("clear");

   let num1 = 0;
   let num2 = 0;
   let total = 0;
   let oper ;
   
function setIntput(val){
   setValueInput(val) 
}
function operator(val){
   oper = val;
   if(num1 == 0){
      num1 = +input.value;
      rezalt.innerHTML = `${num1} ${oper}`;

   }
   input.value = 0;
}
 
clearLast.addEventListener("click",function(){
   let edit = input.value;
   if(edit.length > 0){
      input.value = edit.slice(0 , edit.length-1);
      rezalt.innerHTML = `${input.value}`;
   }
})
 btn.addEventListener("click", function() {
   num2 = +input.value;

   switch(oper){
      case "+":
         total = +num1 + +num2;
         break;
      case "-": 
         total = +num1 - +num2;
         break;
      case "*": 
         total = +num1 * +num2;
         break;
      case "/": 
         total = +num1 / +num2;
         break;
   }

   input.value = total;
   rezalt.innerHTML = `${num1} ${oper} ${num2} = ${total}`;
 });

   function setValueInput(val){
      input.value = +(input.value + val);
      rezalt.innerHTML = `${input.value}`;
      if(num1 > 0){
         rezalt.innerHTML = `${num1} ${oper} ${input.value}`;

      }
   } 

   
   
   clear.addEventListener("click",function(){
      num1 = 0;
      num2 = 0;
      total = 0 ;
      oper = "";
      input.value = "";
      rezalt.innerHTML = "";
   })
