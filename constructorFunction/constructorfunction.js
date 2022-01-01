//Constructor Function
function Car(cname, year){
    this.cname=cname
    this.year=year
    console.log(this);
    this.getCarDetails=function(){
        return `${this.cname} manufactured year is ${this.year}`
    }
}
const car1=new Car('BMW',2021)
console.log(car1.getCarDetails());
const car2=new Car('Porsche',2018)
console.log(car2.getCarDetails());
const car3=new Car('Rolls Roys',2017)
console.log(car3.getCarDetails());

