/* 
ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.
*/

class Person {
    constructor(name:string) {
        this._name = name;
    }
    
    // getter 
    get name() {
        return this._name;
    }
    
    private _name:string;   // private fields
}

class Employee extends Person {

    // static method
    static createUnemployed(name:string) : Employee {
        return new Employee(name);
    }
    
    constructor(name:string, occupation:string="unemployed") {
    
        // base object's constructor call
        super(name);    
        this._occupation = occupation;
    }
    
    // note that if the function's return type is not specified, it will be infered automatically
    get occupation() {
        return this._occupation;
    }
    
    // setter 
    set occupation(occupation:string) {
        this._occupation = occupation;
    }
    
    printResume(): void {
        console.log(this.buildResume());
    }
    
    // private method
    private buildResume() : string {
        return this.name + " is currently working as: " + this._occupation; // property call
    }
    
    private _occupation:string;
}

////////////

console.warn("Create unemployed Bob person");

var employee = Employee.createUnemployed("Bob");
employee.printResume();

console.warn("Make employee happy with the new job");

employee.occupation = "superhero";  // property setter in action
employee.printResume();