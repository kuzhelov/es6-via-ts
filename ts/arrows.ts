var evens:number[] = [2,4,6,8];

function printArray(announce:string, array:any[]): void {
    console.warn(announce);
    array.forEach(item => console.log(item));
}

// Expression bodies
var odds = evens.map(item => item + 1);
var nums = evens.map((item, index) => item + index);
var pairs = evens.map(item => ({even: item, odd: item + 1}));  // braces are important here!

printArray("Even values are:", evens);
printArray("Odd values are:", odds);
printArray("Even plus its index (nums) are:", nums);
printArray("Evens paired with odds are:", pairs);


// Statement bodies
var fives:number[] = [];
nums.forEach(number => {
    if (number % 5 === 0) {
        fives.push(number);
    }
});

printArray("Fives from nums are:", fives);


// Lexical this - unlike functions, arrows share the same lexical this as their surrounding code
class Person {
    constructor(name:string, friends:string[]) {
        this._name = name;
        this._friends = friends;
    }
    
    printFriends():void {
        console.warn("Printing friends of " + this._name); // here 'this' refers to the same object in the outer scope
        this._friends.forEach(friend => {
            console.log(this._name + " knows " + friend); // here 'this' refers to the same object in the outer scope
        });
    }
    
    private _name: string;
    private _friends: string[] = [];
}

var bob:Person = new Person("Bob", [ "Mickie", "John", "David" ]);
bob.printFriends();