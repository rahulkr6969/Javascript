//call,apply,bind methods

function about(hobby,FavMusician){
    console.log(this.firstName,this.age,hobby,FavMusician);
}
const user1={
    firstName:"rahul",
    age:'18',
}
const user2={
    firstName:"mohit",
    age:'17',
}
//call
//about.call(user1,"Sleeping","Pawan Singh");

//apply
//about.apply(user2,["sleeping","pawan singh"]);

//bind 
const myFunc=about.bind(user1,"sleeping","pawan singh");
myFunc();