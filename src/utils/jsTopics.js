const jsTopics = [
    {
        head: "JavaScript Tutorial",
        headContent:"JavaScript is a lightweight, interpreted programming language. It is commonly used to create dynamic and interactive elements in web applications. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.This JavaScript tutorial has been designed for beginners as well as working professionals to help them understand the basic to advanced concepts and functionalities of JavaScript. It covers most of the important concepts related to JavaScript such as operators, control flow, functions, objects, OOPs, Asynchronous JavaScript, Events, DOM manipulation and much more.",
        Topics: [
            {
                heading: "Why to Learn JavaScript?",
                link: "#",
                content: "JavaScript is a MUST for students and working professionals to become a great Software Engineer, especially when they are working in Web Development Domain. We will list down some of the key advantages of learning JavaScript−",
                ulItems: [
                    "JavaScript is a lightweight, interpreted programming language. It is commonly used to create dynamic and interactive elements in web applications. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.",
                    "This JavaScript tutorial has been designed for beginners as well as working professionals to help them understand the basic to advanced concepts and functionalities of JavaScript. It covers most of the important concepts related to JavaScript such as operators, control flow, functions, objects, OOPs, Asynchronous JavaScript, Events, DOM manipulation and much more.",
                ],
            },
        ]
    },
    {
        head: "JavaScript Variables",
        Topics: [
            {
                heading: "JavaScript Variables",
                link: "#",
                content: "Variables are containers for storing data values. In JavaScript, you can declare variables using var, let, or const.",
                ulItems: [
                    "var: Declares a variable, optionally initializing it to a value. `var` is function-scoped or globally scoped.",
                    "let: Declares a block-scoped local variable, optionally initializing it to a value.",
                    "const: Declares a block-scoped, read-only named constant. The value cannot be reassigned.",
                    "Example: `var x = 10;` - Declares a variable `x` with the value 10. `var` can be accessed globally or within a function.",
                    "Example: `let y = 20;` - Declares a variable `y` with the value 20. `let` is block-scoped, meaning it can only be accessed within the block it was declared.",
                    "Example: `const z = 30;` - Declares a constant `z` with the value 30. `const` is also block-scoped and cannot be reassigned once defined.",
                    "Example: `var name = 'Alice'; function sayHello() { console.log('Hello, ' + name); }` - `name` is a global variable, accessible inside the `sayHello` function.",
                    "Example: `let age = 25; { let age = 30; console.log(age); } console.log(age);` - This demonstrates block scope of `let`. Inside the block, `age` is 30, but outside, it's 25.",
                    "Example: `const pi = 3.14; pi = 3.1415;` - This will throw an error because `pi` is a constant and cannot be reassigned."
                ]
            },
        ]
    },
    {
        head: "JavaScript Data Types",
        Topics: [
            {
                heading: "JavaScript Data Types",
                link: "#",
                content: "JavaScript variables can hold different data types: numbers, strings, objects, and more.",
                ulItems: [
                    "Primitive data types: These include Number, String, Boolean, Undefined, Null, Symbol, and BigInt. They represent a single value.",
                    "Non-primitive data types: These include Objects, Arrays, and Functions. They can hold collections of values.",
                    "Example: `let num = 100;` (Number) - Declares a variable `num` with the number value 100.",
                    "Example: `let str = 'Hello';` (String) - Declares a variable `str` with the string value 'Hello'.",
                    "Example: `let obj = {name: 'John', age: 30};` (Object) - Declares an object `obj` with properties `name` and `age`.",
                    "Example: `let isTrue = true;` (Boolean) - Declares a boolean variable `isTrue` with the value `true`.",
                    "Example: `let value;` (Undefined) - Declares a variable `value` that is undefined.",
                    "Example: `let value = null;` (Null) - Declares a variable `value` with the null value.",
                    "Example: `let bigInt = BigInt(12345678901234567890);` (BigInt) - Declares a big integer `bigInt`.",
                    "Example: `let sym = Symbol('description');` (Symbol) - Declares a symbol `sym` with a description."
                ],
                compilerContent: 'abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni'
            },
        ]
    },
    {
        head: "JavaScript Functions",
        Topics: [
            {
                heading: "JavaScript Functions",
                link: "#",
                content: "Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.",
                ulItems: [
                    "Function Declaration: A function can be declared using the `function` keyword. Example: `function greet() { return 'Hello, World!'; }` - This declares a function `greet` that returns the string 'Hello, World!'.",
                    "Function Expression: Functions can also be defined as expressions. Example: `const greet = function() { return 'Hello, World!'; };` - This declares a function `greet` and assigns it to a constant.",
                    "Arrow Functions: A concise way to write functions using the `=>` syntax. Example: `const greet = () => 'Hello, World!';` - This declares an arrow function `greet` that returns 'Hello, World!'.",
                    "Example: `function add(a, b) { return a + b; }` - Declares a function `add` that takes two parameters `a` and `b` and returns their sum.",
                    "Example: `const multiply = function(a, b) { return a * b; };` - Declares a function expression `multiply` that takes two parameters `a` and `b` and returns their product.",
                    "Example: `const divide = (a, b) => a / b;` - Declares an arrow function `divide` that takes two parameters `a` and `b` and returns their quotient.",
                    "Example: `function sayHello(name) { return 'Hello, ' + name; }` - Declares a function `sayHello` that takes a parameter `name` and returns a greeting message.",
                    "Example: `const square = x => x * x;` - Declares an arrow function `square` that takes a parameter `x` and returns its square.",
                    "Example: `function factorial(n) { if (n === 0) { return 1; } else { return n * factorial(n - 1); } }` - Declares a recursive function `factorial` that calculates the factorial of a number."
                ]
            },
        ]
    },
    {
        head: "JavaScript Events",
        Topics: [
            {
                heading: "JavaScript Events",
                link: "#",
                content: "JavaScript can be used to handle events, like when a user clicks on an HTML element.",
                ulItems: [
                    "Event Listeners: Attach event listeners to elements using `addEventListener`. Example: `document.getElementById('myBtn').addEventListener('click', function() { alert('Button clicked!'); });` - This adds a click event listener to a button with the id 'myBtn'.",
                    "Event Handling: Handling events like `onclick`, `onmouseover`, `onmouseout`, etc. Example: `element.onclick = function() { alert('Element clicked!'); };` - This sets an `onclick` event handler for an element.",
                    "Event Propagation: Understanding event bubbling and capturing. Event bubbling means the event starts from the target element and bubbles up to the root, while event capturing is the reverse.",
                    "Example: `document.getElementById('myInput').addEventListener('input', function() { console.log('Input changed!'); });` - Adds an input event listener to an input field with the id 'myInput' that logs a message when the input value changes.",
                    "Example: `document.getElementById('myForm').addEventListener('submit', function(event) { event.preventDefault(); console.log('Form submitted!'); });` - Adds a submit event listener to a form with the id 'myForm' that prevents the default form submission behavior and logs a message instead."
                ]
            },
        ]
    },
    {
        head: "JavaScript Strings",
        Topics: [
            {
                heading: "JavaScript Strings",
                link: "#",
                content: "Strings are used for storing and manipulating text.",
                ulItems: [
                    "String Methods: JavaScript provides various methods to manipulate strings, such as `length`, `indexOf`, `slice`, `substring`, `substr`, `replace`, `toUpperCase`, `toLowerCase`, `concat`, `trim`, etc.",
                    "Template Literals: Use backticks (``) to create strings and embed expressions using `${expression}`. Example: `let name = 'John'; let greeting = `Hello, ${name}`;` - This creates a string `greeting` that embeds the value of `name`.",
                    "Example: `let str = 'Hello, World!'; console.log(str.length);` - Logs the length of the string `str`, which is 13.",
                    "Example: `let str = 'Hello, World!'; console.log(str.indexOf('World'));` - Finds the index of the substring 'World' in `str`, which is 7.",
                    "Example: `let str = 'Hello, World!'; let newStr = str.slice(7, 12);` - Slices the string `str` from index 7 to 12, resulting in 'World'.",
                    "Example: `let str = 'Hello, World!'; let upperStr = str.toUpperCase();` - Converts the string `str` to uppercase, resulting in 'HELLO, WORLD!'.",
                    "Example: `let str = '   Hello, World!   '; let trimmedStr = str.trim();` - Removes whitespace from both ends of `str`, resulting in 'Hello, World!'."
                ],
                compilerContent: 'abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni'
            },
        ]
    },
    {
        head: "JavaScript Objects",
        Topics: [
            {
                heading: "JavaScript Objects",
                link: "#",
                content: "Objects are collections of key/value pairs.",
                ulItems: [
                    "Creating Objects: You can create objects using object literals or the `new Object()` constructor. Example: `let person = {firstName: 'John', lastName: 'Doe'};` - This creates an object `person` with properties `firstName` and `lastName`.",
                    "Accessing Properties: You can access properties using dot notation or bracket notation. Example: `person.firstName;` - Accesses the `firstName` property of the `person` object.",
                    "Methods: Functions stored as object properties are called methods. Example: `let person = {firstName: 'John', lastName: 'Doe', fullName: function() { return this.firstName + ' ' + this.lastName; }};` - Adds a method `fullName` to the `person` object that returns the full name.",
                    "Example: `let person = {firstName: 'Alice', lastName: 'Smith', age: 30}; console.log(person.age);` - Accesses the `age` property of the `person` object, which is 30.",
                    "Example: `let car = {make: 'Toyota', model: 'Camry', year: 2022}; car.year = 2023;` - Updates the `year` property of the `car` object to 2023.",
                    "Example: `let person = {firstName: 'Alice', lastName: 'Smith', greet() { return 'Hello, ' + this.firstName; }};` - Defines a method `greet` on the `person` object that returns a greeting message using the `firstName` property.",
                    "Example: `let person = {name: 'John', details: {age: 30, city: 'New York'}}; console.log(person.details.city);` - Accesses a nested property `city` within the `details` object of the `person` object."
                ]
            },
        ]
    },
    {
        head: "JavaScript Arrays",
        Topics: [
            {
                heading: "JavaScript Arrays",
                link: "#",
                content: "Arrays are used to store multiple values in a single variable.",
                ulItems: [
                    "Array Methods: JavaScript provides various methods to manipulate arrays, such as `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `indexOf`, `forEach`, `map`, `filter`, `reduce`, etc.",
                    "Array Properties: Arrays have properties like `length` and `constructor`. Example: `let arr = [1, 2, 3]; arr.push(4);` - Adds the value 4 to the end of the array `arr`.",
                    "Example: `let arr = [1, 2, 3]; arr.pop();` - Removes the last element from the array `arr`, which is 3 in this case.",
                    "Example: `let arr = [1, 2, 3]; arr.shift();` - Removes the first element from the array `arr`, which is 1 in this case.",
                    "Example: `let arr = [1, 2, 3]; arr.unshift(0);` - Adds the value 0 to the beginning of the array `arr`.",
                    "Example: `let arr = [1, 2, 3]; arr.splice(1, 1, 4, 5);` - Starts at index 1, removes 1 element, and adds 4 and 5, resulting in `[1, 4, 5, 3]`.",
                    "Example: `let arr = [1, 2, 3, 4]; let newArr = arr.slice(1, 3);` - Slices the array `arr` from index 1 to 3, resulting in `[2, 3]`.",
                    "Example: `let arr = [1, 2, 3]; arr.forEach(element => console.log(element));` - Logs each element of the array `arr` to the console.",
                    "Example: `let arr = [1, 2, 3]; let doubled = arr.map(x => x * 2);` - Creates a new array `doubled` with each element of `arr` multiplied by 2, resulting in `[2, 4, 6]`.",
                    "Example: `let arr = [1, 2, 3, 4]; let filtered = arr.filter(x => x > 2);` - Creates a new array `filtered` with elements greater than 2, resulting in `[3, 4]`.",
                    "Example: `let arr = [1, 2, 3, 4]; let sum = arr.reduce((acc, curr) => acc + curr, 0);` - Computes the sum of all elements in the array `arr`, resulting in 10."
                ]
            },
        ]
    },
    {
        head: "JavaScript JSON",
        Topics: [
            {
                compilerContent: 'abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni',
                heading: "JavaScript JSON",
                link: "#",
                content: "JSON (JavaScript Object Notation) is a lightweight data-interchange format.",
                ulItems: [
                    "Parsing JSON: Use JSON.parse() to convert JSON data into JavaScript objects.",
                    "Stringifying JSON: Use JSON.stringify() to convert JavaScript objects into JSON strings.",
                    "JSON Data Types: strings, numbers, objects, arrays, booleans, null",
                    "JSON Methods: JSON.parse(), JSON.stringify(), toJSON()"
                ]
            },
        ]
    },
    {
        head: "JavaScript Dates",
        Topics: [
            {
                heading: "JavaScript Dates",
                link: "#",
                content: "JavaScript Date objects represent a single moment in time in a platform-independent format.",
                ulItems: [
                    "Creating Dates: Using new Date() constructor.",
                    "Date Methods: getDate, getDay, getFullYear, getHours, getMilliseconds, getMinutes, getMonth, getSeconds, etc.",
                    "Formatting Dates: toDateString, toTimeString, toLocaleDateString, toLocaleTimeString, etc.",
                    "Date Properties: constructor, prototype, UTC"
                ]
            },
        ]
    },
    {
        head: "JavaScript Math",
        Topics: [
            {
                heading: "JavaScript Math",
                link: "#",
                content: "The Math object allows you to perform mathematical tasks.",
                ulItems: [
                    "Math Methods: round, ceil, floor, random, min, max, abs, pow, sqrt, etc.",
                    "Math Properties: PI, E, LN2, LN10, LOG2E, LOG10E, SQRT1_2, SQRT2",
                    "Trigonometric Functions: sin, cos, tan, asin, acos, atan",
                    "Exponential Functions: exp, log, log10, log2"
                ]
            },
        ]
    },
    {
        head: "JavaScript Scope",
        Topics: [
            {
                heading: "JavaScript Scope",
                link: "#",
                content: "Scope determines the accessibility of variables.",
                ulItems: [
                    "Global Scope: Variables declared outside any function.",
                    "Local Scope: Variables declared within a function.",
                    "Block Scope: Variables declared with let or const inside a block.",
                    "Function Scope: Variables declared within a function, but not within a block."
                ]
            },
        ]
    },
    {
        head: "JavaScript Hoisting",
        Topics: [
            {
                compilerContent: 'abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni',
                heading: "JavaScript Hoisting",
                link: "#",
                content: "Hoisting is JavaScript's default behavior of moving declarations to the top.",
                ulItems: [
                    "Variable Hoisting: var declarations are hoisted to the top of their scope.",
                    "Function Hoisting: Function declarations are hoisted to the top of their scope.",
                    "Let and Const Hoisting: let and const declarations are not hoisted.",
                    "Hoisting Examples: var x = 10; console.log(x);"
                ]
            },
        ]
    },
    {
        head: "JavaScript Closures",
        Topics: [
            {
                heading: "JavaScript Closures",
                link: "#",
                content: "A closure is a function having access to the parent scope, even after the parent function has closed.",
                ulItems: [
                    "Lexical Scoping: Functions can access variables from the parent scope.",
                    "Practical Uses: Encapsulation, creating private variables.",
                    "Closure Examples: function outer() { let x = 10; function inner() { console.log(x); } }"
                ]
            },
        ]
    },
    {
        head: "JavaScript Promises",
        Topics: [
            {
                heading: "JavaScript Promises",
                link: "#",
                content: "A Promise is an object representing the eventual completion or failure of an asynchronous operation.",
                ulItems: [
                    "Creating Promises: Using new Promise() constructor.",
                    "Handling Promises: Using then, catch, finally methods.",
                    "Promise States: pending, fulfilled, rejected.",
                    "Promise Methods: then, catch, finally, all, race, resolve, reject"
                ]
            },
        ]
    },
    {
        head: "JavaScript Async/Await",
        Topics: [
            {
                heading: "JavaScript Async/Await",
                link: "#",
                content: "Async/Await makes asynchronous code look and behave like synchronous code.",
                ulItems: [
                    "Async Functions: Defined using the async keyword",
                    "Await Keyword: Pauses the execution of the async function and waits for the Promise to resolve.",
                    "Async/Await Examples: async function fetchData() { const response = await fetch('https://example.com/data'); }",
                    "Error Handling: Using try...catch blocks to handle errors in async/await code"
                ]
            },
        ]
    },
    {
        head: "JavaScript DOM Manipulation",
        Topics: [
            {
                compilerContent: 'abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni',
                heading: "JavaScript DOM Manipulation",
                link: "#",
                content: "The DOM (Document Object Model) represents the page so that programs can change the document structure, style, and content.",
                ulItems: [
                    "Selecting Elements: Using methods like getElementById, getElementsByClassName, querySelector, querySelectorAll.",
                    "Changing Content: Using innerHTML, textContent, innerText.",
                    "Changing Styles: Using the style property.",
                    "DOM Events: Listening to events like click, mouseover, keypress, etc.",
                    "DOM Methods: appendChild, removeChild, replaceChild, insertBefore, etc."
                ]
            },
        ]
    },
    {
        head: "JavaScript DOM Events",
        Topics: [
            {
                heading: "JavaScript DOM Events",
                link: "#",
                content: "Events are actions that can be detected by JavaScript, such as clicking a button or pressing a key.",
                ulItems: [
                    "Event Types: click, load, resize, scroll, focus, blur, etc.",
                    "Event Properties: target, type, timestamp, etc.",
                    "Event Methods: addEventListener, removeEventListener, preventDefault, stopPropagation.",
                    "Event Delegation: Attaching event listeners to parent elements and using event delegation to handle events on child elements."
                ]
            },
        ]
    },
    {
        head: "JavaScript Forms",
        Topics: [
            {
                heading: "JavaScript Forms",
                link: "#",
                content: "Handling form inputs using JavaScript.",
                ulItems: [
                    "Accessing Form Elements: Using the forms collection or form element properties.",
                    "Validating Forms: Using various input element properties and methods.",
                    "Submitting Forms: Using the submit method or handling form submission events.",
                    "Form Events: Listening to events like submit, change, focus, blur, etc."
                ]
            },
        ]
    },
    {
        head: "JavaScript Web APIs",
        Topics: [
            {
                compilerContent: 'abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni',
                heading: "JavaScript Web APIs",
                link: "#",
                content: "Web APIs provide functionality for tasks like making network requests or manipulating the DOM.",
                ulItems: [
                    "Fetch API: Making network requests using fetch().",
                    "Geolocation API: Accessing the user's location.",
                    "LocalStorage API: Storing data locally on the user's browser.",
                    "Web Storage API: Storing data locally on the user's browser.",
                    "Web Workers API: Running scripts in the background."
                ]
            },
        ]
    },
    {
        head: "JavaScript Error Handling",
        Topics: [
            {
                heading: "JavaScript Error Handling",
                link: "#",
                content: "Handling errors using try...catch statements.",
                ulItems: [
                    "try...catch: Handling exceptions in your code.",
                    "finally: Executing code after try and catch blocks, regardless of the outcome.",
                    "throw: Creating custom errors.",
                    "Error Types: SyntaxError, TypeError, ReferenceError, etc."
                ]
            },
        ]
    },
    {
        head: "JavaScript let and const",
        Topics: [
            {
                heading: "JavaScript let and const",
                link: "#",
                content: "New ways to declare variables introduced in ES6.",
                ulItems: [
                    "let: Block-scoped variable declaration.",
                    "const: Block-scoped, read-only variable declaration.",
                    "let and const Examples: let x = 10; const PI = 3.14;",
                    "let and const vs var: Understanding the differences between let, const, and var"
                ]
            },
        ]
    },
    {
        head: "JavaScript Arrow Functions",
        Topics: [
            {
                compilerContent: 'abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni',
                heading: "JavaScript Arrow Functions",
                link: "#",
                content: "A shorter syntax for writing function expressions.",
                ulItems: [
                    "Syntax: Using the => syntax.",
                    "No this binding: Arrow functions do not have their own this context.",
                    "Arrow Function Examples: const add = (a, b) => a + b;",
                    "Arrow Functions vs Regular Functions: Understanding the differences between arrow functions and regular functions"
                ]
            },
        ]
    },
    {
        head: "JavaScript Template Literals",
        Topics: [
            {
                heading: "JavaScript Template Literals",
                link: "#",
                content: "Template literals provide an easy way to create multiline strings and perform string interpolation.",
                ulItems: [
                    "Backticks: Enclose your string in backticks (``).",
                    "Expression Interpolation: Embed expressions using ${expression}.",
                    "Template Literal Examples: const name = 'John'; const greeting = `Hello, ${name}!`;",
                    "Tagged Template Literals: Using functions to manipulate template literals"
                ]
            },
        ]
    },
    {
        head: "JavaScript Destructuring",
        Topics: [
            {
                heading: "JavaScript Destructuring",
                link: "#",
                content: "A syntax that makes it easier to extract values from arrays or properties from objects.",
                ulItems: [
                    "Array Destructuring: Extracting values from arrays.",
                    "Object Destructuring: Extracting properties from objects.",
                    "Destructuring Examples: const [x, y] = [10, 20]; const { name, age } = { name: 'John', age: 30 };",
                    "Destructuring Defaults: Providing default values for destructured variables"
                ]
            },
        ]
    },
    {
        head: "JavaScript Modules",
        Topics: [
            {
                compilerContent: 'abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni',
                heading: "JavaScript Modules",
                link: "#",
                content: "ES6 introduced a module system that allows you to import and export code between files.",
                ulItems: [
                    "Exporting: Using export keyword to export variables, functions, or classes.",
                    "Importing: Using import keyword to import variables, functions, or classes from other files.",
                    "Module Examples: export function add(a, b) { return a + b; }; import { add } from './math.js';",
                    "Default Exports: Exporting a single default value from a module"
                ]
            },
        ]
    }
               
];





export default jsTopics;