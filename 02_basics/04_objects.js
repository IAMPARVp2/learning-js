 //const tinderUser = new Onbject()//declaring empty object

 const tinderUser ={}//declaring empty object

 tinderUser.id ="123abc"
 tinderUser.name =" parv"
 tinderUser.isloggedin = false

// console.log(tinderUser);

const regularUser ={
    email: "jainvwdieqwi@gffd",
    full_name :{
        userFullName:{
            first_name:"Parv",
            last_name : "jain"
        }
    }
}

console.log(regularUser.full_name.userFullName.first_name)


const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}
// // const obj4 = Object.assign( obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

//{}this bracket act as a target and others are source
//if we will not assign empty obj then indirectrly  first obj will act as target and others as source
console.log(obj1);

console.log(obj2);

// console.log(obj3)
// console.log(obj4);ss

// but we wiill not use any of the above to assign we will use spread operator

const obj3 = {...obj1,...obj2}

console.log(obj3);

const users =[//objectas in an array

    {
        id: 1,
        email:"jainv1291@asdhas"
    },
    {
        id: 1,
        email:"jain291@asdhas"
    },
    {
        id: 1,
        email:"jaasdhas"
    },
]

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedIn'));

//study about objects using console

const course ={
    coursename: "js in hindi",
    price : "999",
    courseInstructor : "hitesh"


}

//another way
course.courseInstructor

// const{courseInstructor} = course;
const{courseInstructor: inst} = course;//making it as inst like alias

// the above is known as destructuring of object

console.log(inst);
 

//json


//in form of object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//json in form of array
[
    {},
    {},
    {}
]
