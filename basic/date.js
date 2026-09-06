let myTimeStamp=Date.now()
// let mycreatedate=new Date("7-09-2026")
// console.log(mycreatedate.getTime())

let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(
newDate.toLocaleString('default',{
    weekday:"long",
}))