const reactTopics = [
    {
        head: "React Tutorial",
        headContent:"React is an open-source JavaScript library developed by Facebook for building user interfaces, especially for single-page applications (SPAs). It allows developers to create dynamic, interactive UIs using a component-based architecture. In React, the user interface is broken down into reusable, self-contained components, each managing its own state and rendering its own output. This modular approach enhances code reusability and maintainability.\n\nReact uses a virtual DOM, which is an in-memory representation of the actual DOM. When the state of a component changes, React updates the virtual DOM first, compares it with the previous version, and efficiently applies the necessary changes to the real DOM. This process minimizes performance bottlenecks and enhances user experience.\n\nReact also employs JSX (JavaScript XML), a syntax that combines HTML-like code with JavaScript, making it easier to write and understand UI components. Its flexibility, performance, and strong community support have made React a popular choice for modern web development.",
        Topics: [
            {
                heading: "React Get Started",
                link: "#",
                content: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of applications efficiently.",
                ulItems: [
                    "React was developed by Facebook and is maintained by a large community of developers. It follows a component-based architecture where the UI is divided into small, reusable pieces.",
                    "React makes it easy to manage and update the state of an application, providing a smooth and responsive user experience. It uses a virtual DOM to improve performance and update only the parts of the DOM that have changed.",
                    "React can be used to build single-page applications (SPAs) as well as more complex, multi-page applications. It integrates well with other libraries and frameworks, such as Redux for state management and React Router for routing."
                ],
                Example: [
                    "`npx create-react-app my-app` - Creates a new React application using Create React App.",
                    "`import React from 'react';` - Imports the React library into a JavaScript file.",
                    "`function App() { return <h1>Hello, world!</h1>; }` - Defines a simple functional component.",
                    "`export default App;` - Exports a component for use in other parts of the application.",
                    "`import ReactDOM from 'react-dom'; ReactDOM.render(<App />, document.getElementById('root'));` - Renders a component to the DOM."
                ]
            }
        ]
    },
    {
        head: "React Upgrade",
        Topics: [
            {
                heading: "React Upgrade",
                link: "#",
                content: "Upgrading React involves updating your project to use the latest version of React and its related libraries. Keeping your React project up-to-date ensures you have access to the latest features, bug fixes, and performance improvements.",
                ulItems: [
                    "Before upgrading, review the release notes and documentation to understand the changes and potential breaking changes in the new version. This helps you prepare for the upgrade and make necessary adjustments to your code.",
                    "Use tools like `npm-check-updates` to identify and update outdated dependencies in your project. This ensures that all libraries used in your project are compatible with the new version of React.",
                    "After upgrading, thoroughly test your application to ensure that everything works as expected. Pay special attention to deprecated features and APIs that may have been removed or changed in the new version."
                ],
                Example: [
                    "`npm install react@latest react-dom@latest` - Installs the latest versions of React and ReactDOM.",
                    "`npx npm-check-updates -u` - Updates all dependencies to their latest versions.",
                    "`npm install` - Installs the updated dependencies.",
                    "`import { useEffect } from 'react';` - Uses a new hook introduced in a recent version of React.",
                    "`React.StrictMode` - Wraps your application in StrictMode to identify potential issues in your code."
                ]
            }
        ]
    },
    {
        head: "React ES6",
        Topics: [
            {
                heading: "React ES6",
                link: "#",
                content: "React takes full advantage of the features introduced in ECMAScript 6 (ES6), such as classes, arrow functions, template literals, destructuring, and modules. These features help write cleaner and more efficient code.",
                ulItems: [
                    "ES6 classes are used to create components in React. They provide a clear and concise syntax for defining component logic and lifecycle methods.",
                    "Arrow functions provide a shorter syntax for writing functions and automatically bind the `this` keyword, making them ideal for event handlers and callbacks in React components.",
                    "Template literals allow you to embed expressions in strings using backticks and `${}`, making it easier to create dynamic strings in your components."
                ],
                Example: [
                    "`class MyComponent extends React.Component { render() { return <h1>Hello, {this.props.name}</h1>; } }` - Defines a class component.",
                    "`const handleClick = () => { console.log('Button clicked'); }` - Uses an arrow function for an event handler.",
                    "`const greeting = `Hello, ${name}!`;` - Uses a template literal to create a dynamic string.",
                    "`const { name, age } = this.props;` - Uses destructuring to extract props.",
                    "`import { Component } from 'react';` - Imports a module using ES6 syntax."
                ]
            }
        ]
    },
    {
        head: "React Render HTML",
        Topics: [
            {
                heading: "React Render HTML",
                link: "#",
                content: "React components can render HTML elements using JSX, a syntax extension that allows you to write HTML-like code in JavaScript. JSX makes it easy to create and update the user interface.",
                ulItems: [
                    "JSX allows you to write HTML elements directly within JavaScript code, making it easier to understand and manage the structure of your components.",
                    "React components can return a single root element, which can contain multiple child elements. This ensures a consistent and predictable structure for your components.",
                    "JSX can include JavaScript expressions within curly braces `{}`, allowing you to dynamically generate content based on the component's state or props."
                ],
                Example: [
                    "`return <div><h1>Hello, world!</h1><p>Welcome to React.</p></div>;` - Renders multiple HTML elements.",
                    "`const element = <h1>{new Date().toLocaleTimeString()}</h1>;` - Renders a dynamic element using a JavaScript expression.",
                    "`const isLoggedIn = true; return <div>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</div>;` - Uses a ternary operator to conditionally render content.",
                    "`const listItems = items.map((item) => <li key={item.id}>{item.name}</li>);` - Renders a list of items.",
                    "`const style = { color: 'blue', fontSize: '20px' }; return <h1 style={style}>Styled Text</h1>;` - Applies inline styles."
                ]
            }
        ]
    },
    {
        head: "React JSX",
        Topics: [
            {
                heading: "React JSX",
                link: "#",
                content: "JSX is a syntax extension for JavaScript that allows you to write HTML elements directly within JavaScript code. It is used in React to describe the UI structure in a more readable and maintainable way.",
                ulItems: [
                    "JSX allows you to write HTML-like code within JavaScript, making it easier to understand and manage the structure of your components. It is then compiled to regular JavaScript by tools like Babel.",
                    "JSX can include JavaScript expressions within curly braces `{}`, allowing you to dynamically generate content based on the component's state or props.",
                    "JSX tags can represent either HTML elements or custom React components. Custom components must start with an uppercase letter to distinguish them from HTML elements."
                ],
                Example: [
                    "`const element = <h1>Hello, world!</h1>;` - Creates a JSX element.",
                    "`const element = <div>{2 + 2}</div>;` - Uses a JavaScript expression in JSX.",
                    "`const element = <MyComponent name='React' />;` - Uses a custom component in JSX.",
                    "`const element = <button onClick={handleClick}>Click me</button>;` - Attaches an event handler to an element.",
                    "`const element = <img src={imageUrl} alt='Image' />;` - Uses JSX attributes."
                ]
            }
        ]
    },
    {
        head: "React Components",
        Topics: [
            {
                heading: "React Components",
                link: "#",
                content: "Components are the building blocks of a React application. They encapsulate the UI and behavior of a part of your application and can be reused across different parts of your app.",
                ulItems: [
                    "Functional components are simple JavaScript functions that return JSX. They are easy to write and are often used for presentational components that don't manage state.",
                    "Class components are ES6 classes that extend `React.Component` and include a `render` method to return JSX. They can manage state and lifecycle methods.",
                    "Components can accept props, which are inputs passed from parent components. Props allow you to customize the behavior and appearance of components."
                ],
                Example: [
                    "`function Welcome(props) { return <h1>Hello, {props.name}</h1>; }` - Defines a functional component.",
                    "`class Welcome extends React.Component { render() { return <h1>Hello, {this.props.name}</h1>; } }` - Defines a class component.",
                    "`<Welcome name='Sara' />` - Passes a prop to the Welcome component.",
                    "`function Greeting(props) { return <h1>Good {props.timeOfDay}, {props.name}!</h1>; }` - Defines a functional component with multiple props.",
                    "`class Clock extends React.Component { constructor(props) { super(props); this.state = {date: new Date()}; } render() { return <h1>It is {this.state.date.toLocaleTimeString()}.</h1>; } }` - Defines a class component with state."
                ]
            }
        ]
    },
    {
        head: "React Class",
        Topics: [
            {
                heading: "React Class",
                link: "#",
                content: "Class components in React are ES6 classes that extend `React.Component`. They include a `render` method that returns JSX and can manage state and lifecycle methods.",
                ulItems: [
                    "Class components can have a constructor method for initializing state and binding event handlers. The constructor is called before the component is mounted.",
                    "State is a JavaScript object that holds data that can change over the lifecycle of a component. State changes trigger a re-render of the component.",
                    "Lifecycle methods are special methods that run at different stages of a component's life, such as when it is mounted, updated, or unmounted. Examples include `componentDidMount` and `componentWillUnmount`."
                ],
                Example: [
                    "`class Welcome extends React.Component { render() { return <h1>Hello, {this.props.name}</h1>; } }` - Defines a class component.",
                    "`class Clock extends React.Component { constructor(props) { super(props); this.state = {date: new Date()}; } render() { return <h1>It is {this.state.date.toLocaleTimeString()}.</h1>; } }` - Defines a class component with state.",
                    "`componentDidMount() { this.timerID = setInterval(() => this.tick(), 1000); }` - Uses a lifecycle method to start a timer.",
                    "`componentWillUnmount() { clearInterval(this.timerID); }` - Uses a lifecycle method to clean up the timer.",
                    "`this.setState({date: new Date()});` - Updates the state of a component."
                ]
            }
        ]
    },
    {
        head: "React Props",
        Topics: [
            {
                heading: "React Props",
                link: "#",
                content: "Props are short for properties. They are read-only inputs passed from parent components to child components, allowing you to customize the behavior and appearance of components.",
                ulItems: [
                    "Props allow you to pass data from a parent component to a child component. This enables you to create reusable components that can be customized with different data.",
                    "Props are passed to components as attributes in JSX. They are accessed in the child component using `this.props` in class components or directly as function parameters in functional components.",
                    "Props are immutable, meaning they cannot be changed by the child component. This ensures that data flows in a single direction, making it easier to understand and manage the state of your application."
                ],
                Example: [
                    "`function Welcome(props) { return <h1>Hello, {props.name}</h1>; }` - Accesses props in a functional component.",
                    "`<Welcome name='Sara' />` - Passes a prop to the Welcome component.",
                    "`class Welcome extends React.Component { render() { return <h1>Hello, {this.props.name}</h1>; } }` - Accesses props in a class component.",
                    "`function Greeting(props) { return <h1>Good {props.timeOfDay}, {props.name}!</h1>; }` - Uses multiple props in a functional component.",
                    "`class Clock extends React.Component { render() { return <h1>It is {this.props.time}.</h1>; } }` - Uses props in a class component."
                ]
            }
        ]
    },
    {
        head: "React Events",
        Topics: [
            {
                heading: "React Events",
                link: "#",
                content: "React events are handled similarly to DOM events, but with some syntax differences. Event handlers are written in camelCase, and you pass a function as the event handler instead of a string.",
                ulItems: [
                    "React event handlers are named using camelCase, such as `onClick` and `onChange`. This is different from HTML, where event handler names are lowercase.",
                    "In React, you pass a function as the event handler, not a string. This function can be an inline function, an arrow function, or a method defined in the component.",
                    "React events are synthetic events, meaning they are wrapped in a cross-browser compatible wrapper. This ensures consistent behavior across different browsers."
                ],
                Example: [
                    "`<button onClick={handleClick}>Click me</button>;` - Attaches an event handler to a button.",
                    "`function handleClick() { console.log('Button clicked'); }` - Defines an event handler function.",
                    "`<input type='text' onChange={(e) => console.log(e.target.value)} />;` - Uses an inline function as an event handler.",
                    "`class MyComponent extends React.Component { handleClick = () => { console.log('Button clicked'); } render() { return <button onClick={this.handleClick}>Click me</button>; } }` - Defines an event handler method in a class component.",
                    "`const handleClick = () => { console.log('Button clicked'); }; <button onClick={handleClick}>Click me</button>;` - Uses an arrow function as an event handler."
                ]
            }
        ]
    },
    {
        head: "React Conditionals",
        Topics: [
            {
                heading: "React Conditionals",
                link: "#",
                content: "React allows you to render different components or elements conditionally. You can use JavaScript conditional statements, such as if statements, ternary operators, and logical && operators, to control what gets rendered.",
                ulItems: [
                    "Conditional rendering in React can be achieved using if statements. You can conditionally render different elements or components based on the state or props of the component.",
                    "The ternary operator is a concise way to perform conditional rendering. It allows you to return one of two elements or components based on a condition.",
                    "The logical && operator can be used to render an element or component only if a condition is true. This is useful for rendering elements conditionally without needing an else clause."
                ],
                Example: [
                    "`if (isLoggedIn) { return <Welcome />; } else { return <Login />; }` - Uses an if statement for conditional rendering.",
                    "`return isLoggedIn ? <Welcome /> : <Login />;` - Uses a ternary operator for conditional rendering.",
                    "`return isLoggedIn && <Welcome />;` - Uses the logical && operator for conditional rendering.",
                    "`const message = isLoggedIn ? 'Welcome back!' : 'Please sign in.';` - Uses a ternary operator in a variable assignment.",
                    "`function Greeting(props) { return props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>; }` - Uses a ternary operator in a functional component."
                ]
            }
        ]
    },
    {
        head: "React Lists",
        Topics: [
            {
                heading: "React Lists",
                link: "#",
                content: "React allows you to render lists of elements using the `map` function. Each element in the list should have a unique key prop to help React identify which items have changed, are added, or are removed.",
                ulItems: [
                    "The `map` function is used to iterate over an array and return a new array of elements. This is useful for rendering lists of components in React.",
                    "Each element in the list should have a unique key prop. The key helps React identify which items have changed, are added, or are removed, improving the performance of list rendering.",
                    "Keys should be unique among their siblings but do not need to be globally unique. Using array indices as keys is generally not recommended, especially if the order of items may change."
                ],
                Example: [
                    "`const listItems = items.map((item) => <li key={item.id}>{item.name}</li>);` - Uses the map function to render a list of items.",
                    "`return <ul>{listItems}</ul>;` - Renders the list items inside a `ul` element.",
                    "`const todos = ['Learn React', 'Build a project', 'Master JavaScript']; const todoItems = todos.map((todo, index) => <li key={index}>{todo}</li>);` - Uses the map function with array indices as keys.",
                    "`const numbers = [1, 2, 3, 4, 5]; const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);` - Uses the map function to render a list of numbers.",
                    "`const fruits = ['Apple', 'Banana', 'Cherry']; const fruitItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);` - Uses the map function to render a list of fruits."
                ]
            }
        ]
    },
    {
        head: "React Forms",
        Topics: [
            {
                heading: "React Forms",
                link: "#",
                content: "Forms in React are handled differently than in regular HTML. React forms use controlled components, where the form elements' values are controlled by the state of the component.",
                ulItems: [
                    "Controlled components are components whose form elements' values are controlled by the state of the component. This allows you to keep the form data in sync with the component's state.",
                    "To handle form submission in React, you define an event handler for the form's `onSubmit` event. This event handler can prevent the default form submission behavior and handle the form data programmatically.",
                    "Form elements such as input, textarea, and select can be controlled by setting their value attributes to the component's state and updating the state in response to user input."
                ],
                Example: [
                    "`class NameForm extends React.Component { constructor(props) { super(props); this.state = {value: ''}; this.handleChange = this.handleChange.bind(this); this.handleSubmit = this.handleSubmit.bind(this); } handleChange(event) { this.setState({value: event.target.value}); } handleSubmit(event) { alert('A name was submitted: ' + this.state.value); event.preventDefault(); } render() { return <form onSubmit={this.handleSubmit}><label>Name:<input type='text' value={this.state.value} onChange={this.handleChange} /></label><input type='submit' value='Submit' /></form>; } }` - Defines a controlled component for a form.",
                    "`const [value, setValue] = useState(''); const handleChange = (event) => setValue(event.target.value); const handleSubmit = (event) => { alert('A name was submitted: ' + value); event.preventDefault(); }; return <form onSubmit={handleSubmit}><label>Name:<input type='text' value={value} onChange={handleChange} /></label><input type='submit' value='Submit' /></form>;` - Defines a controlled component using hooks.",
                    "`class MyForm extends React.Component { constructor(props) { super(props); this.state = {username: '', email: ''}; this.handleChange = this.handleChange.bind(this); this.handleSubmit = this.handleSubmit.bind(this); } handleChange(event) { const target = event.target; const value = target.type === 'checkbox' ? target.checked : target.value; const name = target.name; this.setState({[name]: value}); } handleSubmit(event) { alert('Form submitted: ' + JSON.stringify(this.state)); event.preventDefault(); } render() { return <form onSubmit={this.handleSubmit}><label>Username:<input name='username' type='text' value={this.state.username} onChange={this.handleChange} /></label><br /><label>Email:<input name='email' type='email' value={this.state.email} onChange={this.handleChange} /></label><br /><input type='submit' value='Submit' /></form>; } }` - Defines a controlled component with multiple input fields.",
                    "`function AgeForm() { const [age, setAge] = useState(''); const handleChange = (event) => setAge(event.target.value); const handleSubmit = (event) => { alert('Your age is: ' + age); event.preventDefault(); }; return <form onSubmit={handleSubmit}><label>Age:<input type='number' value={age} onChange={handleChange} /></label><input type='submit' value='Submit' /></form>; }` - Defines a controlled component with an input type of number.",
                    "`function SelectForm() { const [fruit, setFruit] = useState('Apple'); const handleChange = (event) => setFruit(event.target.value); const handleSubmit = (event) => { alert('Your favorite fruit is: ' + fruit); event.preventDefault(); }; return <form onSubmit={handleSubmit}><label>Pick your favorite fruit:<select value={fruit} onChange={handleChange}><option value='Apple'>Apple</option><option value='Banana'>Banana</option><option value='Cherry'>Cherry</option></select></label><input type='submit' value='Submit' /></form>; }` - Defines a controlled component with a select element."
                ]
            }
        ]
    },
    {
        head: "React Router",
        Topics: [
            {
                heading: "React Router",
                link: "#",
                content: "React Router is a library for routing in React applications. It enables you to create single-page applications with dynamic routing and navigation, without the need to refresh the entire page.",
                ulItems: [
                    "React Router allows you to define routes in your application using the `Route` component. Each route is associated with a specific component that gets rendered when the route is matched.",
                    "The `Link` component is used to create navigational links in your application. It enables users to navigate between different routes without refreshing the page.",
                    "React Router supports nested routing, allowing you to define routes within other routes. This is useful for creating complex navigation structures with nested components."
                ],
                Example: [
                    "`<Router><Route path='/home' component={Home} /></Router>;` - Defines a route for the Home component.",
                    "`<Link to='/home'>Go to Home</Link>;` - Creates a navigational link to the Home route.",
                    "`<Route path='/user/:id' component={User} />;` - Defines a route with a dynamic parameter.",
                    "`<Switch><Route exact path='/' component={Home} /><Route path='/about' component={About} /><Route path='/contact' component={Contact} /></Switch>;` - Defines multiple routes using the Switch component.",
                    "`<Route path='/dashboard' component={Dashboard}><Route path='/dashboard/settings' component={Settings} /></Route>;` - Defines nested routes."
                ]
            }
        ]
    },
    {
        head: "React Memo",
        Topics: [
            {
                heading: "React Memo",
                link: "#",
                content: "React.memo is a higher-order component that helps optimize the performance of functional components by preventing unnecessary re-renders. It only re-renders the component if its props have changed.",
                ulItems: [
                    "React.memo is useful for optimizing functional components that are pure, meaning they return the same output for the same input. It prevents the component from re-rendering unless its props change.",
                    "React.memo takes a component as an argument and returns a memoized version of that component. The memoized component only re-renders if its props change.",
                    "React.memo can also accept a second argument, a custom comparison function. This function determines whether the component should re-render based on the comparison of the current and next props."
                ],
                Example: [
                    "`const MyComponent = React.memo(function MyComponent(props) { return <div>{props.name}</div>; });` - Defines a memoized functional component.",
                    "`const MyComponent = React.memo(MyComponent, (prevProps, nextProps) => prevProps.name === nextProps.name);` - Defines a memoized component with a custom comparison function.",
                    "`const MyComponent = React.memo(({ count }) => { console.log('Rendering'); return <div>{count}</div>; });` - Memoizes a component that only re-renders when the count prop changes.",
                    "`const MyComponent = React.memo((props) => { return <div>{props.value}</div>; }, (prevProps, nextProps) => prevProps.value === nextProps.value);` - Uses a custom comparison function to control re-renders.",
                    "`function MyComponent(props) { return <div>{props.text}</div>; } const MemoizedComponent = React.memo(MyComponent);` - Memoizes an existing functional component."
                ]
            }
        ]
    },
    {
        head: "React CSS Styling",
        Topics: [
            {
                heading: "React CSS Styling",
                link: "#",
                content: "Styling in React can be done using various methods, including regular CSS, inline styles, CSS modules, and styled-components. Each method has its own advantages and use cases.",
                ulItems: [
                    "Regular CSS can be used to style React components by importing CSS files into your components. This is a straightforward approach and works well for global styles.",
                    "Inline styles are written directly in the style attribute of an element. They are useful for dynamic styles that depend on the component's state or props.",
                    "CSS modules are a way to scope CSS styles locally to a component. This prevents styles from leaking into other components and helps maintain a clean and modular codebase."
                ],
                Example: [
                    "`import './App.css';` - Imports a CSS file into a React component.",
                    "`<div style={{ color: 'red', fontSize: '20px' }}>Styled Text</div>;` - Uses inline styles.",
                    "`import styles from './App.module.css'; <div className={styles.container}>Styled Text</div>;` - Uses CSS modules.",
                    "`const buttonStyle = { backgroundColor: 'blue', padding: '10px' }; return <button style={buttonStyle}>Click me</button>;` - Defines and uses an inline style object.",
                    "`<div className={`container ${this.state.isActive ? 'active' : ''}`}>Dynamic Class</div>;` - Uses conditional class names with regular CSS."
                ]
            }
        ]
    },
    {
        head: "React Sass Styling",
        Topics: [
            {
                heading: "React Sass Styling",
                link: "#",
                content: "Sass is a popular CSS preprocessor that extends CSS with features like variables, nested rules, and mixins. React projects can be styled using Sass by installing and configuring the necessary dependencies.",
                ulItems: [
                    "Sass variables allow you to define reusable values for colors, fonts, and other CSS properties. This makes it easy to maintain a consistent design across your application.",
                    "Nested rules in Sass enable you to write CSS in a hierarchical structure that mirrors the HTML structure. This improves readability and maintainability of your styles.",
                    "Mixins are reusable blocks of styles that can be included in other styles. They help avoid code duplication and make it easy to apply common styles across multiple components."
                ],
                Example: [
                    "`$primary-color: #3498db; .button { background-color: $primary-color; }` - Defines and uses a Sass variable.",
                    "`.nav { ul { margin: 0; padding: 0; li { display: inline-block; } } }` - Uses nested rules in Sass.",
                    "`@mixin flex-center { display: flex; justify-content: center; align-items: center; } .container { @include flex-center; }` - Defines and uses a mixin.",
                    "`$font-stack: Helvetica, sans-serif; body { font-family: $font-stack; }` - Defines and uses a Sass variable for fonts.",
                    "`.card { border: 1px solid #ccc; padding: 10px; @include box-shadow(0 2px 4px rgba(0, 0, 0, 0.1)); }` - Uses a mixin for applying a box-shadow."
                ]
            }
        ]
    },
    {
        head: "React Bootstrap",
        Topics: [
            {
                heading: "React Bootstrap",
                link: "#",
                content: "React Bootstrap is a popular library for integrating Bootstrap components into React applications. It provides a set of reusable components that are styled using Bootstrap's CSS framework.",
                ulItems: [
                    "React Bootstrap components are designed to be fully customizable using props. This allows you to easily modify the appearance and behavior of components without writing additional CSS.",
                    "The library includes components for common UI elements such as buttons, forms, modals, and navigation bars. These components are built using Bootstrap's styles and classes.",
                    "React Bootstrap components are responsive by default, ensuring that your application looks great on all devices. You can also use Bootstrap's grid system to create responsive layouts."
                ],
                Example: [
                    "`import Button from 'react-bootstrap/Button'; <Button variant='primary'>Primary Button</Button>;` - Imports and uses a Button component.",
                    "`import { Form, FormGroup, Label, Input } from 'reactstrap'; <Form><FormGroup><Label for='exampleEmail'>Email</Label><Input type='email' name='email' id='exampleEmail' placeholder='Enter your email' /></FormGroup></Form>;` - Uses form components.",
                    "`import Modal from 'react-bootstrap/Modal'; <Modal show={true} onHide={handleClose}><Modal.Header closeButton><Modal.Title>Modal title</Modal.Title></Modal.Header><Modal.Body>Modal content</Modal.Body></Modal>;` - Uses a Modal component.",
                    "`import Navbar from 'react-bootstrap/Navbar'; <Navbar bg='dark' variant='dark'><Navbar.Brand href='#home'>Navbar</Navbar.Brand></Navbar>;` - Uses a Navbar component.",
                    "`import { Container, Row, Col } from 'reactstrap'; <Container><Row><Col>Column 1</Col><Col>Column 2</Col></Row></Container>;` - Uses the grid system for layout."
                ]
            }
        ]
    },
    {
        head: "React Tailwind CSS",
        Topics: [
            {
                heading: "React Tailwind CSS",
                link: "#",
                content: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs. React applications can be styled using Tailwind CSS by configuring it in the project.",
                ulItems: [
                    "Tailwind CSS utility classes are applied directly to the HTML elements in your JSX. This allows you to build custom designs without writing additional CSS.",
                    "Tailwind CSS provides a comprehensive set of utility classes for common CSS properties such as margin, padding, color, and typography. These classes can be composed to create complex designs.",
                    "You can customize the default configuration of Tailwind CSS by creating a `tailwind.config.js` file. This allows you to define custom colors, spacing, and other design tokens for your project."
                ],
                Example: [
                    "`<div className='bg-blue-500 text-white p-4'>Hello, world!</div>;` - Uses Tailwind CSS utility classes for styling.",
                    "`<button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Click me</button>;` - Styles a button using Tailwind CSS.",
                    "`<div className='grid grid-cols-3 gap-4'><div className='bg-red-500'>Column 1</div><div className='bg-yellow-500'>Column 2</div><div className='bg-purple-500'>Column 3</div></div>;` - Uses Tailwind CSS grid system for layout.",
                    "`<div className='flex items-center justify-center h-screen'><h1 className='text-4xl font-bold'>Centered text</h1></div>;` - Centers content using Flexbox utilities.",
                    "`<input type='text' className='border border-gray-300 p-2 rounded' placeholder='Enter text' />;` - Styles an input element using Tailwind CSS."
                ]
            }
        ]
    },
    {
        head: "React Material-UI",
        Topics: [
            {
                heading: "React Material-UI",
                link: "#",
                content: "Material-UI is a popular library for integrating Google's Material Design components into React applications. It provides a set of reusable components that follow Material Design guidelines.",
                ulItems: [
                    "Material-UI components are highly customizable using props and the `makeStyles` hook. This allows you to easily modify the appearance and behavior of components to match your design requirements.",
                    "The library includes components for common UI elements such as buttons, forms, dialogs, and navigation bars. These components are built using Material Design's styles and guidelines.",
                    "Material-UI supports theming, allowing you to create custom themes for your application. You can define primary and secondary colors, typography, and other design tokens in the theme configuration."
                ],
                Example: [
                    "`import Button from '@material-ui/core/Button'; <Button variant='contained' color='primary'>Primary Button</Button>;` - Imports and uses a Button component.",
                    "`import { TextField } from '@material-ui/core'; <TextField label='Name' variant='outlined' />;` - Uses a TextField component.",
                    "`import Dialog from '@material-ui/core/Dialog'; <Dialog open={true} onClose={handleClose}><DialogTitle>Dialog title</DialogTitle><DialogContent>Dialog content</DialogContent></Dialog>;` - Uses a Dialog component.",
                    "`import AppBar from '@material-ui/core/AppBar'; <AppBar position='static'><Toolbar><Typography variant='h6'>App Bar</Typography></Toolbar></AppBar>;` - Uses an AppBar component.",
                    "`import { makeStyles } from '@material-ui/core/styles'; const useStyles = makeStyles((theme) => ({ root: { padding: theme.spacing(2), backgroundColor: theme.palette.background.paper } })); const classes = useStyles(); return <div className={classes.root}>Styled content</div>;` - Uses the `makeStyles` hook for styling."
                ]
            }
        ]
    },
    {
        head: "What is a Hook?",
        Topics: [
            {
                heading: "What is a Hook?",
                link: "#",
                content: "Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class. They allow you to reuse stateful logic between components.",
                ulItems: [
                    "Hooks allow you to use state and other React features without writing a class component. This makes it easier to share stateful logic between components.",
                    "Commonly used hooks include useState, useEffect, and useContext, which help manage state, side effects, and context respectively.",
                    "Custom hooks allow you to encapsulate reusable logic and share it across multiple components, making your code more modular and easier to maintain."
                ],
                Example: [
                    "`import { useState } from 'react'; function Counter() { const [count, setCount] = useState(0); return <div><p>{count}</p><button onClick={() => setCount(count + 1)}>Increment</button></div>; }` - Uses the useState hook to manage state in a functional component.",
                    "`import { useEffect } from 'react'; function Timer() { useEffect(() => { const timer = setInterval(() => { console.log('Tick'); }, 1000); return () => clearInterval(timer); }, []); return <div>Check the console for ticks</div>; }` - Uses the useEffect hook to manage side effects.",
                    "`import { useContext } from 'react'; const ThemeContext = React.createContext('light'); function ThemedComponent() { const theme = useContext(ThemeContext); return <div>The theme is {theme}</div>; }` - Uses the useContext hook to access context."
                ]
            }
        ]
    },
    {
        head: "useState",
        Topics: [
            {
                heading: "useState",
                link: "#",
                content: "The useState hook allows you to add state to functional components. It returns a state variable and a function to update that state.",
                ulItems: [
                    "The useState hook is used to declare state variables in functional components. It takes the initial state as an argument and returns an array with the current state and a function to update it.",
                    "The state updater function can be called with the new state value, or with a function that takes the previous state and returns the new state. This is useful for updating state based on the previous state.",
                    "Multiple useState hooks can be used in a single component to manage different state variables. Each call to useState is independent and manages its own piece of state."
                ],
                Example: [
                    "`const [count, setCount] = useState(0);` - Initializes a state variable `count` with a value of 0.",
                    "`<button onClick={() => setCount(count + 1)}>Increment</button>;` - Updates the state variable `count` when the button is clicked.",
                    "`const [text, setText] = useState('Hello');` - Initializes a state variable `text` with a value of 'Hello'.",
                    "`<input type='text' value={text} onChange={(e) => setText(e.target.value)} />;` - Updates the state variable `text` when the input value changes.",
                    "`const [isOn, setIsOn] = useState(false);` - Initializes a boolean state variable `isOn` with a value of false.",
                    "`<button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>;` - Toggles the state variable `isOn` between true and false when the button is clicked."
                ]
            }
        ]
    },
    {
        head: "useEffect",
        Topics: [
            {
                heading: "useEffect",
                link: "#",
                content: "The useEffect hook lets you perform side effects in functional components. It can be used for data fetching, subscriptions, or manually changing the DOM.",
                ulItems: [
                    "The useEffect hook allows you to perform side effects in your components. It runs after the initial render and after every update, making it ideal for data fetching, subscriptions, and manually changing the DOM.",
                    "You can conditionally run effects by specifying dependencies in an array as the second argument to useEffect. The effect will only re-run if one of the dependencies has changed.",
                    "The cleanup function returned by useEffect is used to clean up side effects such as subscriptions or timers. It runs before the component is unmounted or before the effect is re-executed."
                ],
                Example: [
                    "`useEffect(() => { document.title = `Count: ${count}`; }, [count]);` - Updates the document title whenever the `count` state changes.",
                    "`useEffect(() => { const timer = setInterval(() => { setCount(prevCount => prevCount + 1); }, 1000); return () => clearInterval(timer); }, []);` - Sets up an interval timer and cleans it up when the component unmounts.",
                    "`useEffect(() => { fetch('https://api.example.com/data').then(response => response.json()).then(data => setData(data)); }, []);` - Fetches data from an API when the component mounts.",
                    "`useEffect(() => { window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []);` - Sets up and cleans up a resize event listener.",
                    "`useEffect(() => { console.log('Component did update'); });` - Logs a message to the console every time the component updates."
                ]
            }
        ]
    },
    {
        head: "useContext",
        Topics: [
            {
                heading: "useContext",
                link: "#",
                content: "The useContext hook lets you access context values in functional components. It accepts a context object and returns the current context value.",
                ulItems: [
                    "The useContext hook allows you to access context values in your components. It accepts a context object (the value returned from React.createContext) and returns the current context value.",
                    "useContext simplifies accessing context values without the need to wrap components in a Context.Consumer. It makes it easier to read and write context values directly in functional components.",
                    "When a context value changes, all components that use that context will re-render. This ensures that the latest context value is always available to the components that depend on it."
                ],
                Example: [
                    "`const theme = useContext(ThemeContext);` - Accesses the current value of the `ThemeContext`.",
                    "`<div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>Content</div>;` - Applies a class based on the current theme context value.",
                    "`const user = useContext(UserContext);` - Accesses the current value of the `UserContext`.",
                    "`<p>Logged in as: {user.name}</p>;` - Displays the current user's name from the context.",
                    "`const locale = useContext(LocaleContext);` - Accesses the current value of the `LocaleContext`.",
                    "`<p>Current locale: {locale}</p>;` - Displays the current locale value from the context."
                ]
            }
        ]
    },
    {
        head: "useRef",
        Topics: [
            {
                heading: "useRef",
                link: "#",
                content: "The useRef hook lets you create mutable object references in functional components. It can be used to access DOM elements or store mutable values.",
                ulItems: [
                    "The useRef hook allows you to create mutable object references in your components. It returns a ref object with a current property that can be used to store a mutable value.",
                    "useRef is often used to access DOM elements directly. By assigning a ref object to the ref attribute of an element, you can manipulate the element using the current property.",
                    "useRef can also be used to store any mutable value that you want to persist across renders. Unlike state, changing the value of a ref does not cause a re-render."
                ],
                Example: [
                    "`const inputRef = useRef(null);` - Creates a ref object with an initial value of null.",
                    "`<input ref={inputRef} type='text' />;` - Assigns the ref object to an input element.",
                    "`const focusInput = () => { inputRef.current.focus(); };` - Focuses the input element using the ref object.",
                    "`const countRef = useRef(0); countRef.current = countRef.current + 1;` - Uses a ref object to store a mutable count value.",
                    "`const intervalRef = useRef(null); useEffect(() => { intervalRef.current = setInterval(() => { console.log('Tick'); }, 1000); return () => clearInterval(intervalRef.current); }, []);` - Stores an interval ID in a ref object and clears the interval on unmount."
                ]
            }
        ]
    },
    {
        head: "useReducer",
        Topics: [
            {
                heading: "useReducer",
                link: "#",
                content: "The useReducer hook is an alternative to useState for managing state in functional components. It takes a reducer function and an initial state as arguments.",
                ulItems: [
                    "The useReducer hook is used for managing complex state logic in your components. It takes a reducer function and an initial state as arguments, and returns the current state and a dispatch function.",
                    "The reducer function receives the current state and an action, and returns a new state based on the action. This pattern is similar to how Redux reducers work.",
                    "useReducer is useful for managing state that involves multiple sub-values or when the next state depends on the previous state. It also makes it easier to test state logic independently."
                ],
                Example: [
                    "`const initialState = { count: 0 }; function reducer(state, action) { switch (action.type) { case 'increment': return { count: state.count + 1 }; case 'decrement': return { count: state.count - 1 }; default: throw new Error(); } } const [state, dispatch] = useReducer(reducer, initialState);` - Initializes state with a reducer function.",
                    "`<button onClick={() => dispatch({ type: 'increment' })}>Increment</button>;` - Dispatches an increment action.",
                    "`<button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>;` - Dispatches a decrement action.",
                    "`function Counter() { const [state, dispatch] = useReducer(reducer, initialState); return <div><p>{state.count}</p><button onClick={() => dispatch({ type: 'increment' })}>Increment</button><button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button></div>; }` - A complete counter component using useReducer.",
                    "`const toggleReducer = (state, action) => { switch (action.type) { case 'toggle': return { ...state, on: !state.on }; default: return state; } }; const [state, dispatch] = useReducer(toggleReducer, { on: false });` - A toggle state example using useReducer."
                ]
            }
        ]
    },
    {
        head: "useCallback",
        Topics: [
            {
                heading: "useCallback",
                link: "#",
                content: "The useCallback hook returns a memoized callback function. It is used to optimize performance by preventing unnecessary re-creations of functions.",
                ulItems: [
                    "The useCallback hook is used to memoize callback functions in your components. It returns a memoized version of the callback that only changes if one of the dependencies has changed.",
                    "useCallback is useful for preventing unnecessary re-creations of functions when passed as props to child components. This helps optimize performance by avoiding re-renders of child components.",
                    "You can specify dependencies in an array as the second argument to useCallback. The memoized function will only be re-created if one of the dependencies changes."
                ],
                Example: [
                    "`const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);` - Memoizes a callback function that depends on `a` and `b`.",
                    "`<ChildComponent onClick={memoizedCallback} />;` - Passes the memoized callback as a prop to a child component.",
                    "`const handleClick = useCallback(() => { console.log('Button clicked'); }, []);` - Memoizes a click handler function.",
                    "`const calculateSum = useCallback((x, y) => x + y, []);` - Memoizes a function to calculate the sum of two numbers.",
                    "`const fetchData = useCallback(async () => { const response = await fetch(url); const data = await response.json(); setData(data); }, [url]);` - Memoizes an asynchronous data fetching function."
                ]
            }
        ]
    },
    {
        head: "useMemo",
        Topics: [
            {
                heading: "useMemo",
                link: "#",
                content: "The useMemo hook returns a memoized value. It is used to optimize performance by preventing unnecessary re-computations of expensive calculations.",
                ulItems: [
                    "The useMemo hook is used to memoize values in your components. It returns a memoized value that only changes if one of the dependencies has changed.",
                    "useMemo is useful for optimizing performance by preventing unnecessary re-computations of expensive calculations or derived state.",
                    "You can specify dependencies in an array as the second argument to useMemo. The memoized value will only be re-calculated if one of the dependencies changes."
                ],
                Example: [
                    "`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);` - Memoizes an expensive calculation that depends on `a` and `b`.",
                    "`const sortedList = useMemo(() => sortList(list), [list]);` - Memoizes a sorted version of a list.",
                    "`const filteredItems = useMemo(() => items.filter(item => item.active), [items]);` - Memoizes a filtered list of items.",
                    "`const expensiveResult = useMemo(() => performExpensiveOperation(data), [data]);` - Memoizes the result of an expensive operation.",
                    "`const derivedState = useMemo(() => deriveStateFromProps(props), [props]);` - Memoizes derived state from props."
                ]
            }
        ]
    },
    {
        head: "Custom Hooks",
        Topics: [
            {
                heading: "Custom Hooks",
                link: "#",
                content: "Custom hooks allow you to create reusable stateful logic and share it across multiple components. They are JavaScript functions that use one or more React hooks.",
                ulItems: [
                    "Custom hooks are JavaScript functions that use one or more React hooks. They allow you to encapsulate and reuse stateful logic across multiple components.",
                    "You can create custom hooks to share logic such as data fetching, form handling, and subscription management. This helps keep your components clean and focused on their primary responsibilities.",
                    "Custom hooks can use other hooks like useState, useEffect, and useContext. By extracting logic into custom hooks, you can write more modular and maintainable code."
                ],
                Example: [
                    "`function useCounter(initialValue = 0) { const [count, setCount] = useState(initialValue); const increment = () => setCount(count + 1); const decrement = () => setCount(count - 1); return { count, increment, decrement }; }` - A custom hook for managing a counter.",
                    "`function useFetch(url) { const [data, setData] = useState(null); useEffect(() => { fetch(url).then(response => response.json()).then(setData); }, [url]); return data; }` - A custom hook for fetching data.",
                    "`function useLocalStorage(key, initialValue) { const [storedValue, setStoredValue] = useState(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue; } catch (error) { return initialValue; } }); const setValue = value => { try { setStoredValue(value); window.localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.log(error); } }; return [storedValue, setValue]; }` - A custom hook for managing local storage.",
                    "`function usePrevious(value) { const ref = useRef(); useEffect(() => { ref.current = value; }); return ref.current; }` - A custom hook for getting the previous value of a prop or state.",
                    "`function useDebounce(value, delay) { const [debouncedValue, setDebouncedValue] = useState(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value); }, delay); return () => { clearTimeout(handler); }; }, [value, delay]); return debouncedValue; }` - A custom hook for debouncing a value."
                ]
            }
        ]
    }
];

export default reactTopics;
