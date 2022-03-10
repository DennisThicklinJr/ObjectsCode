//Global Execution Context and Hoisting

// sayHello();
// waddup();

//hoisting = functions being saved to memory
// function sayHello(){
//     console.log('hello');
// }

// console.log(inbox); 

// var inbox = 10;  

// console.log(inbox);

// console.log(inbox);
// let inbox = 10;

// // const waddup = function(){
// //     console.log('waddup');
// // }

// //Callstack
// //GEC (creation phase)
//     // creation phase (this keyword and global object)
//     //scope chain and hoisting

// function sayHi() {
//     console.log(`hello there ${name}`);
//     changeName();
//     console.log('sayHi is finished')
// }

// function changeName() {
//     name = 'Bobby';
//     console.log(`we changed it to ${name}`);
//     console.log(`changeName is finished`);
// }

// let name = 'dennis';

// sayHi();

// console.log(`we are done with the code!`); 

//scope review
// const name2 = 'dennis'; //global scope

// function sayHello(){
//     const name2 = 'bobo';
// }

// console.log(name2); 

// sayHello();

//THIS KEYWORD 

//special keyword, it refers to an object

// console.log(this); //refers to Window object

//the this keyword can change which object it refers to
// const user = {
//     name: 'dennis',
//     sayHello(){
//         console.log(this);
//     }
// }

// user.sayHello(); //everytime a function is invoked, the this keyword changes

//------

// const user = {
//     name: 'dennis',
// }

// const admin = {
//     name: 'admin',
// }

// function sayHello(){
//     console.log(this);
// }

// user.hi = sayHello;
// admin.hi = sayHello;

// user.hi();
// admin.hi();

// const user = {
//     name: 'dennis',
// }

// const admin = {
//     name: 'admin',
// }

// function yell(){
//     console.log(this.name.toUpperCase());
// }

// user.yell = yell;
// admin.yell = yell;

// user.yell();
// admin.yell();

//we can use the this keyword in the DOM 
// const lists = document.querySelectorAll('li');

// lists.forEach(li => {
//     li.addEventListener('click', function(){
//         console.log(this);
//     });
// });

// const user = {
//     name: 'dennis',
//     videos: ['html', 'css', 'js', 'react'],
//     greet(){
//         console.log(`Hello there ${this.name}`);
//         const getVideos = function(){
//             console.log(`You currently have ${this.videos.length} videos.`);
//             // console.log(this); 
//         }
//         getVideos();
//     }
// }

// user.greet();

// const user = {
//     name: 'dennis',
//     videos: ['html', 'css', 'js', 'react'],
//     greet(){
//         console.log(`Hello there ${this.name}`);
//         const getVideos = () => {
//             console.log(`You currently have ${this.videos.length} videos.`);
//             console.log(this); 
//         }
//         getVideos();
//     }
// }

// user.greet();

//BIND, CALL, APPLY

// const person = {
//     firstName: 'Dennis',
//     lastName: 'Bob',
//     getName(){
//         console.log(this.firstName + this.lastName);
//     }
// }

// // person.getName();

// function registerUser(){
//     this.getName();
//     console.log(this);
// }

// const register = registerUser.bind(person);

// // console.log(register); 

// register();

// const person = {
//     firstName: 'Dennis',
//     lastName: 'Bob',
//     getName(){
//         console.log(this.firstName + this.lastName);
//     }
// }

// function registerUser(country, language){
//     this.getName();
//     console.log(`My country is ${country} and my language is ${lang}`);
// }

// // const register = registerUser.bind(person);
// // register('Hungary', 'english');

// registerUser.call(person, 'hungary', 'english');

// registerUser.apply(person, ['hungary', 'english']);

// Create an object for a Youtuber!

// The object should contain channelName (string), channelTopic (string), and subCount (number) as properties. The values can be anything you want. 

// Create a function outside of the object that adds 100 subs to the current subCount.

// Bind this function to the object and log out the result
