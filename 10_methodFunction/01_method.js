//Methods
//function inside object
function personInfo(){ 
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
    }
const person1={
    firstName:"rahul",
    age:'18',
    about:personInfo
}
const person2={
    firstName:"mohit",
    age:'19',
    about:personInfo
}
const person3={
    firstName:"sumit",
    age:'17',
    about:personInfo
}
person1.about();
person2.about();
person3.about();