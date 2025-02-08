// function Form( name , surname , age ){

//     this.name = name;
//     this.surname = surname;
//     this.age = age;

// }

// let form = new Form("Obidjon" , "Yolgoshov" , 22);
// // Form.prototype.


// console.log(form);

// function reverse3(nums){
  
//     let arr = [];
    
//     for(let i = nums.length  ; i >= 0 ; i-- ){
    
//       arr.push(nums[i]);
    
//     }
    
//     return arr;
// }


// console.log(reverse3([0 , 1 , 2 , 3]))


// function Book(title , author , year , genre) {
    
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.genre = genre;

// }  

// Book.prototype.getSummary = function () {

//     return `Kitob nomi ${this.title} . Bu kitob ${this.author} tomonidan ${this.year} yilda yozilgan`;

// }

// Book.prototype.isClassic = function () {

//     if( 2025 - this.year > 20){

//         return true;

//     }
//     return false;

// }

// let bookNumerOne = new Book( "Hamlet" , "Vilyam Shekspir"  , 1602  , "Badiiy kitob");
// let bookNumerTwo = new  Book( "Odamiylik Mulki" , "Toxir Malik"  , 2005  , "Badiiy kitob");
// let bookNumerThree = new  Book( "Yulduzli tunlar" , "Pirimqul Qodirov"  , 1978  , "Badiiy kitob");


// console.log(bookNumerOne.getSummary() , bookNumerOne.isClassic());
// console.log(bookNumerTwo.getSummary() , bookNumerTwo.isClassic());
// console.log(bookNumerThree.getSummary() , bookNumerThree.isClassic());


