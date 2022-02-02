
//if(true)
//{
//    let name ="vinay";
//    alert(name);
//}   


//let fname = "vinay";
//let lname = "Prakash";
//let age = prompt("enter your age ");

//let result = `${fname} ${lname} age is ${age}`;
//alert(result);

//Default parameters

//function welcome(user='vinay',message='you der')
//{
  //  alert(`hello ${user} ${message}`)
//}
//welcome();

// Arrow functions

// function greeting(message)
// {
//    alert(`Hello ${message}`);
// }

// greeting('Everyone');

// Below function is for single argument
//let greeting = (message) => alert(`Hello ${message}`);

//greeting('Everyone');

//below function for multiple arguments

//let greeting = (message,wish) => alert(`Hello ${message} ${wish}`);

//greeting('Everyone', 'good morning');

// let createBlog = (title, body) => {
//     if(!title)
//     { return alert("hi");}


//     if(!body)
//     { return alert(`Body is required`);}

//     return alert(`${title} ${body}`);
// };

// createBlog('HELLO','BODY');

// intro to this

// let banglore = {
//     //property
//     cities : ['basavangudi','Nr colony','TR nagar'],
// //method
//     printcities : function()   {
//         setTimeout(() => console.log(this.cities),3000);
//     }

// }
// banglore.printcities(); 
// /newline

// Destructuring in ES6
// let routine = {
//   morning : "wakeUp",
//   Noon : "Eat",
//   Evening : "Snacks",
//   Night : ['dinner', 'Sleep']
// }

// let {morning, Evening} = routine;

// alert(`${ morning}, for  ${ Evening}`);



//destructuring with function arguments and arrow functions

// let uniStudent = ({name , job}) => {
//   console.log(`${name} is a ${job}`);
// }

// uniStudent({
//   name : "vinay",
//   job : "Engineer"
// }
// );

// destructing with an array
let cars = ['Xuv','Harrier','fortuner'];
[mahindra,tata,toyota]=cars;
alert(tata + '  '+ toyota);
console.log(mahindra,toyota);

