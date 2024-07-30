const nextjsTopics = [
    {
        head: "Next.js Introduction",
        headContent:"Next.js is an open-source React framework that enhances the development of web applications by providing built-in support for server-side rendering (SSR) and static site generation (SSG). Developed by Vercel, it extends React’s capabilities, allowing for the creation of high-performance, scalable applications.\n\nNext.js optimizes web performance by generating HTML on the server for each request (SSR), which improves search engine optimization (SEO) and reduces initial load times. It also supports static site generation, where pages are pre-rendered at build time for faster load speeds. Additionally, Next.js includes features like automatic code splitting, which ensures that only the necessary JavaScript is loaded for each page, and built-in support for CSS and Sass, simplifying styling.\n\nWith its integrated API routes, Next.js allows developers to handle backend logic within the same project. This comprehensive framework streamlines the development process, making it easier to build efficient, dynamic web applications.",
        Topics: [
            {
                heading: "Introduction to Next.js",
                link: "#",
                content: "Next.js is a popular React framework that enables server-side rendering and static site generation for React applications. It offers features like file-based routing, API routes, and optimized performance out of the box.",
                ulItems: [
                    "Next.js simplifies the setup for server-side rendering, allowing developers to build fast and SEO-friendly web applications.",
                    "The framework supports both static site generation (SSG) and server-side rendering (SSR), making it versatile for various use cases.",
                    "Next.js integrates seamlessly with React, enabling developers to use their existing knowledge and tools while taking advantage of additional features provided by Next.js."
                ],
                Example: [
                    "`npx create-next-app@latest` - Creates a new Next.js application.",
                    "`import Link from 'next/link';` - Imports the Link component for client-side navigation.",
                    "`import { useRouter } from 'next/router';` - Uses the useRouter hook for programmatic navigation.",
                    "`export async function getStaticProps() { return { props: { data } } }` - Fetches data at build time using static generation.",
                    "`export default function HomePage() { return <h1>Welcome to Next.js!</h1>; }` - Defines a simple Next.js page component."
                ]
            }
        ]
    },
    {
        head: "Next.js Installation",
        Topics: [
            {
                heading: "Installation and Setup",
                link: "#",
                content: "Setting up a Next.js project is straightforward and can be done using the `create-next-app` command, which sets up a new Next.js application with a pre-configured structure and dependencies.",
                ulItems: [
                    "Ensure you have Node.js and npm installed on your machine before starting with Next.js.",
                    "`create-next-app` provides a boilerplate project that includes everything you need to get started with Next.js, including essential configurations and dependencies.",
                    "After installation, you can start the development server and begin building your application."
                ],
                Example: [
                    "`npx create-next-app@latest` - Initializes a new Next.js application.",
                    "`cd my-next-app` - Navigates into the newly created project directory.",
                    "`npm run dev` - Starts the Next.js development server.",
                    "`npm install` - Installs any additional dependencies you may need.",
                    "`npm run build && npm start` - Builds and starts the production server."
                ]
            }
        ]
    },
    {
        head: "Next.js vs. Create React App",
        Topics: [
            {
                heading: "Next.js vs. Create React App",
                link: "#",
                content: "Next.js and Create React App (CRA) are both popular tools for building React applications, but they serve different purposes and offer distinct features.",
                ulItems: [
                    "Create React App is a tool for creating single-page React applications with a client-side rendering approach. It is suitable for applications where SEO and initial load time are not critical concerns.",
                    "Next.js provides server-side rendering and static site generation out of the box, making it ideal for applications that require fast load times and better SEO.",
                    "Next.js includes features like file-based routing, API routes, and automatic code splitting, which are not available in Create React App."
                ],
                Example: [
                    "`npx create-next-app@latest` - Initializes a new Next.js application.",
                    "`npx create-react-app my-app` - Initializes a new React application using Create React App.",
                    "`import Link from 'next/link';` - Uses the Link component in Next.js for client-side navigation.",
                    "`import { BrowserRouter as Router, Route } from 'react-router-dom';` - Sets up routing in Create React App.",
                    "`export async function getStaticProps() { return { props: { data } } }` - Fetches data at build time in Next.js."
                ]
            }
        ]
    },
    {
        head: "Next.js Project Structure",
        Topics: [
            {
                heading: "Project Structure",
                link: "#",
                content: "A Next.js project follows a specific structure that includes pages, components, public assets, and other essential files. Understanding this structure is crucial for effective development.",
                ulItems: [
                    "The `pages` directory contains all the page components. Each file in this directory represents a route in the application.",
                    "The `components` directory is used for reusable UI components that can be used across different pages.",
                    "The `public` directory is used for static assets like images, fonts, and other files that can be directly accessed in the browser."
                ],
                Example: [
                    "`pages/index.js` - The main entry point for the homepage.",
                    "`pages/about.js` - A separate page component for the About page.",
                    "`components/Header.js` - A reusable header component.",
                    "`public/favicon.ico` - A static asset for the site's favicon.",
                    "`next.config.js` - Configuration file for customizing Next.js settings."
                ]
            }
        ]
    },
    {
        head: "Next.js Pages and Routing",
        Topics: [
            {
                heading: "Pages and Routing",
                link: "#",
                content: "Next.js uses a file-based routing system where the file structure inside the `pages` directory defines the routes of the application. Each file represents a route that can be accessed by users.",
                ulItems: [
                    "The `pages` directory contains all the page components. Each file corresponds to a route in the application.",
                    "Dynamic routes can be created by using brackets in the file name, such as `[id].js`, allowing you to capture dynamic segments of the URL.",
                    "The `Link` component from Next.js is used for client-side navigation between pages."
                ],
                Example: [
                    "`pages/index.js` - Represents the root route `/`.",
                    "`pages/about.js` - Represents the `/about` route.",
                    "`pages/blog/[id].js` - Represents dynamic routes for individual blog posts.",
                    "`import Link from 'next/link';` - Imports the Link component for client-side navigation.",
                    "`<Link href='/about'><a>About</a></Link>` - Creates a link to the About page."
                ]
            }
        ]
    },
    {
        head: "Next.js Dynamic Routing",
        Topics: [
            {
                heading: "Dynamic Routing",
                link: "#",
                content: "Dynamic routing in Next.js allows you to create routes with dynamic segments, making it possible to build pages for various data-driven content like blogs, products, or user profiles.",
                ulItems: [
                    "Dynamic routes are created by using square brackets in the file name within the `pages` directory, such as `[id].js`.",
                    "Dynamic segments captured in the URL can be accessed through the `useRouter` hook or passed as props to the page component.",
                    "Next.js provides functions like `getStaticPaths` and `getStaticProps` to fetch data for dynamic routes during build time."
                ],
                Example: [
                    "`pages/posts/[id].js` - Represents a dynamic route for individual posts.",
                    "`import { useRouter } from 'next/router';` - Imports the useRouter hook to access dynamic segments.",
                    "`const router = useRouter(); const { id } = router.query;` - Extracts the dynamic segment from the URL.",
                    "`export async function getStaticPaths() { return { paths: [{ params: { id: '1' } }], fallback: false }; }` - Defines paths for dynamic routes.",
                    "`export async function getStaticProps({ params }) { return { props: { post: data } }; }` - Fetches data for a dynamic route."
                ]
            }
        ]
    },
    {
        head: "Next.js Static Generation",
        Topics: [
            {
                heading: "Static Generation (SSG)",
                link: "#",
                content: "Static Generation (SSG) in Next.js allows you to pre-render pages at build time, resulting in fast and SEO-friendly web applications. SSG is suitable for pages that can be generated ahead of time and do not require frequent updates.",
                ulItems: [
                    "SSG is enabled by using the `getStaticProps` function in your page component to fetch data at build time.",
                    "Pages generated using SSG are served as static HTML, providing fast load times and improved performance.",
                    "SSG is ideal for pages with content that does not change frequently, such as marketing pages, blogs, and documentation."
                ],
                Example: [
                    "`export async function getStaticProps() { return { props: { data } }; }` - Fetches data at build time.",
                    "`export default function HomePage({ data }) { return <div>{data}</div>; }` - Uses the fetched data in a page component.",
                    "`npm run build` - Generates static HTML for pages using SSG.",
                    "`import fs from 'fs';` - Uses Node.js modules to read local files during build time.",
                    "`const data = fs.readFileSync('data.json');` - Reads local data to be used in SSG."
                ]
            }
        ]
    },
    {
        head: "Next.js Server-side Rendering",
        Topics: [
            {
                heading: "Server-side Rendering (SSR)",
                link: "#",
                content: "Server-side Rendering (SSR) in Next.js allows you to pre-render a page on each request, making it suitable for pages that need to display frequently updated data or user-specific content.",
                ulItems: [
                    "SSR is enabled by using the `getServerSideProps` function in your page component to fetch data on each request.",
                    "Pages generated using SSR are rendered on the server and sent to the client as fully rendered HTML, improving the initial load time and SEO.",
                    "SSR is ideal for pages that require up-to-date data or user-specific content, such as dashboards, user profiles, and e-commerce product pages."
                ],
                Example: [
                    "`export async function getServerSideProps() { return { props: { data } }; }` - Fetches data on each request.",
                    "`export default function DashboardPage({ data }) { return <div>{data}</div>; }` - Uses the fetched data in a page component.",
                    "`import { getSession } from 'next-auth/client';` - Fetches user session data during SSR.",
                    "`const session = await getSession(context);` - Retrieves session information on each request.",
                    "`const res = await fetch('https://api.example.com/data'); const data = await res.json();` - Fetches external data during SSR."
                ]
            }
        ]
    },
    {
        head: "Next.js Incremental Static Regeneration",
        Topics: [
            {
                heading: "Incremental Static Regeneration (ISR)",
                link: "#",
                content: "Incremental Static Regeneration (ISR) in Next.js allows you to update static content after the build time by re-generating pages in the background as traffic comes in. ISR provides the benefits of static generation with the ability to update stale content.",
                ulItems: [
                    "ISR is enabled by adding a `revalidate` key in the `getStaticProps` function, specifying the time interval for re-generating the page.",
                    "Pages generated using ISR are served as static HTML initially, but they can be updated in the background based on the revalidation interval.",
                    "ISR is ideal for pages that require periodic updates without rebuilding the entire site, such as news articles, product listings, and blog posts."
                ],
                Example: [
                    "`export async function getStaticProps() { return { props: { data }, revalidate: 10 }; }` - Fetches data and sets the revalidation interval.",
                    "`export default function BlogPost({ data }) { return <div>{data}</div>; }` - Uses the fetched data in a page component.",
                    "`import fs from 'fs';` - Uses Node.js modules to read local files during build time.",
                    "`const data = fs.readFileSync('data.json');` - Reads local data to be used in ISR.",
                    "`const res = await fetch('https://api.example.com/data'); const data = await res.json();` - Fetches external data for ISR."
                ]
            }
        ]
    },
    {
        head: "Next.js API Routes",
        Topics: [
            {
                heading: "API Routes",
                link: "#",
                content: "Next.js API routes allow you to create serverless API endpoints within your application. These routes can be used to handle backend logic, fetch data, and perform server-side operations.",
                ulItems: [
                    "API routes are defined in the `pages/api` directory, with each file representing an endpoint.",
                    "You can use any Node.js module or library within API routes to handle various backend tasks.",
                    "API routes are ideal for building serverless functions, handling form submissions, and interacting with external APIs."
                ],
                Example: [
                    "`pages/api/hello.js` - Defines a simple API route.",
                    "`export default function handler(req, res) { res.status(200).json({ message: 'Hello, world!' }); }` - Handles a GET request.",
                    "`import { connectToDatabase } from '../../lib/mongodb';` - Connects to a MongoDB database.",
                    "`const data = await fetch('https://api.example.com/data');` - Fetches data from an external API.",
                    "`import nodemailer from 'nodemailer';` - Sends emails using Nodemailer in an API route."
                ]
            }
        ]
    },
    {
        head: "Next.js Data Fetching",
        Topics: [
            {
                heading: "Data Fetching",
                link: "#",
                content: "Next.js provides multiple methods for data fetching, including `getStaticProps`, `getServerSideProps`, and `getStaticPaths`. These methods enable you to fetch data at different stages of the application lifecycle.",
                ulItems: [
                    "`getStaticProps` is used to fetch data at build time for static generation.",
                    "`getServerSideProps` is used to fetch data on each request for server-side rendering.",
                    "`getStaticPaths` is used to define dynamic routes and fetch data for static generation of these routes."
                ],
                Example: [
                    "`export async function getStaticProps() { return { props: { data } }; }` - Fetches data at build time.",
                    "`export async function getServerSideProps() { return { props: { data } }; }` - Fetches data on each request.",
                    "`export async function getStaticPaths() { return { paths: [{ params: { id: '1' } }], fallback: false }; }` - Defines paths for dynamic routes.",
                    "`const res = await fetch('https://api.example.com/data'); const data = await res.json();` - Fetches external data.",
                    "`import fs from 'fs'; const data = fs.readFileSync('data.json');` - Fetches local data."
                ]
            }
        ]
    },
    {
        head: "Next.js getStaticProps",
        Topics: [
            {
                heading: "getStaticProps",
                link: "#",
                content: "`getStaticProps` is a Next.js function used for static generation. It allows you to fetch data at build time, which is then passed as props to the page component. This results in fast and SEO-friendly static pages.",
                ulItems: [
                    "`getStaticProps` runs only at build time, making it suitable for pages that can be pre-rendered with static content.",
                    "The function returns an object with a `props` key, containing the data to be passed to the page component.",
                    "You can fetch data from external APIs, local files, or databases within `getStaticProps`."
                ],
                Example: [
                    "`export async function getStaticProps() { const res = await fetch('https://api.example.com/data'); const data = await res.json(); return { props: { data } }; }` - Fetches external data at build time.",
                    "`import fs from 'fs'; export async function getStaticProps() { const data = fs.readFileSync('data.json'); return { props: { data: JSON.parse(data) } }; }` - Fetches local data at build time.",
                    "`export default function HomePage({ data }) { return <div>{data}</div>; }` - Uses the fetched data in a page component.",
                    "`const data = await someDatabaseFunction();` - Fetches data from a database.",
                    "`export async function getStaticProps() { const data = await someDatabaseFunction(); return { props: { data } }; }` - Fetches data from a database at build time."
                ]
            }
        ]
    },
    {
        head: "Next.js getServerSideProps",
        Topics: [
            {
                heading: "getServerSideProps",
                link: "#",
                content: "`getServerSideProps` is a Next.js function used for server-side rendering. It allows you to fetch data on each request, making it suitable for pages that require up-to-date or user-specific content.",
                ulItems: [
                    "`getServerSideProps` runs on the server for each request, providing fresh data for each page load.",
                    "The function returns an object with a `props` key, containing the data to be passed to the page component.",
                    "You can fetch data from external APIs, local files, or databases within `getServerSideProps`."
                ],
                Example: [
                    "`export async function getServerSideProps() { const res = await fetch('https://api.example.com/data'); const data = await res.json(); return { props: { data } }; }` - Fetches external data on each request.",
                    "`import fs from 'fs'; export async function getServerSideProps() { const data = fs.readFileSync('data.json'); return { props: { data: JSON.parse(data) } }; }` - Fetches local data on each request.",
                    "`export default function DashboardPage({ data }) { return <div>{data}</div>; }` - Uses the fetched data in a page component.",
                    "`const data = await someDatabaseFunction();` - Fetches data from a database.",
                    "`export async function getServerSideProps() { const data = await someDatabaseFunction(); return { props: { data } }; }` - Fetches data from a database on each request."
                ]
            }
        ]
    },
    {
        head: "Next.js getStaticPaths",
        Topics: [
            {
                heading: "getStaticPaths",
                link: "#",
                content: "`getStaticPaths` is a Next.js function used to define dynamic routes for static generation. It allows you to specify which paths to pre-render at build time, making it suitable for generating pages with dynamic content.",
                ulItems: [
                    "`getStaticPaths` returns an object with a `paths` key, containing an array of route parameters to pre-render.",
                    "The `fallback` key in the returned object determines the behavior for routes that are not pre-rendered.",
                    "You can fetch data from external APIs, local files, or databases within `getStaticPaths` to generate the paths."
                ],
                Example: [
                    "`export async function getStaticPaths() { const res = await fetch('https://api.example.com/posts'); const posts = await res.json(); const paths = posts.map(post => ({ params: { id: post.id.toString() } })); return { paths, fallback: false }; }` - Fetches external data to generate paths.",
                    "`import fs from 'fs'; export async function getStaticPaths() { const data = fs.readFileSync('data.json'); const posts = JSON.parse(data); const paths = posts.map(post => ({ params: { id: post.id.toString() } })); return { paths, fallback: false }; }` - Fetches local data to generate paths.",
                    "`export default function PostPage({ post }) { return <div>{post.title}</div>; }` - Uses the fetched data in a page component.",
                    "`const data = await someDatabaseFunction();` - Fetches data from a database.",
                    "`export async function getStaticPaths() { const data = await someDatabaseFunction(); const paths = data.map(item => ({ params: { id: item.id.toString() } })); return { paths, fallback: false }; }` - Fetches data from a database to generate paths."
                ]
            }
        ]
    },
    {
        head: "Client-side Fetching",
        Topics: [
            {
                heading: "Client-side Fetching",
                link: "#",
                content: "Client-side fetching in Next.js allows you to fetch data directly in your React components using hooks like `useEffect` and libraries like SWR or React Query. This approach is useful for dynamic data that changes frequently.",
                ulItems: [
                    "Use `fetch` or libraries like Axios for making HTTP requests.",
                    "Manage loading states and errors within your component.",
                    "Ideal for data that changes often or needs to be updated in real-time."
                ],
                Example: [
                    "`import { useEffect, useState } from 'react';` - Import React hooks.",
                    "`useEffect(() => { fetch('/api/data').then(res => res.json()).then(data => setData(data)); }, []);` - Fetch data on component mount.",
                    "`const { data, error } = useSWR('/api/data', fetcher);` - Use SWR for data fetching.",
                    "`import axios from 'axios'; const fetchData = async () => { const response = await axios.get('/api/data'); setData(response.data); };` - Fetch data with Axios."
                ]
            }
        ]
    },
    {
        head: "CSS and Styling",
        Topics: [
            {
                heading: "CSS and Styling",
                link: "#",
                content: "Next.js supports various CSS and styling solutions, including global styles, CSS Modules, and CSS-in-JS libraries. Choose the method that best fits your project needs.",
                ulItems: [
                    "Global styles are defined in `styles/globals.css`.",
                    "CSS Modules provide scoped styles to components.",
                    "CSS-in-JS libraries like Styled Components or Emotion offer dynamic styling capabilities."
                ],
                Example: [
                    "`import '../styles/globals.css';` - Import global styles.",
                    "`import styles from './Component.module.css';` - Import CSS Modules.",
                    "`const Button = styled.button`background: palevioletred; color: white;``;` - Use Styled Components."
                ]
            }
        ]
    },
    {
        head: "CSS Modules",
        Topics: [
            {
                heading: "CSS Modules",
                link: "#",
                content: "CSS Modules in Next.js allow you to scope CSS locally to the component, preventing style conflicts. Each component can have its own CSS file with unique class names.",
                ulItems: [
                    "Create CSS files with the `.module.css` extension.",
                    "Import styles using `import styles from './Component.module.css';`.",
                    "Access styles using `className={styles.className}`."
                ],
                Example: [
                    "`import styles from './Button.module.css';` - Import CSS Modules.",
                    "`<button className={styles.button}>Click me</button>` - Use scoped styles.",
                    "`.button { background-color: blue; color: white; }` - Define styles in CSS file."
                ]
            }
        ]
    },
    {
        head: "Styled JSX",
        Topics: [
            {
                heading: "Styled JSX",
                link: "#",
                content: "Styled JSX is a CSS-in-JS solution built into Next.js, allowing you to write scoped and dynamic styles directly in your components. It provides a simple and powerful way to manage component-level styles.",
                ulItems: [
                    "Write styles inside a `<style jsx>` tag within your component.",
                    "Styles are scoped to the component by default.",
                    "You can use dynamic values in your styles."
                ],
                Example: [
                    "`<style jsx>{` button { color: red; } `}</style>` - Define styles within a component.",
                    "`<style jsx>{` button { color: ${props.color}; } `}</style>` - Use dynamic styles.",
                    "`<div className='container'><style jsx>{` .container { padding: 10px; } `}</style></div>` - Scope styles to component."
                ]
            }
        ]
    },
    {
        head: "Tailwind CSS",
        Topics: [
            {
                heading: "Tailwind CSS",
                link: "#",
                content: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. Next.js integrates well with Tailwind CSS, enabling you to style your application efficiently.",
                ulItems: [
                    "Install Tailwind CSS and its dependencies.",
                    "Configure Tailwind in `tailwind.config.js`.",
                    "Use utility classes directly in your JSX."
                ],
                Example: [
                    "`<div className='bg-blue-500 text-white p-4'>Hello, Tailwind!</div>` - Apply utility classes.",
                    "`import 'tailwindcss/tailwind.css';` - Import Tailwind CSS.",
                    "`module.exports = { purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], };` - Configure purge settings."
                ]
            }
        ]
    },
    {
        head: "Global Styles",
        Topics: [
            {
                heading: "Global Styles",
                link: "#",
                content: "Global styles in Next.js are defined in a global CSS file and applied to the entire application. This is useful for setting base styles, fonts, and other global settings.",
                ulItems: [
                    "Create a `styles/globals.css` file for global styles.",
                    "Import the global CSS file in `_app.js`.",
                    "Global styles apply to all components in the application."
                ],
                Example: [
                    "`import '../styles/globals.css';` - Import global styles in `_app.js`.",
                    "`body { margin: 0; font-family: Arial, sans-serif; }` - Define global styles.",
                    "`import './globals.css';` - Ensure the import path is correct based on your project structure."
                ]
            }
        ]
    },
    {
        head: "Image Optimization",
        Topics: [
            {
                heading: "Image Optimization",
                link: "#",
                content: "Next.js provides built-in image optimization using the `next/image` component. This allows you to serve optimized images in formats like WebP, resize images on demand, and use lazy loading.",
                ulItems: [
                    "Use the `next/image` component for optimized images.",
                    "Configure image domains in `next.config.js`.",
                    "Images are automatically optimized and served in modern formats."
                ],
                Example: [
                    "`import Image from 'next/image';` - Import the Image component.",
                    "`<Image src='/path/to/image.jpg' width={500} height={500} alt='Description' />` - Use the Image component.",
                    "`module.exports = { images: { domains: ['example.com'], }, };` - Configure external image domains."
                ]
            }
        ]
    },
    {
        head: "Custom Document",
        Topics: [
            {
                heading: "Custom Document",
                link: "#",
                content: "The Custom Document (`_document.js`) in Next.js allows you to augment the application's HTML and body tags. It is used for setting up global attributes, adding scripts, or modifying the initial server-side rendering process.",
                ulItems: [
                    "Create a `_document.js` file in the `pages` directory.",
                    "Extend the `Document` class from `next/document`.",
                    "Override the `render` method to customize the HTML structure."
                ],
                Example: [
                    "`import Document, { Html, Head, Main, NextScript } from 'next/document';` - Import Document components.",
                    "`class MyDocument extends Document { render() { return (<Html> <Head> <Main /> <NextScript /> </Html>); } }` - Customize the document structure.",
                    "`export default MyDocument;` - Export the custom document."
                ]
            }
        ]
    },
    {
        head: "Custom App",
        Topics: [
            {
                heading: "Custom App",
                link: "#",
                content: "The Custom App (`_app.js`) in Next.js is used to initialize pages. You can override it to control the page initialization and add global styles, state management, or layout components.",
                ulItems: [
                    "Create a `_app.js` file in the `pages` directory.",
                    "Extend the `App` component from `next/app`.",
                    "Override the `App` component to customize the app initialization."
                ],
                Example: [
                    "`import App from 'next/app';` - Import the App component.",
                    "`function MyApp({ Component, pageProps }) { return (<Component {...pageProps} />); }` - Customize the App component.",
                    "`import '../styles/globals.css';` - Import global styles.",
                    "`export default MyApp;` - Export the custom app."
                ]
            }
        ]
    },
    {
        head: "Custom Error Page",
        Topics: [
            {
                heading: "Custom Error Page",
                link: "#",
                content: "Next.js allows you to create custom error pages for handling different HTTP errors like 404 or 500. These pages provide a better user experience during unexpected errors.",
                ulItems: [
                    "Create `404.js` and `500.js` files in the `pages` directory.",
                    "Define custom components for each error page.",
                    "Custom error pages are automatically used by Next.js for their respective errors."
                ],
                Example: [
                    "`function Custom404() { return <h1>404 - Page Not Found</h1>; }` - Define a 404 error page.",
                    "`function Custom500() { return <h1>500 - Server Error</h1>; }` - Define a 500 error page.",
                    "`export default Custom404;` - Export the custom 404 error page.",
                    "`export default Custom500;` - Export the custom 500 error page."
                ]
            }
        ]
    },
    {
        head: "Middleware",
        Topics: [
            {
                heading: "Middleware",
                link: "#",
                content: "Middleware in Next.js allows you to run code before a request is completed. You can use middleware for tasks like authentication, logging, or modifying the request or response objects.",
                ulItems: [
                    "Create a `_middleware.js` file in the `pages` directory.",
                    "Export a function to handle the middleware logic.",
                    "Use middleware for tasks like authentication or request logging."
                ],
                Example: [
                    "`export function middleware(req, ev) { console.log('Middleware running'); }` - Define middleware logic.",
                    "`if (req.url.includes('/protected')) { return new Response('Unauthorized', { status: 401 }); }` - Handle authentication.",
                    "`return new Response('Hello, world!');` - Modify the response."
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
                content: "Next.js supports environment variables to manage configuration settings across different environments. You can define environment variables in `.env` files and access them in your application.",
                ulItems: [
                    "Create a `.env.local` file for local development.",
                    "Use `process.env` to access environment variables.",
                    "Define public and server-only variables using the appropriate prefixes."
                ],
                Example: [
                    "`NEXT_PUBLIC_API_URL=https://api.example.com` - Define a public environment variable.",
                    "`API_SECRET=supersecret` - Define a server-only environment variable.",
                    "`const apiUrl = process.env.NEXT_PUBLIC_API_URL;` - Access environment variables in your code."
                ]
            }
        ]
    },
    {
        head: "Deployment",
        Topics: [
            {
                heading: "Deployment",
                link: "#",
                content: "Next.js applications can be deployed to various hosting providers like Vercel, Netlify, or traditional servers. Each provider offers different features and configurations for deploying your application.",
                ulItems: [
                    "Vercel provides seamless integration with Next.js.",
                    "Netlify offers easy deployment with build settings.",
                    "You can also deploy to custom servers using Node.js."
                ],
                Example: [
                    "`vercel` - Deploy your application using the Vercel CLI.",
                    "`netlify deploy` - Deploy your application using the Netlify CLI.",
                    "`npm run build` - Build your application for production.",
                    "`node server.js` - Run your application on a custom server."
                ]
            }
        ]
    },
    {
        head: "Optimizing Performance",
        Topics: [
            {
                heading: "Optimizing Performance",
                link: "#",
                content: "Next.js offers several tools and techniques to optimize the performance of your application. You can use features like automatic static optimization, image optimization, and code splitting to improve load times and user experience.",
                ulItems: [
                    "Enable automatic static optimization by using static generation.",
                    "Use the `next/image` component for image optimization.",
                    "Implement code splitting to reduce initial load time."
                ],
                Example: [
                    "`export async function getStaticProps() { return { props: { data: 'static' } }; }` - Use static generation.",
                    "`<Image src='/path/to/image.jpg' width={500} height={500} alt='Description' />` - Optimize images.",
                    "`import dynamic from 'next/dynamic'; const DynamicComponent = dynamic(() => import('./Component'));` - Implement code splitting."
                ]
            }
        ]
    },
    {
        head: "Optimizing Performance",
        Topics: [
            {
                heading: "Optimizing Performance",
                link: "#",
                content: "Next.js offers several tools and techniques to optimize the performance of your application. You can use features like automatic static optimization, image optimization, and code splitting to improve load times and user experience.",
                ulItems: [
                    "Enable automatic static optimization by using static generation.",
                    "Use the `next/image` component for image optimization.",
                    "Implement code splitting to reduce initial load time."
                ],
                Example: [
                    "`export async function getStaticProps() { return { props: { data: 'static' } }; }` - Use static generation.",
                    "`<Image src='/path/to/image.jpg' width={500} height={500} alt='Description' />` - Optimize images.",
                    "`import dynamic from 'next/dynamic'; const DynamicComponent = dynamic(() => import('./Component'));` - Implement code splitting."
                ]
            }
        ]
    },
    {
        head: "Internationalization (i18n)",
        Topics: [
            {
                heading: "Internationalization (i18n)",
                link: "#",
                content: "Next.js has built-in support for internationalized routing and language detection, making it easier to create multi-language applications.",
                ulItems: [
                    "Configure `i18n` in `next.config.js`.",
                    "Define supported locales and default locale.",
                    "Use `next/link` and `next/router` for locale-specific routing."
                ],
                Example: [
                    "`module.exports = { i18n: { locales: ['en', 'fr', 'de'], defaultLocale: 'en' } };` - Configure i18n settings.",
                    "`<Link href='/' locale='fr'>French</Link>` - Use `next/link` for language links.",
                    "`const { locale } = useRouter();` - Detect current locale."
                ]
            }
        ]
    },
    {
        head: "Static File Serving",
        Topics: [
            {
                heading: "Static File Serving",
                link: "#",
                content: "Next.js can serve static files from the `public` directory, which is useful for images, scripts, or other assets.",
                ulItems: [
                    "Place static files in the `public` directory.",
                    "Access static files using `/path/to/file`.",
                    "Static files are served at the root level."
                ],
                Example: [
                    "`/public/logo.png` - Place static files in the public directory.",
                    "`<img src='/logo.png' alt='Logo' />` - Access static files in components.",
                    "`/favicon.ico` - Default path for the favicon."
                ]
            }
        ]
    },
    {
        head: "Custom Server",
        Topics: [
            {
                heading: "Custom Server",
                link: "#",
                content: "You can create a custom server to handle advanced routing and request handling using Node.js or other frameworks like Express.",
                ulItems: [
                    "Create a custom server using Node.js or Express.",
                    "Handle custom routing and middleware.",
                    "Use `next()` to delegate to Next.js."
                ],
                Example: [
                    "`const express = require('express'); const next = require('next');` - Import Express and Next.js.",
                    "`const server = express(); server.get('/custom-route', (req, res) => { return app.render(req, res, '/custom-page', req.query); });` - Define custom routes.",
                    "`server.listen(3000, () => { console.log('Server running on http://localhost:3000'); });` - Start the server."
                ]
            }
        ]
    },
    {
        head: "Redirects and Rewrites",
        Topics: [
            {
                heading: "Redirects and Rewrites",
                link: "#",
                content: "Next.js provides a simple way to configure redirects and rewrites in `next.config.js` for URL management.",
                ulItems: [
                    "Configure redirects and rewrites in `next.config.js`.",
                    "Use redirects to send users to a different URL.",
                    "Use rewrites to map an incoming request path to a different destination."
                ],
                Example: [
                    "`module.exports = { async redirects() { return [{ source: '/old-url', destination: '/new-url', permanent: true }]; } };` - Configure redirects.",
                    "`module.exports = { async rewrites() { return [{ source: '/path/:slug', destination: '/new-path/:slug' }]; } };` - Configure rewrites.",
                    "`<Link href='/old-url'>Old URL</Link>` - Use links with redirects."
                ]
            }
        ]
    },
    {
        head: "API Middleware",
        Topics: [
            {
                heading: "API Middleware",
                link: "#",
                content: "Next.js API routes support middleware for handling authentication, logging, and other tasks before your API handlers are executed.",
                ulItems: [
                    "Create middleware functions for API routes.",
                    "Apply middleware to specific API routes.",
                    "Use middleware for tasks like authentication or logging."
                ],
                Example: [
                    "`export default function middleware(req, res, next) { console.log('Middleware running'); next(); }` - Define middleware function.",
                    "`import middleware from '../../middleware'; export default function handler(req, res) { middleware(req, res, () => { res.status(200).json({ message: 'Hello' }); }); }` - Apply middleware.",
                    "`middleware(req, res, () => { res.status(401).json({ error: 'Unauthorized' }); });` - Handle authentication in middleware."
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
                content: "Next.js supports various authentication and authorization strategies, including JWT, OAuth, and third-party services like Auth0.",
                ulItems: [
                    "Implement JWT-based authentication.",
                    "Use third-party authentication services.",
                    "Protect routes using middleware or higher-order components."
                ],
                Example: [
                    "`import jwt from 'jsonwebtoken';` - Import JWT library.",
                    "`const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });` - Generate JWT token.",
                    "`if (!token) { res.status(401).json({ error: 'Unauthorized' }); }` - Validate JWT token.",
                    "`import { withPageAuthRequired } from '@auth0/nextjs-auth0';` - Use Auth0 for authentication."
                ]
            }
        ]
    },
    {
        head: "Testing",
        Topics: [
            {
                heading: "Testing",
                link: "#",
                content: "Next.js supports various testing frameworks like Jest, Cypress, and Testing Library for unit, integration, and end-to-end testing.",
                ulItems: [
                    "Use Jest for unit testing.",
                    "Use Cypress for end-to-end testing.",
                    "Use Testing Library for React component testing."
                ],
                Example: [
                    "`import { render, screen } from '@testing-library/react';` - Import Testing Library.",
                    "`test('renders a heading', () => { render(<MyComponent />); expect(screen.getByRole('heading')).toBeInTheDocument(); });` - Write a simple test.",
                    "`import { mount } from 'cypress/react';` - Import Cypress for React.",
                    "`cy.visit('/'); cy.get('h1').contains('Hello, world!');` - Write a Cypress test."
                ]
            }
        ]
    },
    {
        head: "TypeScript with Next.js",
        Topics: [
            {
                heading: "TypeScript with Next.js",
                link: "#",
                content: "Next.js has built-in TypeScript support, allowing you to use TypeScript for type safety and developer experience improvements.",
                ulItems: [
                    "Install TypeScript and necessary type definitions.",
                    "Create a `tsconfig.json` file.",
                    "Rename your files to `.tsx` and `.ts` extensions."
                ],
                Example: [
                    "`npm install --save-dev typescript @types/react @types/node` - Install TypeScript and types.",
                    "`{ \"compilerOptions\": { \"target\": \"es5\", \"lib\": [\"dom\", \"dom.iterable\", \"esnext\"], \"allowJs\": true, \"skipLibCheck\": true, \"strict\": true, \"forceConsistentCasingInFileNames\": true, \"noEmit\": true, \"esModuleInterop\": true, \"moduleResolution\": \"node\", \"resolveJsonModule\": true, \"isolatedModules\": true, \"jsx\": \"preserve\" } }` - Configure `tsconfig.json`.",
                    "`const MyComponent: React.FC = () => { return <h1>Hello, TypeScript</h1>; };` - Write a component with TypeScript."
                ]
            }
        ]
    },    
    {
        head: "Integrating with CMS",
        Topics: [
            {
                heading: "Integrating with CMS",
                link: "#",
                content: "Next.js can be integrated with various headless CMS platforms like Contentful, Strapi, and Sanity for managing content.",
                ulItems: [
                    "Choose a headless CMS based on your project needs.",
                    "Fetch data from the CMS using APIs.",
                    "Use static generation or server-side rendering to display content."
                ],
                Example: [
                    "`import { createClient } from 'contentful';` - Import Contentful client.",
                    "`const client = createClient({ space: process.env.CONTENTFUL_SPACE_ID, accessToken: process.env.CONTENTFUL_ACCESS_TOKEN });` - Configure Contentful client.",
                    "`const entries = await client.getEntries();` - Fetch data from Contentful.",
                    "`export async function getStaticProps() { const entries = await client.getEntries(); return { props: { entries } }; }` - Use static generation with CMS data."
                ]
            }
        ]
    },
    {
        head: "Next.js and GraphQL",
        Topics: [
            {
                heading: "Next.js and GraphQL",
                link: "#",
                content: "Next.js can be used with GraphQL to fetch data from a GraphQL API and render it in your application.",
                ulItems: [
                    "Install Apollo Client or other GraphQL client.",
                    "Configure the GraphQL client in your application.",
                    "Fetch and display data using GraphQL queries."
                ],
                Example: [
                    "`import { ApolloClient, InMemoryCache } from '@apollo/client';` - Import Apollo Client.",
                    "`const client = new ApolloClient({ uri: 'https://api.example.com/graphql', cache: new InMemoryCache() });` - Configure Apollo Client.",
                    "`const { data } = await client.query({ query: gql`{ posts { id title } }` });` - Fetch data using GraphQL query.",
                    "`<div>{data.posts.map(post => <h1 key={post.id}>{post.title}</h1>)}</div>` - Display fetched data."
                ]
            }
        ]
    },
    {
        head: "Next.js with Redux",
        Topics: [
            {
                heading: "Next.js with Redux",
                link: "#",
                content: "You can integrate Redux with Next.js for state management in your application, providing a central store for your application's state.",
                ulItems: [
                    "Install Redux and React-Redux.",
                    "Create a Redux store and configure it.",
                    "Use the Redux Provider to wrap your application."
                ],
                Example: [
                    "`import { createStore } from 'redux';` - Import Redux.",
                    "`const store = createStore(reducer);` - Create Redux store.",
                    "`import { Provider } from 'react-redux';` - Import React-Redux Provider.",
                    "`<Provider store={store}><Component /></Provider>` - Wrap application with Provider.",
                    "`const mapStateToProps = state => ({ count: state.count });` - Map state to props.",
                    "`export default connect(mapStateToProps)(Component);` - Connect component to Redux store."
                ]
            }
        ]
    },
    {
        head: "Using SWR for Data Fetching",
        Topics: [
            {
                heading: "Using SWR for Data Fetching",
                link: "#",
                content: "SWR (stale-while-revalidate) is a React hook library for data fetching that provides features like caching, revalidation, and pagination.",
                ulItems: [
                    "Install SWR library.",
                    "Use `useSWR` hook to fetch data.",
                    "Handle loading and error states in your components."
                ],
                Example: [
                    "`import useSWR from 'swr';` - Import SWR library.",
                    "`const fetcher = url => fetch(url).then(res => res.json());` - Define a fetcher function.",
                    "`const { data, error } = useSWR('/api/data', fetcher);` - Use `useSWR` hook to fetch data.",
                    "`if (error) return <div>Error</div>; if (!data) return <div>Loading...</div>; return <div>{data.title}</div>;` - Handle loading and error states."
                ]
            }
        ]
    },
    {
        head: "Debugging",
        Topics: [
            {
                heading: "Debugging",
                link: "#",
                content: "Next.js provides tools for debugging your application, including error overlays, source maps, and integration with browser developer tools.",
                ulItems: [
                    "Use error overlays to debug issues in development.",
                    "Enable source maps for better debugging.",
                    "Integrate with browser developer tools."
                ],
                Example: [
                    "`next dev` - Start Next.js in development mode with error overlays.",
                    "`next.config.js { devIndicators: { buildActivity: false } }` - Customize error overlay settings.",
                    "`source-map` - Enable source maps in `next.config.js`.",
                    "`debugger;` - Use `debugger` statement in your code."
                ]
            }
        ]
    },
    {
        head: "Next.js Plugins",
        Topics: [
            {
                heading: "Next.js Plugins",
                link: "#",
                content: "Next.js supports various plugins to extend its functionality, including plugins for TypeScript, CSS, and more.",
                ulItems: [
                    "Install and configure Next.js plugins.",
                    "Use plugins to add or customize features.",
                    "Examples include TypeScript, CSS, and PWA plugins."
                ],
                Example: [
                    "`npm install @zeit/next-typescript` - Install TypeScript plugin.",
                    "`const withCSS = require('@zeit/next-css'); module.exports = withCSS();` - Configure CSS plugin.",
                    "`npm install @zeit/next-pwa` - Install PWA plugin.",
                    "`const withPWA = require('next-pwa'); module.exports = withPWA({ pwa: { dest: 'public' } });` - Configure PWA plugin."
                ]
            }
        ]
    }
];

export default nextjsTopics;