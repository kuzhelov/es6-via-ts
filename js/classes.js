/*
ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
})();
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, occupation) {
        if (occupation === void 0) { occupation = "unemployed"; }
        _super.call(this, name);
        this._occupation = occupation;
    }
    Employee.createUnemployed = function (name) {
        return new Employee(name);
    };
    Object.defineProperty(Employee.prototype, "occupation", {
        get: function () {
            return this._occupation;
        },
        set: function (occupation) {
            this._occupation = occupation;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.printResume = function () {
        console.log(this.buildResume());
    };
    Employee.prototype.buildResume = function () {
        return this.name + " is currently working as: " + this._occupation;
    };
    return Employee;
})(Person);
console.warn("Create unemployed Bob person");
var employee = Employee.createUnemployed("Bob");
employee.printResume();
console.warn("Make employee happy with the new job");
employee.occupation = "superhero";
employee.printResume();
