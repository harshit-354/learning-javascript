// const tinderUser=new Object()
const tinderUser={

}

tinderUser.id="123aad"
tinderUser.name="sam"
tinderUser.isloggedin=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"harshit",
            lastname:"gupta"
        }
    }
}

const obj1={
    1:"a",
    2:"b",

}
const obj2={
    3:"c",
    4:"d",

}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isloggedin"))