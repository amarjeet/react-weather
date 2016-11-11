const names = ['A', 'B', 'C'];
names.forEach((item) => {
    console.log(item);
});

names.forEach((name) => console.log(name));

const namesChanged = (name) => `${name}!`;

names.forEach((names) => {
    console.log(namesChanged(names));
});

var person = {
    name: 'Amarjeet',
    greet: function () {
        names.forEach(function (name) {
            console.log(`${this.name} says hi to ${name}`);
        });
    }
};

person.greet();

var person2 = {
    name: 'Amarjeet',
    greet: function () {
        names.forEach((name) => {
            console.log(`${this.name} says hi to ${name}`);
        });
    }
};

person2.greet();

const addStatement = (a, b) => {
    return a + b;
};

const addExpression = (a, b) => a + b;

console.log(addStatement(1, 2));
console.log(addExpression(1, 3));


