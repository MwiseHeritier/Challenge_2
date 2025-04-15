class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    
    introduce(){
        console.log(`\n\t Name: ${this.name} \n\t Age: ${this.age}`)
    }
}
 let person1 = new Person('Mugabo', 20);
 person1.introduce();

