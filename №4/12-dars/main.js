// 1- savol 1.Type conversiton nima , misollar yordamida tushuntiring?
// Type conversiton bu kelayotgan qiymatni typini boshqa bir typga ozgartirish. 
// masalan let nums = "10"; +nums; bu strringda kelgan malumotni typini numberga ozgartiradi.

//2-savol Array bilan Objectning farqlari qanday ?
// Array sintaxsizi let newArray = ["" , "" , ...] shu kabi [] qovus ichida yozilardi
//Object sintaxsizi let obj = { name:"Jone" , age: 22 , } shu kabi yoziladi
// array da key aftamaticheski index boladi object da esa keyni ozimiz elon qilamiz;
//object ichida funcksiya elon qilasa boladi bu metod db nomlanadi
//object da contstructor funksiya orqali shablon yasalsa boladi New kalit sozi orqali
//array ni ham metodalari bor ulardan biri foreach

// 3-misol Recursion nima , misollar orqali tushuntiring?
// rekursiya bu funksiyani ozini ozi chaqirishiga aytiladi . rekursivniy funksiya looplarga ohshab ishlidi

//misol:
// function myFunction(){
//     myFunction();
// }
// myFunction();

//rekursiv funksiyadan foydalanayotganimizda  return orqali chiqib ketishimiz mumkin;

//misol:
// let i = 0;
// function myFunction(){
    
//     i++
//     if(i > 5){
       
//         return console.log(i);
//     }
//     myFunction();

// }
// myFunction();


// 5 -misol Numberlardan tashkil topgan array yarataing uning juftlar, toqlarini yigindisini alohida consolega chiqaring?

    // let arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
    // let jusft = 0;
    // let toq = 0;
    // arr.forEach(function(num){

    //     if(num % 2 == 0){

    //        jusft += num; 

    //     }
    //     else{

    //         toq += num;

    //     }

    // })

    // console.log(jusft + " juft sonlar yigindisi");
    // console.log(toq + " toq sonlar yigindisi");
    
    

//6-misol Ikkata array bor ularni ichida bir xil bo’lganlarini soni nechtaligini aniqlang

// let arrOne = [ 1 , 2 , 3 , 5 ];
// let arrTwo = [ 1 , 1 , 5 , 1 ];
// let count = 0;


// for(let i = 0 ; i < arrOne.length ; i++ ){

//     for(let j = 0 ; j < arrOne.length ; j++){

//         if(arrOne[i] ==  arrTwo[j]){
            
//             count++;
            

//         }
        
//     }
    
 
// }


// console.log(count);


//7-misol  const arr1 = [7,8,9]
    // const arr1 = [6,5,4]
    // const arr1 = [3,2,1] => ushbu uchta arrayni bitta arrayga aylantirib ularni tartib boyicha arrayga joylashtiring?

    // let arr1 = [7,8,9];
    // let arr2 = [6,5,4];
    // let arr3 = [3,2,1];

    // let newArr = arr1.concat(arr2);
    // newArr = newArr.concat(arr3);
    // let len = newArr.length;

    // for(let i = 0 ; i < len ; i++){

    //     for(let j = 0 ; j < len ; j++){

    //         if(newArr[i] < newArr[j]){

    //             let min = newArr[j];
    //             newArr[j] = newArr[i];
    //             newArr[i] = min;

    //         }

    //     }

    // }
    

   
    // console.log(newArr);
    

//8-misol arr = [2, 4, 5, 6, 6, 3, 2, 1] ushbu arrayda qiymatlar takrorlanmasdan chiqaring  [2, 4, 5, 6, 3, 1];

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {

//     if (!newArr.includes(arr[i])) {

//         newArr.push(arr[i]);

//     }
// }

// console.log(newArr);




