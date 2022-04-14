var my_name = 'Shibata Hiroki';
var empty_name = "";
var firstName = 'Hiroki';
var lastName = 'Shibata';
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(my_name);
console.log(fullName);
var isOpen = true;
var disabled = false;
var list = [1, 2, 3];
list.push(4);
console.log(list);
var sayHello = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(sayHello('shibata'));
var person = {
    name: 'Shibata',
    age: 28
};
console.log(person.name);
