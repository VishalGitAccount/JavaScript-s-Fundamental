// // Java script object 
// var car = {
//     model : "i20",
//     brand : "Hyundai",
//     year : 2026,
//     color : ["red", "green"],
//     engine : {
//         mileage : "20 kmpl"
//     }
// }

// // To access the object propertie's 
// console.log(car.engine)
// console.log(car["engine"])
// console.log(car.brand)

// var car = {
//     model : "i20",
//     brand : "Hyundai",
//     year : 2026,
//     color : ["red", "green"],
//     start : ()=>{
//         console.log(this) // it represnt a window object 
//     },
//     // Use of this inside an anonymous function inside an object 
//     stop : function(){
//         console.log(this) // it represnts an object object itself
//     }
// }
// car.start()
// car.stop()

// So remember that if I need to acces any properties from an object we should always need to use the 
// anonymous function instead arrow function. this is very important diffrence between anonymous and arrow 
// function. for example.

// var car = {
//     model : "i20",
//     brand : "Hyundai",
//     year : 2026,
//     color : ["red", "green"],
//     start : function(){
//         console.log(`${this.model} has started..`) 
//     },
//     stop : function(){
//         console.log(this) 
//     }
// }
// car.start()
// car.stop()

// var car = {
//     model : "i20",
//     brand : "Hyundai",
//     year : 2026,
//     color : ["red", "green"],
//     start : function(){
//         console.log(`${this.model} has started..`) 
//     },
//     stop : function(){
//         console.log(this) 
//     }
// }
// car.start()
// car.stop()

// java script proerties has a inbuilt behavious if I will change any property value then by simply 
// we can change it's value by it's key name other wise if the key doesn;t exists then will create a new
// key with the values provided to them inside this property for example 


// car.model= "Verna"
// car.start()
// car.stop()

// car.isIndian = false

// How do I creat the object 
// There are two ways through which I can create the object through constructor function and classes.

// 1) Through Constructor function -

// function Student(name, age, gender) {
//     // {}: this - it represent the current function constructor when we create a function constructor we can acces this keyword to access.
//     console.log(this)
//     this.stu_name = name
//     this.age = age
//     this.gender = gender
//     this.info = function () {
//         console.log(`Name ${this.stu_name} is ${this.age} years old ${this.gender} in gender`)
//     }
// }

// var kanika = new Student("Kanika", 22, "female")
// kanika.info()
// 2. Through Class 
// static 
// class Student {
//     name = "John";
//     age = 23;
//     gender = "Male";
//     info() {
//         console.log(`Name ${this.name} is ${this.age} years old ${this.gender} in gender`)
//     }
// }

// var john = new Student();
// john.info();

// var vishal = new Student();
// vishal.info()

// The out put from the above two will remains the same as both object's are created from the same static class 
// hence nothing will change and output should come same

// class Student{
//     takeValues(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender= gender;
//     }

//     info(){
//         console.log(`Name ${this.name} is ${this.age} years old ${this.gender} in gender`) 
//     }
// }

// var john = new Student();
// john.takeValues("John Doe", 23, "Male")
// john.info();

// var vishal = new Student();
// vishal.takeValues("Kanika", 19, "Female")
// vishal.info()

// In the semi dynamic function we should have the an another function which take the values dynamically 
// from the object {this} 

// class Student{
//     // The constructor function inside the class will be called auto when an object will be created. 
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender= gender;
//     }

//     info(){
//         console.log(`Name ${this.name} is ${this.age} years old ${this.gender}`) 
//     }
// }

// var john = new Student("John Doe", 23, "Male");
// john.info();

// var vishal = new Student("Kanika", 19, "Female");
// vishal.info()