function Sayhi() {
    console.log(this.name)
    // console.log(this.age)
}
let user = { 
    name: "Piter" ,
    name: "Piter" 
};
let age = { 
    name: "23",
    name: "23" 
};
Sayhi.call(user)
Sayhi.call(age)

