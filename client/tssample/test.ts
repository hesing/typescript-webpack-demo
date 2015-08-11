class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    introduce(){
        return "Hello, I'm " + this.name;
    }
}

var p = new Person("Hemant");
console.log(p.introduce());