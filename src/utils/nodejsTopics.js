const nodejsTopics = [
    {
        head: "Introduction to Node.js",
        headContent: "Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code on the server side. Built on Chrome's V8 JavaScript engine, Node.js enables the creation of scalable and high-performance network applications, such as web servers and APIs. It uses an event-driven, non-blocking I/O model, which allows it to handle multiple connections concurrently with minimal overhead, making it ideal for real-time applications like chat services and live updates.\n\nNode.js comes with a built-in package manager, npm, which provides access to a vast ecosystem of libraries and tools, facilitating rapid development. Its single-threaded event loop efficiently manages asynchronous operations, preventing bottlenecks that can occur with traditional multi-threaded server environments.\n\nBy using JavaScript on both the client and server sides, Node.js streamlines development processes, improves code consistency, and allows developers to leverage their existing JavaScript skills for full-stack development.",
        Topics: [
            {
                heading: "Introduction to Node.js",
                link: "#",
                content: "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser. It is designed to build scalable network applications.",
                ulItems: [
                    "Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.",
                    "Node.js applications are written in JavaScript and can run within the Node.js runtime on various platforms including Windows, Linux, and macOS.",
                    "Node.js has a large and active community, providing a vast number of libraries and tools through NPM (Node Package Manager)."
                ],
                Example: [
                    "`node -v` - Check the Node.js version.",
                    "`node app.js` - Run a Node.js application file.",
                    "`console.log('Hello, Node.js');` - Print output to the console."
                ]
            }
        ]
    },
    {
        head: "Installation and Setup",
        Topics: [
            {
                heading: "Installation and Setup",
                link: "#",
                content: "To get started with Node.js, you need to install it on your machine. Node.js can be downloaded and installed from the official website.",
                ulItems: [
                    "Download the Node.js installer from the official website.",
                    "Run the installer and follow the setup instructions.",
                    "Verify the installation by checking the Node.js and NPM versions."
                ],
                Example: [
                    "`node -v` - Check Node.js version.",
                    "`npm -v` - Check NPM version.",
                    "`npm init` - Initialize a new Node.js project."
                ]
            }
        ]
    },
    {
        head: "Node.js Architecture",
        Topics: [
            {
                heading: "Node.js Architecture",
                link: "#",
                content: "Node.js is built on the V8 JavaScript engine and follows a single-threaded, event-driven architecture that handles multiple connections concurrently.",
                ulItems: [
                    "Node.js uses a single-threaded event loop to manage asynchronous operations.",
                    "The event loop handles I/O operations, making Node.js efficient for I/O-heavy applications.",
                    "Node.js architecture allows for high scalability and performance in network applications."
                ],
                Example: [
                    "`setTimeout(() => { console.log('Hello after 2 seconds'); }, 2000);` - Demonstrates the asynchronous nature of Node.js.",
                    "`const http = require('http');` - Import the built-in HTTP module.",
                    "`http.createServer((req, res) => { res.end('Hello, World!'); }).listen(3000);` - Create a simple HTTP server."
                ]
            }
        ]
    },
    {
        head: "REPL (Read-Eval-Print Loop)",
        Topics: [
            {
                heading: "REPL (Read-Eval-Print Loop)",
                link: "#",
                content: "REPL is an interactive shell that processes Node.js expressions. It reads user input, evaluates the input, prints the result, and loops until the user exits.",
                ulItems: [
                    "REPL provides a quick way to test Node.js code.",
                    "It supports multi-line expressions and saving/loading of previous sessions.",
                    "REPL can be accessed by simply running `node` in the terminal."
                ],
                Example: [
                    "`node` - Start the REPL.",
                    "`.help` - Show REPL commands.",
                    "`.exit` - Exit the REPL.",
                    "`> 1 + 1` - Example of evaluating an expression in REPL.",
                    "`> const fs = require('fs');` - Example of requiring a module in REPL."
                ]
            }
        ]
    },
    {
        head: "Node.js Modules",
        Topics: [
            {
                heading: "Node.js Modules",
                link: "#",
                content: "Modules are a fundamental aspect of Node.js, allowing you to organize your code into reusable and maintainable pieces.",
                ulItems: [
                    "Node.js has built-in modules for common functionalities like HTTP, File System, and Path.",
                    "Modules can be imported using the `require` function.",
                    "Custom modules can be created and exported using `module.exports`."
                ],
                Example: [
                    "`const http = require('http');` - Import the HTTP module.",
                    "`const fs = require('fs');` - Import the File System module.",
                    "`module.exports = function() { console.log('Hello from custom module'); };` - Create and export a custom module.",
                    "`const myModule = require('./myModule'); myModule();` - Import and use a custom module."
                ]
            }
        ]
    },
    {
        head: "Built-in Modules",
        Topics: [
            {
                heading: "Built-in Modules",
                link: "#",
                content: "Node.js includes several built-in modules that provide various functionalities such as working with file systems, creating HTTP servers, and handling streams.",
                ulItems: [
                    "Common built-in modules include HTTP, File System (fs), Path, and URL.",
                    "Built-in modules can be imported using the `require` function.",
                    "Each built-in module provides a set of methods and properties for specific tasks."
                ],
                Example: [
                    "`const path = require('path');` - Import the Path module.",
                    "`const filePath = path.join(__dirname, 'file.txt');` - Use the Path module to create a file path.",
                    "`const fs = require('fs'); fs.readFile(filePath, 'utf8', (err, data) => { console.log(data); });` - Read a file using the File System module.",
                    "`const http = require('http'); http.createServer((req, res) => { res.end('Hello, World!'); }).listen(3000);` - Create a server using the HTTP module."
                ]
            }
        ]
    },
    {
        head: "Creating Custom Modules",
        Topics: [
            {
                heading: "Creating Custom Modules",
                link: "#",
                content: "Custom modules allow you to encapsulate and reuse code across different parts of your Node.js application.",
                ulItems: [
                    "Create a custom module by exporting functions or objects using `module.exports`.",
                    "Import custom modules using the `require` function.",
                    "Custom modules help in organizing code and promoting code reuse."
                ],
                Example: [
                    "`// myModule.js` - Define a custom module.",
                    "`module.exports = function() { console.log('Hello from custom module'); };` - Export a function from the custom module.",
                    "`const myModule = require('./myModule');` - Import the custom module.",
                    "`myModule();` - Use the custom module."
                ]
            }
        ]
    },
    {
        head: "NPM (Node Package Manager)",
        Topics: [
            {
                heading: "NPM (Node Package Manager)",
                link: "#",
                content: "NPM is the default package manager for Node.js, used to install, manage, and publish packages.",
                ulItems: [
                    "NPM allows you to install packages from the NPM registry.",
                    "It provides various commands for managing dependencies, scripts, and publishing packages.",
                    "NPM helps in maintaining project dependencies through the `package.json` file."
                ],
                Example: [
                    "`npm init` - Initialize a new Node.js project.",
                    "`npm install express` - Install a package.",
                    "`npm install` - Install all dependencies listed in `package.json`.",
                    "`npm uninstall express` - Uninstall a package.",
                    "`npm publish` - Publish a package to the NPM registry."
                ]
            }
        ]
    },
    {
        head: "NPM Scripts",
        Topics: [
            {
                heading: "NPM Scripts",
                link: "#",
                content: "NPM scripts are custom commands defined in the `package.json` file that automate common tasks such as building, testing, and deploying your application.",
                ulItems: [
                    "NPM scripts can be defined under the `scripts` section in `package.json`.",
                    "They provide a convenient way to automate tasks and run them using `npm run <script-name>`.",
                    "Common use cases include running build tools, testing frameworks, and development servers."
                ],
                Example: [
                    "`\"scripts\": { \"start\": \"node app.js\", \"test\": \"jest\" }` - Define NPM scripts in `package.json`.",
                    "`npm run start` - Run the `start` script.",
                    "`npm run test` - Run the `test` script.",
                    "`\"build\": \"webpack --config webpack.config.js\"` - Define a build script.",
                    "`npm run build` - Run the build script."
                ]
            }
        ]
    },
    {
        head: "Asynchronous Programming",
        Topics: [
            {
                heading: "Asynchronous Programming",
                link: "#",
                content: "Asynchronous programming is a core concept in Node.js, allowing non-blocking operations and efficient handling of I/O tasks.",
                ulItems: [
                    "Node.js uses callbacks, promises, and async/await for handling asynchronous operations.",
                    "Asynchronous programming enables handling multiple tasks concurrently without blocking the main thread.",
                    "It is essential for building scalable and high-performance applications."
                ],
                Example: [
                    "`setTimeout(() => { console.log('Hello after 2 seconds'); }, 2000);` - Use a callback with `setTimeout`.",
                    "`const promise = new Promise((resolve, reject) => { resolve('Success'); }); promise.then(result => console.log(result));` - Use a promise.",
                    "`async function fetchData() { const data = await fetch('url'); console.log(data); }` - Use async/await."
                ]
            }
        ]
    },
    {
        head: "Callbacks",
        Topics: [
            {
                heading: "Callbacks",
                link: "#",
                content: "Callbacks are functions passed as arguments to other functions and executed once an asynchronous operation completes.",
                ulItems: [
                    "Callbacks are a fundamental part of asynchronous programming in Node.js.",
                    "They allow you to handle the results of asynchronous operations.",
                    "Callbacks can lead to callback hell if not managed properly."
                ],
                Example: [
                    "`fs.readFile('file.txt', 'utf8', (err, data) => { if (err) throw err; console.log(data); });` - Use a callback with `fs.readFile`.",
                    "`setTimeout(() => { console.log('Hello after 2 seconds'); }, 2000);` - Use a callback with `setTimeout`.",
                    "`function fetchData(callback) { callback('data'); } fetchData(data => console.log(data));` - Custom callback example."
                ]
            }
        ]
    },
    {
        head: "Promises",
        Topics: [
            {
                heading: "Promises",
                link: "#",
                content: "Promises provide a cleaner and more manageable way to handle asynchronous operations compared to callbacks.",
                ulItems: [
                    "Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.",
                    "They provide `then`, `catch`, and `finally` methods for handling the outcome.",
                    "Promises can be chained and combined using methods like `Promise.all` and `Promise.race`."
                ],
                Example: [
                    "`const promise = new Promise((resolve, reject) => { resolve('Success'); }); promise.then(result => console.log(result));` - Create and use a promise.",
                    "`promise.catch(error => console.log(error));` - Handle errors with `catch`.",
                    "`promise.finally(() => console.log('Completed'));` - Execute code after promise settles.",
                    "`Promise.all([promise1, promise2]).then(results => console.log(results));` - Use `Promise.all`.",
                    "`Promise.race([promise1, promise2]).then(result => console.log(result));` - Use `Promise.race`."
                ]
            }
        ]
    },
    {
        head: "Async/Await",
        Topics: [
            {
                heading: "Async/Await",
                link: "#",
                content: "Async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.",
                ulItems: [
                    "The `async` keyword declares an asynchronous function.",
                    "The `await` keyword pauses the execution of the async function and waits for the promise to resolve or reject.",
                    "Async/await provides a more readable and maintainable way to write asynchronous code."
                ],
                Example: [
                    "`async function fetchData() { const data = await fetch('url'); console.log(data); } fetchData();` - Use async/await to fetch data.",
                    "`async function example() { try { const result = await promise; console.log(result); } catch (error) { console.log(error); } } example();` - Handle errors with async/await.",
                    "`async function parallel() { const [result1, result2] = await Promise.all([promise1, promise2]); console.log(result1, result2); } parallel();` - Run promises in parallel with async/await."
                ]
            }
        ]
    },
    {
        head: "Event Loop",
        Topics: [
            {
                heading: "Event Loop",
                link: "#",
                content: "The event loop is a core mechanism in Node.js that handles asynchronous operations and ensures non-blocking I/O.",
                ulItems: [
                    "The event loop continuously checks the event queue and executes callbacks when the call stack is empty.",
                    "It allows Node.js to perform non-blocking I/O operations despite being single-threaded.",
                    "Understanding the event loop is crucial for writing efficient and performant Node.js applications."
                ],
                Example: [
                    "`setTimeout(() => { console.log('Hello after 2 seconds'); }, 2000);` - Demonstrates the event loop with `setTimeout`.",
                    "`console.log('Start'); process.nextTick(() => { console.log('Next Tick'); }); console.log('End');` - Use `process.nextTick` to queue a callback.",
                    "`const fs = require('fs'); fs.readFile('file.txt', 'utf8', (err, data) => { console.log(data); }); console.log('File read requested');` - Demonstrates asynchronous file read with the event loop."
                ]
            }
        ]
    },
    {
        head: "Event Emitter",
        Topics: [
            {
                heading: "Event Emitter",
                link: "#",
                content: "Event Emitter is a core module in Node.js that allows objects to emit and listen for events, providing a powerful pattern for handling asynchronous operations.",
                ulItems: [
                    "The `events` module provides the `EventEmitter` class.",
                    "You can create custom events and handle them using `on` and `emit` methods.",
                    "Event Emitters are commonly used in Node.js for handling asynchronous operations and inter-object communication."
                ],
                Example: [
                    "`const EventEmitter = require('events'); const emitter = new EventEmitter();` - Create an event emitter.",
                    "`emitter.on('event', () => { console.log('Event occurred'); });` - Listen for an event.",
                    "`emitter.emit('event');` - Emit an event.",
                    "`class MyEmitter extends EventEmitter {} const myEmitter = new MyEmitter();` - Create a custom event emitter class."
                ]
            }
        ]
    },
    {
        head: "File System (fs) Module",
        Topics: [
            {
                heading: "File System (fs) Module",
                link: "#",
                content: "The File System module (fs) in Node.js allows you to interact with the file system in a way modeled on standard POSIX functions.",
                ulItems: [
                    "Read files, write files, and manipulate file paths.",
                    "Create, delete, and rename files and directories.",
                    "Perform synchronous and asynchronous file operations."
                ],
                Example: [
                    "`const fs = require('fs');` - Import the File System module.",
                    "`fs.readFile('file.txt', 'utf8', (err, data) => { console.log(data); });` - Asynchronously read a file.",
                    "`fs.writeFile('file.txt', 'Hello, Node.js', err => { if (err) throw err; console.log('File written'); });` - Write to a file.",
                    "`fs.unlink('file.txt', err => { if (err) throw err; console.log('File deleted'); });` - Delete a file."
                ]
            }
        ]
    },
    {
        head: "HTTP Module",
        Topics: [
            {
                heading: "HTTP Module",
                link: "#",
                content: "The HTTP module in Node.js provides functionalities to create and manage HTTP servers and clients.",
                ulItems: [
                    "Create and manage HTTP servers and clients.",
                    "Handle HTTP requests and responses.",
                    "Support for routing, headers, and status codes."
                ],
                Example: [
                    "`const http = require('http');` - Import the HTTP module.",
                    "`const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello, World!'); }); server.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Create a basic HTTP server.",
                    "`const options = { hostname: 'example.com', port: 80, path: '/', method: 'GET' }; const req = http.request(options, res => { res.on('data', chunk => { console.log(`Body: ${chunk}`); }); }); req.end();` - Create an HTTP client request."
                ]
            }
        ]
    },
    {
        head: "Creating a Server",
        Topics: [
            {
                heading: "Creating a Server",
                link: "#",
                content: "Creating a server in Node.js involves using the HTTP module to handle incoming requests and send responses.",
                ulItems: [
                    "Use the HTTP module to create a server.",
                    "Handle incoming requests and send responses.",
                    "Set up routing and manage different endpoints."
                ],
                Example: [
                    "`const http = require('http'); const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello, World!'); }); server.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Create a basic server."
                ]
            }
        ]
    },
    {
        head: "Routing",
        Topics: [
            {
                heading: "Routing",
                link: "#",
                content: "Routing is the process of defining how an application responds to client requests for different endpoints.",
                ulItems: [
                    "Define different routes for handling requests.",
                    "Respond to requests based on the URL and HTTP method.",
                    "Use URL parameters and query strings."
                ],
                Example: [
                    "`const http = require('http'); const server = http.createServer((req, res) => { if (req.url === '/' && req.method === 'GET') { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Home Page'); } else if (req.url === '/about' && req.method === 'GET') { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('About Page'); } else { res.statusCode = 404; res.setHeader('Content-Type', 'text/plain'); res.end('Not Found'); } }); server.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Define routes for different endpoints."
                ]
            }
        ]
    },
    {
        head: "Handling Requests and Responses",
        Topics: [
            {
                heading: "Handling Requests and Responses",
                link: "#",
                content: "Handling requests and responses involves processing incoming data and sending appropriate responses to the client.",
                ulItems: [
                    "Parse incoming request data.",
                    "Set response headers and status codes.",
                    "Send response data to the client."
                ],
                Example: [
                    "`const http = require('http'); const server = http.createServer((req, res) => { let body = ''; req.on('data', chunk => { body += chunk; }); req.on('end', () => { res.statusCode = 200; res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify({ message: 'Data received', data: body })); }); }); server.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Handle request data and send JSON response."
                ]
            }
        ]
    },
    {
        head: "Streams and Buffers",
        Topics: [
            {
                heading: "Streams and Buffers",
                link: "#",
                content: "Streams and buffers are used to handle large amounts of data efficiently in Node.js.",
                ulItems: [
                    "Streams provide a way to work with large data in chunks.",
                    "Buffers are used to handle binary data.",
                    "Common stream types include Readable, Writable, Duplex, and Transform streams."
                ],
                Example: [
                    "`const fs = require('fs'); const readableStream = fs.createReadStream('file.txt'); readableStream.on('data', chunk => { console.log(chunk); }); readableStream.on('end', () => { console.log('End of file'); });` - Use a readable stream to read a file.",
                    "`const writableStream = fs.createWriteStream('file.txt'); writableStream.write('Hello, Node.js'); writableStream.end();` - Use a writable stream to write to a file.",
                    "`const buffer = Buffer.from('Hello, Buffer'); console.log(buffer);` - Create and use a buffer."
                ]
            }
        ]
    },
    {
        head: "Working with Databases",
        Topics: [
            {
                heading: "Working with Databases",
                link: "#",
                content: "Node.js can interact with various databases, including both SQL and NoSQL databases, to store and retrieve data.",
                ulItems: [
                    "Use database drivers or ORM/ODM libraries to interact with databases.",
                    "Perform CRUD operations (Create, Read, Update, Delete).",
                    "Handle database connections and queries."
                ],
                Example: [
                    "`const { Client } = require('pg'); const client = new Client({ connectionString: 'postgresql://user:password@localhost:5432/mydb' }); client.connect(); client.query('SELECT * FROM users', (err, res) => { console.log(res.rows); client.end(); });` - Connect to a PostgreSQL database and execute a query.",
                    "`const MongoClient = require('mongodb').MongoClient; MongoClient.connect('mongodb://localhost:27017', (err, client) => { const db = client.db('mydb'); db.collection('users').find().toArray((err, items) => { console.log(items); client.close(); }); });` - Connect to a MongoDB database and retrieve documents."
                ]
            }
        ]
    },
    {
        head: "MongoDB Integration",
        Topics: [
            {
                heading: "MongoDB Integration",
                link: "#",
                content: "MongoDB is a popular NoSQL database that can be integrated with Node.js using the MongoDB Node.js driver or an ODM like Mongoose.",
                ulItems: [
                    "Use the MongoDB Node.js driver to interact with MongoDB.",
                    "Perform CRUD operations and manage collections.",
                    "Use Mongoose for schema-based modeling and data validation."
                ],
                Example: [
                    "`const MongoClient = require('mongodb').MongoClient; MongoClient.connect('mongodb://localhost:27017', (err, client) => { const db = client.db('mydb'); db.collection('users').insertOne({ name: 'John Doe', age: 30 }, (err, res) => { console.log('Document inserted'); client.close(); }); });` - Insert a document into a MongoDB collection.",
                    "`const mongoose = require('mongoose'); mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true }); const userSchema = new mongoose.Schema({ name: String, age: Number }); const User = mongoose.model('User', userSchema); const user = new User({ name: 'John Doe', age: 30 }); user.save().then(() => console.log('User saved'));` - Use Mongoose to define a schema and save a document."
                ]
            }
        ]
    },
    {
        head: "MySQL Integration",
        Topics: [
            {
                heading: "MySQL Integration",
                link: "#",
                content: "MySQL is a popular relational database that can be integrated with Node.js using the MySQL Node.js driver.",
                ulItems: [
                    "Use the MySQL Node.js driver to interact with MySQL databases.",
                    "Perform CRUD operations and manage tables.",
                    "Handle database connections and queries."
                ],
                Example: [
                    "`const mysql = require('mysql'); const connection = mysql.createConnection({ host: 'localhost', user: 'root', password: 'password', database: 'mydb' }); connection.connect(); connection.query('SELECT * FROM users', (err, results) => { console.log(results); connection.end(); });` - Connect to a MySQL database and execute a query."
                ]
            }
        ]
    },
    {
        head: "Using ORM/ODM (e.g., Sequelize, Mongoose)",
        Topics: [
            {
                heading: "Using ORM/ODM (e.g., Sequelize, Mongoose)",
                link: "#",
                content: "ORM (Object-Relational Mapping) and ODM (Object-Document Mapping) libraries provide an abstraction layer for interacting with databases.",
                ulItems: [
                    "Sequelize is an ORM for SQL databases like MySQL and PostgreSQL.",
                    "Mongoose is an ODM for MongoDB.",
                    "Use models and schemas to define and interact with database structures."
                ],
                Example: [
                    "`const { Sequelize, DataTypes } = require('sequelize'); const sequelize = new Sequelize('mysql://user:pass@localhost:3306/mydb'); const User = sequelize.define('User', { name: DataTypes.STRING, age: DataTypes.INTEGER }); sequelize.sync().then(() => User.create({ name: 'John Doe', age: 30 }));` - Use Sequelize to define a model and insert data.",
                    "`const mongoose = require('mongoose'); mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true }); const userSchema = new mongoose.Schema({ name: String, age: Number }); const User = mongoose.model('User', userSchema); const user = new User({ name: 'John Doe', age: 30 }); user.save().then(() => console.log('User saved'));` - Use Mongoose to define a schema and save a document."
                ]
            }
        ]
    },
    {
        head: "Express.js Framework",
        Topics: [
            {
                heading: "Express.js Framework",
                link: "#",
                content: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.",
                ulItems: [
                    "Create web applications and APIs with minimal setup.",
                    "Handle routing, middleware, and request/response handling.",
                    "Integrate with view engines and other middleware."
                ],
                Example: [
                    "`const express = require('express'); const app = express(); app.get('/', (req, res) => { res.send('Hello, World!'); }); app.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Create a basic Express.js server."
                ]
            }
        ]
    },
    {
        head: "Middleware in Express.js",
        Topics: [
            {
                heading: "Middleware in Express.js",
                link: "#",
                content: "Middleware functions in Express.js are functions that have access to the request and response objects and can modify them or end the request-response cycle.",
                ulItems: [
                    "Use middleware to handle tasks like logging, authentication, and error handling.",
                    "Middleware functions are executed sequentially.",
                    "Built-in middleware includes `express.json` and `express.urlencoded`."
                ],
                Example: [
                    "`const express = require('express'); const app = express(); app.use((req, res, next) => { console.log(\`${req.method} ${req.url}\`); next(); }); app.get('/', (req, res) => { res.send('Hello, World!'); }); app.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Use middleware to log requests.",
                    "`app.use(express.json());` - Use built-in middleware to parse JSON request bodies."
                ]
            }
        ]
    },
    {
        head: "Routing in Express.js",
        Topics: [
            {
                heading: "Routing in Express.js",
                link: "#",
                content: "Routing in Express.js refers to how an application’s endpoints (URIs) respond to client requests.",
                ulItems: [
                    "Define routes using methods like `app.get`, `app.post`, etc.",
                    "Use route parameters and query strings.",
                    "Organize routes using Express Router."
                ],
                Example: [
                    "`const express = require('express'); const app = express(); app.get('/', (req, res) => { res.send('Hello, World!'); }); app.get('/about', (req, res) => { res.send('About Page'); }); app.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Define basic routes.",
                    "`const router = express.Router(); router.get('/user/:id', (req, res) => { res.send(\`User ID: ${req.params.id}\`); }); app.use('/api', router);` - Use Express Router to organize routes."
                ]
            }
        ]
    },
    {
        head: "Handling Form Data",
        Topics: [
            {
                heading: "Handling Form Data",
                link: "#",
                content: "Handling form data in Node.js applications involves parsing incoming form submissions and extracting data from them.",
                ulItems: [
                    "Use built-in middleware like `express.urlencoded` to parse form data.",
                    "Handle multipart form data using libraries like `multer`.",
                    "Validate and sanitize form inputs."
                ],
                Example: [
                    "`const express = require('express'); const app = express(); app.use(express.urlencoded({ extended: true })); app.post('/submit', (req, res) => { console.log(req.body); res.send('Form submitted'); }); app.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Parse URL-encoded form data.",
                    "`const multer = require('multer'); const upload = multer({ dest: 'uploads/' }); app.post('/upload', upload.single('file'), (req, res) => { console.log(req.file); res.send('File uploaded'); });` - Handle file uploads using `multer`."
                ]
            }
        ]
    },
    {
        head: "Template Engines (e.g., EJS, Pug)",
        Topics: [
            {
                heading: "Template Engines (e.g., EJS, Pug)",
                link: "#",
                content: "Template engines in Node.js allow you to render dynamic HTML pages based on data.",
                ulItems: [
                    "EJS (Embedded JavaScript) and Pug (formerly Jade) are popular template engines.",
                    "Use template engines to render views with dynamic content.",
                    "Integrate template engines with Express.js."
                ],
                Example: [
                    "`const express = require('express'); const app = express(); app.set('view engine', 'ejs'); app.get('/', (req, res) => { res.render('index', { title: 'Home' }); }); app.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Use EJS to render views.",
                    "`const express = require('express'); const app = express(); app.set('view engine', 'pug'); app.get('/', (req, res) => { res.render('index', { title: 'Home' }); }); app.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Use Pug to render views."
                ]
            }
        ]
    },
    {
        head: "Error Handling",
        Topics: [
            {
                heading: "Error Handling",
                link: "#",
                content: "Error handling in Node.js involves catching and responding to errors that occur during application execution.",
                ulItems: [
                    "Use try/catch blocks to handle synchronous errors.",
                    "Use error-handling middleware in Express.js.",
                    "Handle promise rejections and asynchronous errors."
                ],
                Example: [
                    "`app.use((err, req, res, next) => { console.error(err.stack); res.status(500).send('Something went wrong!'); });` - Error-handling middleware in Express.js.",
                    "`process.on('unhandledRejection', reason => { console.error('Unhandled Rejection:', reason); });` - Handle unhandled promise rejections.",
                    "`try { throw new Error('Something went wrong'); } catch (error) { console.error(error.message); }` - Handle synchronous errors with try/catch."
                ]
            }
        ]
    },
    {
        head: "Debugging Node.js Applications",
        Topics: [
            {
                heading: "Debugging Node.js Applications",
                link: "#",
                content: "Debugging Node.js applications involves identifying and fixing errors and performance issues.",
                ulItems: [
                    "Use the built-in Node.js debugger.",
                    "Use console logging for basic debugging.",
                    "Use third-party debugging tools like `node-inspector` and `ndb`."
                ],
                Example: [
                    "`node --inspect-brk app.js` - Start Node.js with the built-in debugger.",
                    "`console.log('Debug message');` - Use console logging for debugging.",
                    "`const util = require('util'); console.log(util.inspect(obj, { showHidden: false, depth: null }));` - Use `util.inspect` for detailed object inspection."
                ]
            }
        ]
    },
    {
        head: "Unit Testing with Mocha/Chai",
        Topics: [
            {
                heading: "Unit Testing with Mocha/Chai",
                link: "#",
                content: "Unit testing in Node.js can be performed using testing frameworks like Mocha and Chai.",
                ulItems: [
                    "Mocha is a feature-rich test framework for Node.js.",
                    "Chai is an assertion library for Node.js that works with Mocha.",
                    "Write and run unit tests to ensure code correctness."
                ],
                Example: [
                    "`const assert = require('chai').assert; describe('Array', () => { it('should return -1 when the value is not present', () => { assert.equal([1, 2, 3].indexOf(4), -1); }); });` - Write a unit test with Mocha and Chai.",
                    "`mocha` - Run unit tests with Mocha."
                ]
            }
        ]
    },
    {
        head: "Integration Testing",
        Topics: [
            {
                heading: "Integration Testing",
                link: "#",
                content: "Integration testing involves testing the interactions between different parts of an application.",
                ulItems: [
                    "Use tools like Supertest to test HTTP endpoints.",
                    "Write tests that simulate user interactions.",
                    "Ensure that different modules work together correctly."
                ],
                Example: [
                    "`const request = require('supertest'); const app = require('./app'); describe('GET /', () => { it('should respond with Hello, World!', done => { request(app).get('/').expect('Hello, World!', done); }); });` - Write an integration test with Supertest."
                ]
            }
        ]
    },
    {
        head: "Authentication and Authorization",
        Topics: [
            {
                heading: "Authentication and Authorization",
                link: "#",
                content: "Authentication and authorization are essential for securing Node.js applications.",
                ulItems: [
                    "Use libraries like Passport.js for authentication.",
                    "Implement authorization to restrict access to resources.",
                    "Use JWT (JSON Web Tokens) for stateless authentication."
                ],
                Example: [
                    "`const passport = require('passport'); const LocalStrategy = require('passport-local').Strategy; passport.use(new LocalStrategy((username, password, done) => { User.findOne({ username: username }, (err, user) => { if (err) { return done(err); } if (!user) { return done(null, false, { message: 'Incorrect username.' }); } if (!user.validPassword(password)) { return done(null, false, { message: 'Incorrect password.' }); } return done(null, user); }); }));` - Use Passport.js for local authentication.",
                    "`const jwt = require('jsonwebtoken'); const token = jwt.sign({ id: user._id }, 'your_jwt_secret');` - Generate a JWT for stateless authentication."
                ]
            }
        ]
    },
    {
        head: "Environment Variables",
        Topics: [
            {
                heading: "Environment Variables",
                link: "#",
                content: "Environment variables in Node.js are used to store configuration settings and sensitive information like API keys.",
                ulItems: [
                    "Use the `dotenv` package to load environment variables from a `.env` file.",
                    "Access environment variables using `process.env`.",
                    "Keep sensitive information secure by not committing the `.env` file to version control."
                ],
                Example: [
                    "`npm install dotenv` - Install the `dotenv` package.",
                    "`require('dotenv').config();` - Load environment variables from a `.env` file.",
                    "`const apiKey = process.env.API_KEY;` - Access an environment variable."
                ]
            }
        ]
    },
    {
        head: "Building RESTful APIs",
        Topics: [
            {
                heading: "Building RESTful APIs",
                link: "#",
                content: "Building RESTful APIs in Node.js involves creating endpoints that conform to REST principles, allowing for CRUD operations.",
                ulItems: [
                    "Use Express.js to create routes and handle HTTP requests.",
                    "Implement CRUD operations (Create, Read, Update, Delete).",
                    "Return JSON responses."
                ],
                Example: [
                    "`const express = require('express'); const app = express(); app.use(express.json()); app.get('/api/items', (req, res) => { res.json({ items: [] }); }); app.post('/api/items', (req, res) => { res.json(req.body); }); app.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Create a basic RESTful API with Express.js."
                ]
            }
        ]
    },
    {
        head: "GraphQL with Node.js",
        Topics: [
            {
                heading: "GraphQL with Node.js",
                link: "#",
                content: "GraphQL is a query language for APIs that allows clients to request only the data they need.",
                ulItems: [
                    "Use the `graphql` and `express-graphql` packages to set up a GraphQL server.",
                    "Define a schema with types and resolvers.",
                    "Handle GraphQL queries and mutations."
                ],
                Example: [
                    "`npm install graphql express-graphql` - Install GraphQL packages.",
                    "`const { graphqlHTTP } = require('express-graphql'); const { buildSchema } = require('graphql'); const schema = buildSchema('type Query { hello: String }'); const root = { hello: () => 'Hello, world!' }; app.use('/graphql', graphqlHTTP({ schema: schema, rootValue: root, graphiql: true }));` - Set up a basic GraphQL server."
                ]
            }
        ]
    },
    {
        head: "Socket.io for Real-time Applications",
        Topics: [
            {
                heading: "Socket.io for Real-time Applications",
                link: "#",
                content: "Socket.io enables real-time, bidirectional communication between clients and servers.",
                ulItems: [
                    "Install and set up `socket.io`.",
                    "Handle socket connections and events.",
                    "Implement real-time features like chat or notifications."
                ],
                Example: [
                    "`npm install socket.io` - Install Socket.io.",
                    "`const http = require('http'); const socketIo = require('socket.io'); const server = http.createServer(app); const io = socketIo(server); io.on('connection', (socket) => { console.log('New client connected'); socket.on('message', (data) => { io.emit('message', data); }); socket.on('disconnect', () => { console.log('Client disconnected'); }); }); server.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });` - Set up a basic Socket.io server."
                ]
            }
        ]
    },
    {
        head: "Deploying Node.js Applications",
        Topics: [
            {
                heading: "Deploying Node.js Applications",
                link: "#",
                content: "Deploying Node.js applications involves making your application available on a server or cloud service.",
                ulItems: [
                    "Use services like Heroku, AWS, or DigitalOcean for deployment.",
                    "Configure environment variables and scaling options.",
                    "Use process managers like PM2 for running applications in production."
                ],
                Example: [
                    "`git push heroku main` - Deploy a Node.js application to Heroku.",
                    "`aws elasticbeanstalk create-application-version` - Deploy a Node.js application to AWS Elastic Beanstalk.",
                    "`pm2 start app.js` - Use PM2 to run a Node.js application."
                ]
            }
        ]
    },
    {
        head: "PM2 for Process Management",
        Topics: [
            {
                heading: "PM2 for Process Management",
                link: "#",
                content: "PM2 is a process manager for Node.js applications that provides features like process monitoring, log management, and clustering.",
                ulItems: [
                    "Install PM2 globally.",
                    "Use PM2 to start, stop, and restart applications.",
                    "Monitor and manage application logs and performance."
                ],
                Example: [
                    "`npm install -g pm2` - Install PM2 globally.",
                    "`pm2 start app.js` - Start an application with PM2.",
                    "`pm2 logs` - View application logs with PM2."
                ]
            }
        ]
    },
    {
        head: "Logging",
        Topics: [
            {
                heading: "Logging",
                link: "#",
                content: "Logging in Node.js involves recording information about application events for debugging and monitoring purposes.",
                ulItems: [
                    "Use logging libraries like `winston` or `morgan`.",
                    "Log important events and errors.",
                    "Manage and rotate log files."
                ],
                Example: [
                    "`npm install winston` - Install the `winston` logging library.",
                    "`const winston = require('winston'); const logger = winston.createLogger({ level: 'info', format: winston.format.json(), transports: [ new winston.transports.File({ filename: 'error.log', level: 'error' }), new winston.transports.File({ filename: 'combined.log' }) ] }); logger.info('Info message'); logger.error('Error message');` - Set up basic logging with `winston`."
                ]
            }
        ]
    },
    {
        head: "Monitoring with tools like New Relic or PM2",
        Topics: [
            {
                heading: "Monitoring with tools like New Relic or PM2",
                link: "#",
                content: "Monitoring tools help you track the performance and health of your Node.js applications.",
                ulItems: [
                    "Use New Relic for comprehensive application monitoring.",
                    "Use PM2's built-in monitoring features.",
                    "Monitor application metrics, error rates, and performance."
                ],
                Example: [
                    "`npm install newrelic` - Install New Relic for Node.js.",
                    "`require('newrelic');` - Require New Relic in your application for monitoring.",
                    "`pm2 monit` - Use PM2's monitoring dashboard."
                ]
            }
        ]
    },
    {
        head: "Version Control with Git",
        Topics: [
            {
                heading: "Version Control with Git",
                link: "#",
                content: "Version control with Git allows you to manage changes to your codebase and collaborate with others.",
                ulItems: [
                    "Initialize a Git repository.",
                    "Commit and push changes to a remote repository.",
                    "Collaborate with others using branches and pull requests."
                ],
                Example: [
                    "`git init` - Initialize a new Git repository.",
                    "`git add . && git commit -m 'Initial commit'` - Commit changes to the repository.",
                    "`git push origin main` - Push changes to a remote repository."
                ]
            }
        ]
    },
    {
        head: "Best Practices for Node.js Development",
        Topics: [
            {
                heading: "Best Practices for Node.js Development",
                link: "#",
                content: "Following best practices helps ensure that your Node.js applications are maintainable, scalable, and secure.",
                ulItems: [
                    "Follow coding standards and conventions.",
                    "Implement proper error handling.",
                    "Use environment variables for configuration.",
                    "Write tests for your code.",
                    "Keep dependencies up to date."
                ],
                Example: [
                    "`eslint` - Use ESLint to enforce coding standards.",
                    "`try { // code } catch (error) { console.error(error); }` - Implement error handling.",
                    "`npm install dotenv` - Use `dotenv` for environment variables.",
                    "`npm test` - Run tests for your code."
                ]
            }
        ]
    }
];

export default nodejsTopics;