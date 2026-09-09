//singleton
//objects literals
const mySym=Symbol("Key1")


const Jsuser={
    name:"harshit",
    [mySym]:"myKey1",
    surname:"gupta",
    address:"faridabad",
    email:"harshit@google.com"
};

// console.log(Jsuser["name"])
// console.log(Jsuser.name)
// console.log(typeof Jsuser[mySym])


Jsuser.email="harshit@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email="harshit@microsoft.com"
// console.log(Jsuser)


Jsuser.greeting=function(){
    console.log("hello js user")
}

console.log(Jsuser.greeting)
