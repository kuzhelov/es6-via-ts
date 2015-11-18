var evens = [2, 4, 6, 8];
function printArray(announce, array) {
    console.warn(announce);
    array.forEach(function (item) { return console.log(item); });
}
var odds = evens.map(function (item) { return item + 1; });
var nums = evens.map(function (item, index) { return item + index; });
var pairs = evens.map(function (item) { return ({ even: item, odd: item + 1 }); });
printArray("Even values are:", evens);
printArray("Odd values are:", odds);
printArray("Even plus its index (nums) are:", nums);
printArray("Evens paired with odds are:", pairs);
var fives = [];
nums.forEach(function (number) {
    if (number % 5 === 0) {
        fives.push(number);
    }
});
printArray("Fives from nums are:", fives);
var Person = (function () {
    function Person(name, friends) {
        this._friends = [];
        this._name = name;
        this._friends = friends;
    }
    Person.prototype.printFriends = function () {
        var _this = this;
        console.warn("Printing friends of " + this._name);
        this._friends.forEach(function (friend) {
            console.log(_this._name + " knows " + friend);
        });
    };
    return Person;
})();
var bob = new Person("Bob", ["Mickie", "John", "David"]);
bob.printFriends();
