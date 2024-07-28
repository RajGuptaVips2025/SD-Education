const jsTopics = [
    {
        head: "JavaScript Tutorial",
        headContent: "JavaScript is a lightweight, interpreted programming language. It is commonly used to create dynamic and interactive elements in web applications. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.This JavaScript tutorial has been designed for beginners as well as working professionals to help them understand the basic to advanced concepts and functionalities of JavaScript. It covers most of the important concepts related to JavaScript such as operators, control flow, functions, objects, OOPs, Asynchronous JavaScript, Events, DOM manipulation and much more.",
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
                    "const: Declares a block-scoped, read-only named constant. The value cannot be reassigned."
                ],
                Example: [
                    "`var x = 10;` - Declares a variable `x` with the value 10. `var` can be accessed globally or within a function",
                    "`let y = 20;` - Declares a variable `y` with the value 20. `let` is block-scoped, meaning it can only be accessed within the block it was declared",
                    "`const z = 30;` - Declares a constant `z` with the value 30. `const` is also block-scoped and cannot be reassigned once defined",
                    "`var name = 'Alice'; function sayHello() { console.log('Hello, ' + name); }` - `name` is a global variable, accessible inside the `sayHello` function",
                    "`let age = 25; { let age = 30; console.log(age); } console.log(age);` - This demonstrates block scope of `let`. Inside the block, `age` is 30, but outside, it's 25",
                    "`const pi = 3.14; pi = 3.1415;` - This will throw an error because `pi` is a constant and cannot be reassigned."
                ]
            }
        ]
    },
    {
        head: "JavaScript Data Types",
        Topics: [
            {
                heading: "JavaScript Data Types",
                link: "#",
                content: "JavaScript variables can hold different data types: numbers, strings, objects, and more.",
                "compilerContent": "abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni",
                ulItems: [
                    "Primitive data types: These include Number, String, Boolean, Undefined, Null, Symbol, and BigInt. They represent a single value.",
                    "Non-primitive data types: These include Objects, Arrays, and Functions. They can hold collections of values."
                ],
                Example: [
                    "`let num = 100;` (Number) - Declares a variable `num` with the number value 100.",
                    "`let str = \"Hello\";` (String) - Declares a variable `str` with the string value \"Hello\".",
                    "`let obj = {name: \"John\", age: 30};` (Object) - Declares an object `obj` with properties `name` and `age`.",
                    "`let isTrue = true;` (Boolean) - Declares a boolean variable `isTrue` with the value `true`.",
                    "`let value;` (Undefined) - Declares a variable `value` that is undefined.",
                    "`let value = null;` (Null) - Declares a variable `value` with the null value.",
                    "`let bigInt = BigInt(12345678901234567890);` (BigInt) - Declares a big integer `bigInt`.",
                    "`let sym = Symbol(\"description\");` (Symbol) - Declares a symbol `sym` with a description."
                ]
            }
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
                    "const: Declares a block-scoped, read-only named constant. The value cannot be reassigned."
                ],
                Example: [
                    "`var x = 10;` - Declares a variable `x` with the value 10. `var` can be accessed globally or within a function.",
                    "`let y = 20;` - Declares a variable `y` with the value 20. `let` is block-scoped, meaning it can only be accessed within the block it was declared.",
                    "`const z = 30;` - Declares a constant `z` with the value 30. `const` is also block-scoped and cannot be reassigned once defined.",
                    "`var name = 'Alice'; function sayHello() { console.log('Hello, ' + name); }` - `name` is a global variable, accessible inside the `sayHello` function.",
                    "`let age = 25; { let age = 30; console.log(age); } console.log(age);` - This demonstrates block scope of `let`. Inside the block, `age` is 30, but outside, it's 25.",
                    "`const pi = 3.14; pi = 3.1415;` - This will throw an error because `pi` is a constant and cannot be reassigned."
                ]
            }
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
                    "Non-primitive data types: These include Objects, Arrays, and Functions. They can hold collections of values."
                ],
                Example: [
                    "`let num = 100;` (Number) - Declares a variable `num` with the number value 100.",
                    "`let str = 'Hello';` (String) - Declares a variable `str` with the string value 'Hello'.",
                    "`let obj = {name: 'John', age: 30};` (Object) - Declares an object `obj` with properties `name` and `age`.",
                    "`let isTrue = true;` (Boolean) - Declares a boolean variable `isTrue` with the value `true`.",
                    "`let value;` (Undefined) - Declares a variable `value` that is undefined.",
                    "`let value = null;` (Null) - Declares a variable `value` with the null value.",
                    "`let bigInt = BigInt(12345678901234567890);` (BigInt) - Declares a big integer `bigInt`.",
                    "`let sym = Symbol('description');` (Symbol) - Declares a symbol `sym` with a description."
                ]
            }
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
                    "Arrow Functions: A concise way to write functions using the `=>` syntax. Example: `const greet = () => 'Hello, World!';` - This declares an arrow function `greet` that returns 'Hello, World!'."
                ],
                Example: [
                    "`function add(a, b) { return a + b; }` - Declares a function `add` that takes two parameters `a` and `b` and returns their sum.",
                    "`const multiply = function(a, b) { return a * b; };` - Declares a function expression `multiply` that takes two parameters `a` and `b` and returns their product.",
                    "`const divide = (a, b) => a / b;` - Declares an arrow function `divide` that takes two parameters `a` and `b` and returns their quotient.",
                    "`function sayHello(name) { return 'Hello, ' + name; }` - Declares a function `sayHello` that takes a parameter `name` and returns a greeting message.",
                    "`const square = x => x * x;` - Declares an arrow function `square` that takes a parameter `x` and returns its square.",
                    "`function factorial(n) { if (n === 0) { return 1; } else { return n * factorial(n - 1); } }` - Declares a recursive function `factorial` that calculates the factorial of a number."
                ]
            }
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
                    "Event Propagation: Understanding event bubbling and capturing. Event bubbling means the event starts from the target element and bubbles up to the root, while event capturing is the reverse."
                ],
                Example: [
                    "`document.getElementById('myInput').addEventListener('input', function() { console.log('Input changed!'); });` - Adds an input event listener to an input field with the id 'myInput' that logs a message when the input value changes.",
                    "`document.getElementById('myForm').addEventListener('submit', function(event) { event.preventDefault(); console.log('Form submitted!'); });` - Adds a submit event listener to a form with the id 'myForm' that prevents the default form submission behavior and logs a message instead."
                ]
            }
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
                    "Template Literals: Use backticks (`) to create strings and embed expressions using `${expression}`. Example: `let name = 'John'; let greeting = `Hello, ${name}`;` - This creates a string `greeting` that embeds the value of `name`."
                ],
                Example: [
                    "`let str = 'Hello, World!'; console.log(str.length);` - Logs the length of the string `str`, which is 13.",
                    "`let str = 'Hello, World!'; console.log(str.indexOf('World'));` - Finds the index of the substring 'World' in `str`, which is 7.",
                    "`let str = 'Hello, World!'; let newStr = str.slice(7, 12);` - Slices the string `str` from index 7 to 12, resulting in 'World'.",
                    "`let str = 'Hello, World!'; let upperStr = str.toUpperCase();` - Converts the string `str` to uppercase, resulting in 'HELLO, WORLD!'.",
                    "`let str = '   Hello, World!   '; let trimmedStr = str.trim();` - Removes whitespace from both ends of `str`, resulting in 'Hello, World!'."
                ]
            }
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
                    "Methods: Functions stored as object properties are called methods. Example: `let person = {firstName: 'John', lastName: 'Doe', fullName: function() { return this.firstName + ' ' + this.lastName; }};` - Adds a method `fullName` to the `person` object that returns the full name."
                ],
                Example: [
                    "`let person = {firstName: 'Alice', lastName: 'Smith', age: 30}; console.log(person.age);` - Accesses the `age` property of the `person` object, which is 30.",
                    "`let car = {make: 'Toyota', model: 'Camry', year: 2022}; car.year = 2023;` - Updates the `year` property of the `car` object to 2023.",
                    "`let person = {firstName: 'Alice', lastName: 'Smith', greet() { return 'Hello, ' + this.firstName; }};` - Defines a method `greet` on the `person` object that returns a greeting message using the `firstName` property.",
                    "`let person = {name: 'John', details: {age: 30, city: 'New York'}}; console.log(person.details.city);` - Accesses a nested property `city` within the `details` object of the `person` object."
                ]
            }
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
                    "Array Properties: Arrays have properties like `length` and `constructor`. Example: `let arr = [1, 2, 3]; arr.push(4);` - Adds the value 4 to the end of the array `arr`."
                ],
                Example: [
                    "`let arr = [1, 2, 3]; arr.pop();` - Removes the last element from the array `arr`, which is 3 in this case.",
                    "`let arr = [1, 2, 3]; arr.shift();` - Removes the first element from the array `arr`, which is 1 in this case.",
                    "`let arr = [1, 2, 3]; arr.unshift(0);` - Adds the value 0 to the beginning of the array `arr`.",
                    "`let arr = [1, 2, 3]; arr.splice(1, 1, 4, 5);` - Starts at index 1, removes 1 element, and adds 4 and 5, resulting in `[1, 4, 5, 3]`.",
                    "`let arr = [1, 2, 3, 4]; let newArr = arr.slice(1, 3);` - Slices the array `arr` from index 1 to 3, resulting in `[2, 3]`.",
                    "`let arr = [1, 2, 3]; arr.forEach(element => console.log(element));` - Logs each element of the array `arr` to the console.",
                    "`let arr = [1, 2, 3]; let doubled = arr.map(x => x * 2);` - Creates a new array `doubled` with each element of `arr` multiplied by 2, resulting in `[2, 4, 6]`.",
                    "`let arr = [1, 2, 3, 4]; let filtered = arr.filter(x => x > 2);` - Creates a new array `filtered` with elements greater than 2, resulting in `[3, 4]`.",
                    "`let arr = [1, 2, 3, 4]; let sum = arr.reduce((acc, curr) => acc + curr, 0);` - Computes the sum of all elements in the array `arr`, resulting in 10."
                ]
            }
        ]
    },


    {
        head: "JavaScript JSON",
        Topics: [
            {
                compilerContent: "abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni",
                heading: "JavaScript JSON",
                link: "#",
                content: "JSON (JavaScript Object Notation) is a lightweight data-interchange format.",
                ulItems: [
                    "Parsing JSON: Use JSON.parse() to convert JSON data into JavaScript objects.",
                    "Stringifying JSON: Use JSON.stringify() to convert JavaScript objects into JSON strings.",
                    "JSON Data Types: strings, numbers, objects, arrays, booleans, null",
                    "JSON Methods: JSON.parse(), JSON.stringify(), toJSON()"
                ],
                Example: [
                    `const jsonString = \'{"name": "John", "age": 30}\'; const jsonObj = JSON.parse(jsonString); console.log(jsonObj.name); // Output: John const newJsonString = JSON.stringify(jsonObj); console.log(newJsonString); // Output: {"name":"John","age":30}`
                ]
            }
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
                ],
                Example: [
                    `const currentDate = new Date(); console.log(currentDate.toDateString()); // Output: Tue Jul 28 2024 console.log(currentDate.getFullYear()); // Output: 2024`
                ]
            }
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
                ],
                Example: [
                    "let globalVar = \"I am global\";\nfunction localScope() {\n  let localVar = \"I am local\";\n  console.log(globalVar); // Output: I am global\n  console.log(localVar); // Output: I am local\n}\nlocalScope();\nconsole.log(globalVar); // Output: I am global\nconsole.log(localVar); // Error: localVar is not defined"
                ]
            }
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
                ],
                Example: [
                    "function outer() {\n  let x = 10;\n  function inner() {\n    console.log(x);\n  }\n  return inner;\n}\nconst innerFunc = outer();\ninnerFunc(); // Output: 10"
                ]
            }
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
                ],
                Example: [
                    "const myPromise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('Success!');\n  }, 2000);\n});\nmyPromise.then((value) => {\n  console.log(value); // Output: Success! (after 2 seconds)\n}).catch((error) => {\n  console.error(error);\n});"
                ]
            }
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
                ],
                Example: [
                    "async function fetchData() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n    const data = await response.json();\n    console.log(data); // Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\nfetchData();"
                ]
            }
        ]
    },
    {
        head: "JavaScript DOM Manipulation",
        Topics: [
            {
                compilerContent: "abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni",
                heading: "JavaScript DOM Manipulation",
                link: "#",
                content: "The DOM (Document Object Model) represents the page so that programs can change the document structure, style, and content.",
                ulItems: [
                    "Selecting Elements: Using methods like getElementById, getElementsByClassName, querySelector, querySelectorAll.",
                    "Changing Content: Using innerHTML, textContent, innerText.",
                    "Changing Styles: Using the style property.",
                    "DOM Events: Listening to events like click, mouseover, keypress, etc.",
                    "DOM Methods: appendChild, removeChild, replaceChild, insertBefore, etc."
                ],
                Example: [
                    "const element = document.getElementById('myElement');\nelement.innerHTML = 'Hello, World!';\nelement.style.color = 'blue';\nelement.addEventListener('click', () => {\n  alert('Element clicked!');\n});"
                ]
            }
        ]
    },
    {
        head: "JavaScript Event Loop",
        Topics: [
            {
                compilerContent: "abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni",
                heading: "JavaScript Event Loop",
                link: "#",
                content: "The event loop is what allows JavaScript to perform non-blocking asynchronous operations.",
                ulItems: [
                    "Call Stack: Keeps track of function calls.",
                    "Web APIs: Browser APIs like setTimeout, DOM events, AJAX.",
                    "Task Queue: Contains callbacks to be executed.",
                    "Event Loop: Checks if the call stack is empty and if there are any tasks in the task queue."
                ],
                Example: [
                    "console.log('Start');\nsetTimeout(() => {\n  console.log('Callback');\n}, 2000);\nconsole.log('End');\n// Output: Start\n//         End\n//         Callback (after 2 seconds)"
                ]
            }
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
                ],
                Example: [
                    "'const form = document.getElementById(\"myForm\");\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault(); // Prevent form from submitting\n  const inputValue = document.getElementById(\"myInput\").value;\n  console.log(\"Input value:\", inputValue);\n});'"
                ]
            }
        ]
    },
    {
        head: "JavaScript Web APIs",
        Topics: [
            {
                compilerContent: "abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni",
                heading: "JavaScript Web APIs",
                link: "#",
                content: "Web APIs provide functionality for tasks like making network requests or manipulating the DOM.",
                ulItems: [
                    "Fetch API: Making network requests using fetch().",
                    "Geolocation API: Accessing the user's location.",
                    "LocalStorage API: Storing data locally on the user's browser.",
                    "Web Storage API: Storing data locally on the user's browser.",
                    "Web Workers API: Running scripts in the background."
                ],
                Example: [
                    "'fetch(\"https://jsonplaceholder.typicode.com/posts\")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(\"Error:\", error));\n\nnavigator.geolocation.getCurrentPosition((position) => {\n  console.log(\"Latitude:\", position.coords.latitude);\n  console.log(\"Longitude:\", position.coords.longitude);\n});\n\nlocalStorage.setItem(\"myKey\", \"myValue\");\nconsole.log(localStorage.getItem(\"myKey\")); // Output: myValue'"
                ]
            }
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
                ],
                Example: [
                    "'try {\n  let result = someFunction();\n  console.log(result);\n} catch (error) {\n  console.error(\"Error caught:\", error.message);\n} finally {\n  console.log(\"This runs regardless of the outcome\");\n}\n\nfunction someFunction() {\n  throw new Error(\"Something went wrong!\");\n}'"
                ]
            }
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
                ],
                Example: [
                    "'let x = 10;\nconst PI = 3.14;\nif (x > 5) {\n  let y = x + 5;\n  console.log(y); // Output: 15\n}\nconsole.log(x); // Output: 10\nconsole.log(y); // Error: y is not defined'"
                ]
            }
        ]
    },
    {
        head: "JavaScript Arrow Functions",
        Topics: [
            {
                compilerContent: "abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni",
                heading: "JavaScript Arrow Functions",
                link: "#",
                content: "A shorter syntax for writing function expressions.",
                ulItems: [
                    "Syntax: Using the => syntax.",
                    "No this binding: Arrow functions do not have their own this context.",
                    "Arrow Function Examples: const add = (a, b) => a + b;",
                    "Arrow Functions vs Regular Functions: Understanding the differences between arrow functions and regular functions"
                ],
                Example: [
                    "'const add = (a, b) => a + b;\nconsole.log(add(5, 3)); // Output: 8\n\nconst numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled); // Output: [2, 4, 6, 8]'"
                ]
            }
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
                ],
                Example: [
                    "'const name = \"John\";\nconst greeting = `Hello, ${name}!`;\nconsole.log(greeting); // Output: Hello, John!\n\nconst multiline = `This is a\nmultiline string`;\nconsole.log(multiline);\n// Output:\n// This is a\n// multiline string'"
                ]
            }
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
                ],
                Example: [
                    "'const [a, b] = [1, 2];\nconsole.log(a); // Output: 1\nconsole.log(b); // Output: 2\n\nconst person = { name: \"Jane\", age: 25 };\nconst { name, age } = person;\nconsole.log(name); // Output: Jane\nconsole.log(age); // Output: 25'"
                ]
            }
        ]
    },
    {
        head: "JavaScript Modules",
        Topics: [
            {
                compilerContent: "abcdejbvaifihvadvn;akofnvodaufvnaknuvfja jaknvojaebunvaovni",
                heading: "JavaScript Modules",
                link: "#",
                content: "ES6 introduced a module system that allows you to import and export code between files.",
                ulItems: [
                    "Exporting: Using export keyword to export variables, functions, or classes.",
                    "Importing: Using import keyword to import variables, functions, or classes from other files.",
                    "Module Examples: export function add(a, b) { return a + b; }; import { add } from './math.js';",
                    "Default Exports: Exporting a single default value from a module"
                ],
                Example: [
                    "'// math.js\nexport function add(a, b) {\n  return a + b;\n}\n\n// main.js\nimport { add } from \"./math.js\";\nconsole.log(add(2, 3)); // Output: 5\n\n// util.js\nexport default function log(message) {\n  console.log(message);\n}\n\n// main.js\nimport log from \"./util.js\";\nlog(\"Hello, world!\"); // Output: Hello, world!'"
                ]
            }
        ]
    }




];





export default jsTopics;