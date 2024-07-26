class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(x){
        return x-this.year;
    }
}
let date=new Date();
let year=date.getFullYear();

let mycar=new car("ford",2014);
var ageofcar="Mycar is " + mycar.age(year) + " year old"
console.log(ageofcar);
