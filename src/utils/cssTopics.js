const cssTopics = [
    {
        head: "CSS Introduction",
        Topics: [
            {
                heading: "Why to Learn CSS?",
                link: "#",
                content: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. It is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
                ulItems: [
                    "CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
                    "External stylesheets are stored in CSS files.",
                    "CSS helps you create visually appealing websites and improves user experience.",
                    "CSS allows you to separate content from design, making it easier to maintain and update the website.",
                    "It provides a wide range of styling options, from simple color changes to complex animations and transitions.",
                    "Example: Changing the color of a heading element from blue to red using CSS.",
                    "Example: Adjusting the font size of paragraphs to improve readability.",
                    "Example: Adding a background image to the website header."
                ]
            },
        ]
    },
    {
        head: "CSS Syntax",
        Topics: [
            {
                heading: "CSS Syntax",
                link: "#",
                content: "A CSS rule consists of a selector and a declaration block.",
                ulItems: [
                    "Selectors: Select the HTML element you want to style.",
                    "Declarations: Contain property and value pairs that define the style of the selected elements.",
                    "The syntax for CSS rules is: selector { property: value; }",
                    "Example: `p { color: blue; }` changes the text color of all `<p>` elements to blue.",
                    "Example: `.container { margin: 20px; padding: 10px; }` applies margin and padding to elements with the class 'container'.",
                    "Example: `#header { background-color: #f1f1f1; }` sets a background color for the element with the id 'header'."
                ]
            },
        ]
    },
    {
        head: "CSS Selectors",
        Topics: [
            {
                heading: "CSS Selectors",
                link: "#",
                content: "CSS selectors are used to select the content you want to style.",
                ulItems: [
                    "Simple Selectors: Select elements based on name, id, class.",
                    "Combinator Selectors: Select elements based on a specific relationship between them.",
                    "Pseudo-class Selectors: Select elements based on a certain state.",
                    "Pseudo-element Selectors: Select and style a part of an element.",
                    "Attribute Selectors: Style elements based on their attributes.",
                    "Example: `#nav a:hover { color: red; }` changes the color of links in the navigation when hovered.",
                    "Example: `.card:nth-child(odd) { background-color: #f9f9f9; }` styles odd cards with a different background color.",
                    "Example: `[type='text'] { border: 1px solid #ccc; }` applies a border to text input fields."
                ]
            },
        ]
    },
    {
        head: "CSS Colors",
        Topics: [
            {
                heading: "CSS Colors",
                link: "#",
                content: "CSS provides various ways to set colors for your web pages.",
                ulItems: [
                    "Color Names: 140 color names predefined by CSS.",
                    "Hexadecimal Colors: Define colors using hex codes.",
                    "RGB, RGBA Colors: Define colors using the rgb and rgba functions.",
                    "HSL, HSLA Colors: Define colors using the hsl and hsla functions.",
                    "Color Functions: CSS also supports color functions like `color()` for more dynamic color handling.",
                    "Example: `background-color: #ff5733;` sets a background color using a hex code.",
                    "Example: `color: rgb(255, 99, 71);` sets the text color using RGB.",
                    "Example: `border: 2px solid hsla(120, 100%, 50%, 0.3);` applies a border with an HSLA color."
                ]
            },
        ]
    },
    {
        head: "CSS Backgrounds",
        Topics: [
            {
                heading: "CSS Backgrounds",
                link: "#",
                content: "CSS allows you to set background properties for your elements.",
                ulItems: [
                    "background-color: Sets the background color of an element.",
                    "background-image: Sets the background image of an element.",
                    "background-repeat: Controls how the background image is repeated.",
                    "background-position: Sets the starting position of the background image.",
                    "background-size: Specifies the size of the background image.",
                    "Example: `background-color: #f0f0f0;` sets a solid background color.",
                    "Example: `background-image: url('banner.jpg');` sets a background image.",
                    "Example: `background-size: cover;` makes the background image cover the entire element."
                ]
            },
        ]
    },
    {
        head: "CSS Borders",
        Topics: [
            {
                heading: "CSS Borders",
                link: "#",
                content: "CSS allows you to set border properties for your elements.",
                ulItems: [
                    "border-style: Sets the style of the border.",
                    "border-width: Sets the width of the border.",
                    "border-color: Sets the color of the border.",
                    "border-radius: Defines the radius of the border's corners.",
                    "border: A shorthand property to set all border properties at once.",
                    "Example: `border: 1px solid #000;` sets a solid black border with a width of 1px.",
                    "Example: `border-radius: 10px;` creates rounded corners for the border.",
                    "Example: `border-color: rgba(255, 0, 0, 0.5);` sets a semi-transparent red border color."
                ]
            },
        ]
    },
    {
        head: "CSS Margins",
        Topics: [
            {
                heading: "CSS Margins",
                link: "#",
                content: "CSS margins are used to create space around elements, outside of any defined borders.",
                ulItems: [
                    "margin-top, margin-right, margin-bottom, margin-left: Set the margin on each side of the element.",
                    "margin: A shorthand property to set the margin on all four sides of an element.",
                    "auto: Used for centering block elements horizontally.",
                    "Example: `margin: 20px;` applies a 20px margin on all sides.",
                    "Example: `margin: 10px 20px;` applies 10px margin vertically and 20px horizontally.",
                    "Example: `margin: auto;` centers a block element horizontally within its container."
                ]
            },
        ]
    },
    {
        head: "CSS Padding",
        Topics: [
            {
                heading: "CSS Padding",
                link: "#",
                content: "CSS padding is used to create space around an element's content, inside of any defined borders.",
                ulItems: [
                    "padding-top, padding-right, padding-bottom, padding-left: Set the padding on each side of the element.",
                    "padding: A shorthand property to set the padding on all four sides of an element.",
                    "padding-inline: Applies padding to the start and end of an element.",
                    "Example: `padding: 15px;` applies a 15px padding on all sides.",
                    "Example: `padding: 10px 20px;` applies 10px padding vertically and 20px horizontally.",
                    "Example: `padding-inline: 5px;` applies padding to the start and end of an element in an inline direction."
                ]
            },
        ]
    },
    {
        head: "CSS Text",
        Topics: [
            {
                heading: "CSS Text",
                link: "#",
                content: "CSS provides various properties to style text.",
                ulItems: [
                    "color: Sets the color of the text.",
                    "text-align: Sets the horizontal alignment of the text.",
                    "text-decoration: Sets the decoration of the text.",
                    "text-transform: Controls the capitalization of text.",
                    "letter-spacing: Sets the space between characters.",
                    "line-height: Sets the height of lines of text.",
                    "Example: `color: #333;` sets a dark grey text color.",
                    "Example: `text-align: center;` centers the text within its container.",
                    "Example: `text-transform: uppercase;` transforms text to uppercase."
                ]
            },
        ]
    },
    {
        head: "CSS Fonts",
        Topics: [
            {
                heading: "CSS Fonts",
                link: "#",
                content: "CSS provides various properties to style fonts.",
                ulItems: [
                    "font-family: Specifies the font family for text.",
                    "font-size: Sets the size of the font.",
                    "font-style: Sets the style of the font (e.g., normal, italic).",
                    "font-weight: Sets the weight (boldness) of the font.",
                    "font-variant: Allows you to specify alternative fonts or styles for text.",
                    "Example: `font-family: Arial, sans-serif;` specifies Arial font with a fallback to sans-serif.",
                    "Example: `font-size: 16px;` sets the font size to 16 pixels.",
                    "Example: `font-weight: bold;` makes the font bold."
                ]
            },
        ]
    },
    {
        head: "CSS Links",
        Topics: [
            {
                heading: "CSS Links",
                link: "#",
                content: "CSS provides various properties to style links.",
                ulItems: [
                    "a:link: Styles an unvisited link.",
                    "a:visited: Styles a visited link.",
                    "a:hover: Styles a link when the user mouses over it.",
                    "a:active: Styles the active link.",
                    "a:focus: Styles a link when it has focus.",
                    "Example: `a:link { color: blue; }` styles unvisited links blue.",
                    "Example: `a:hover { color: red; }` changes link color to red on hover.",
                    "Example: `a:focus { outline: 2px solid orange; }` adds an orange outline when the link is focused."
                ]
            },
        ]
    },
    {
        head: "CSS Lists",
        Topics: [
            {
                heading: "CSS Lists",
                link: "#",
                content: "CSS provides various properties to style lists.",
                ulItems: [
                    "list-style-type: Specifies the type of list-item marker.",
                    "list-style-position: Specifies the position of the list-item markers.",
                    "list-style-image: Specifies an image as the list-item marker.",
                    "list-style: A shorthand property for all list-style properties.",
                    "Example: `list-style-type: disc;` uses disc markers for list items.",
                    "Example: `list-style-position: inside;` places markers inside the list item box.",
                    "Example: `list-style-image: url('marker.png');` uses an image as the marker."
                ]
            },
        ]
    },
    {
        head: "CSS Tables",
        Topics: [
            {
                heading: "CSS Tables",
                link: "#",
                content: "CSS provides various properties to style tables.",
                ulItems: [
                    "border-collapse: Sets whether table borders should collapse into a single border or be separated.",
                    "border-spacing: Sets the distance between the borders of adjacent cells.",
                    "table-layout: Sets the layout algorithm to be used for a table.",
                    "caption-side: Specifies the position of the table caption.",
                    "Example: `border-collapse: collapse;` collapses table borders into a single border.",
                    "Example: `border-spacing: 10px;` adds spacing between table cells.",
                    "Example: `table-layout: fixed;` sets a fixed layout for the table columns."
                ]
            },
        ]
    },
    {
        head: "CSS Display",
        Topics: [
            {
                heading: "CSS Display",
                link: "#",
                content: "The display property specifies if/how an element is displayed.",
                ulItems: [
                    "none: The element will not be displayed.",
                    "block: The element is displayed as a block-level element.",
                    "inline: The element is displayed as an inline element.",
                    "inline-block: The element is displayed as an inline-level block container.",
                    "flex: The element is displayed as a flex container.",
                    "Example: `display: block;` makes an element a block-level element.",
                    "Example: `display: inline;` makes an element inline.",
                    "Example: `display: flex;` turns an element into a flex container."
                ]
            },
        ]
    },
    {
        head: "CSS Positioning",
        Topics: [
            {
                heading: "CSS Positioning",
                link: "#",
                content: "CSS positioning allows you to position an element in a particular spot on a web page.",
                ulItems: [
                    "static: Default value. Elements are positioned according to the normal flow of the document.",
                    "relative: Elements are positioned relative to their normal position.",
                    "absolute: Elements are positioned relative to the nearest positioned ancestor.",
                    "fixed: Elements are positioned relative to the browser window.",
                    "sticky: Elements are positioned based on the user's scroll position.",
                    "Example: `position: absolute; top: 10px; left: 20px;` positions an element 10px from the top and 20px from the left of its containing block.",
                    "Example: `position: fixed; bottom: 0; right: 0;` fixes an element to the bottom-right of the viewport.",
                    "Example: `position: relative; top: 20px;` moves an element 20px down from its original position."
                ]
            },
        ]
    },
    {
        head: "CSS Overflow",
        Topics: [
            {
                heading: "CSS Overflow",
                link: "#",
                content: "The overflow property specifies what should happen if content overflows an element's box.",
                ulItems: [
                    "visible: Default value. Content is not clipped and will be rendered outside the element's box.",
                    "hidden: Content is clipped and will not be visible outside the element's box.",
                    "scroll: Content is clipped, but a scrollbar is added to see the rest of the content.",
                    "auto: Content is clipped, and a scrollbar is added only if necessary.",
                    "overflow-x, overflow-y: Control overflow behavior on the horizontal or vertical axis.",
                    "Example: `overflow: hidden;` hides content that overflows the element's box.",
                    "Example: `overflow: scroll;` adds scrollbars to view overflowing content.",
                    "Example: `overflow-x: auto;` adds a horizontal scrollbar only if needed."
                ]
            },
        ]
    },
    {
        head: "CSS Float and Clear",
        Topics: [
            {
                heading: "CSS Float and Clear",
                link: "#",
                content: "The float property is used for positioning and formatting content. The clear property is used to control the behavior of floating elements.",
                ulItems: [
                    "float: left, right, none.",
                    "clear: left, right, both, none.",
                    "float: Allows text and inline elements to wrap around a floated element.",
                    "clear: Controls the behavior of elements that should not wrap around floated elements.",
                    "Example: `float: left;` makes an element float to the left.",
                    "Example: `clear: both;` ensures an element will not be next to any floated elements.",
                    "Example: `float: right;` makes an element float to the right, allowing text to wrap around it."
                ]
            },
        ]
    },
    {
        head: "CSS Flexbox",
        Topics: [
            {
                heading: "CSS Flexbox",
                link: "#",
                content: "Flexbox is a one-dimensional layout method for laying out items in rows or columns.",
                ulItems: [
                    "display: flex: Defines a flex container.",
                    "flex-direction: Defines the direction of the main axis (row, row-reverse, column, column-reverse).",
                    "justify-content: Aligns items along the main axis (flex-start, flex-end, center, space-between, space-around).",
                    "align-items: Aligns items along the cross axis (flex-start, flex-end, center, baseline, stretch).",
                    "flex-wrap: Defines whether items should wrap onto multiple lines (nowrap, wrap, wrap-reverse).",
                    "Example: `display: flex;` turns a container into a flex container.",
                    "Example: `flex-direction: column;` arranges items in a column.",
                    "Example: `justify-content: center;` centers items along the main axis."
                ]
            },
        ]
    },
    {
        head: "CSS Grid",
        Topics: [
            {
                heading: "CSS Grid",
                link: "#",
                content: "CSS Grid Layout is a two-dimensional layout system for the web.",
                ulItems: [
                    "display: grid: Defines a grid container.",
                    "grid-template-columns, grid-template-rows: Defines the columns and rows of the grid.",
                    "grid-gap: Sets the gaps between the rows and columns.",
                    "grid-column, grid-row: Defines how many columns or rows an item should span.",
                    "justify-items: Aligns items along the row axis (start, end, center, stretch).",
                    "align-items: Aligns items along the column axis (start, end, center, stretch).",
                    "Example: `display: grid;` sets an element as a grid container.",
                    "Example: `grid-template-columns: 1fr 2fr;` creates two columns with different widths.",
                    "Example: `grid-gap: 10px;` adds space between grid items."
                ]
            },
        ]
    },
    {
        head: "CSS Animations",
        Topics: [
            {
                heading: "CSS Animations",
                link: "#",
                content: "CSS animations make it possible to animate transitions from one CSS style configuration to another.",
                ulItems: [
                    "@keyframes: Defines an animation.",
                    "animation: A shorthand property for all the animation properties.",
                    "animation-name: Specifies the name of the @keyframes animation.",
                    "animation-duration: Specifies the duration of the animation.",
                    "animation-timing-function: Specifies the speed curve of the animation.",
                    "animation-delay: Specifies when the animation will start.",
                    "Example: `@keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }` defines a slide-in animation.",
                    "Example: `animation: slideIn 1s ease-out;` applies the slideIn animation with a duration of 1 second.",
                    "Example: `animation-delay: 2s;` delays the start of the animation by 2 seconds."
                ]
            },
        ]
    },
    {
        head: "CSS Transitions",
        Topics: [
            {
                heading: "CSS Transitions",
                link: "#",
                content: "CSS transitions allow you to change property values smoothly (over a given duration).",
                ulItems: [
                    "transition: A shorthand property for all the transition properties.",
                    "transition-property: Specifies the CSS property to be transitioned.",
                    "transition-duration: Specifies the duration of the transition.",
                    "transition-timing-function: Specifies the speed curve of the transition.",
                    "transition-delay: Specifies when the transition effect will start.",
                    "Example: `transition: background-color 0.3s ease;` changes the background color smoothly over 0.3 seconds.",
                    "Example: `transition-property: opacity; transition-duration: 1s;` transitions only the opacity property over 1 second.",
                    "Example: `transition-delay: 0.5s;` delays the start of the transition by 0.5 seconds."
                ]
            },
        ]
    },
    {
        head: "CSS Media Queries",
        Topics: [
            {
                heading: "CSS Media Queries",
                link: "#",
                content: "Media queries are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).",
                ulItems: [
                    "@media: Applies styles based on media features such as width, height, orientation, resolution.",
                    "min-width, max-width: Applies styles based on minimum and maximum width of the viewport.",
                    "min-height, max-height: Applies styles based on minimum and maximum height of the viewport.",
                    "orientation: Applies styles based on the orientation of the device (portrait, landscape).",
                    "Example: `@media (min-width: 600px) { /* styles */ }` applies styles for viewports wider than 600px.",
                    "Example: `@media (orientation: landscape) { /* styles */ }` applies styles for landscape-oriented devices.",
                    "Example: `@media print { /* styles */ }` applies styles specifically for print media."
                ]
            },
        ]
    },
    {
        head: "CSS Variables",
        Topics: [
            {
                heading: "CSS Variables",
                link: "#",
                content: "CSS variables (Custom Properties) are entities defined by CSS authors that contain specific values to be reused throughout a document.",
                ulItems: [
                    "Defining Variables: Using the -- syntax to define a variable.",
                    "Using Variables: Using the var() function to insert the value of a variable.",
                    "Variables can be defined globally or locally within a selector.",
                    "Variables can be used in combination with other CSS properties.",
                    "Example: `--main-color: #3498db;` defines a custom property named --main-color.",
                    "Example: `color: var(--main-color);` applies the value of --main-color to the text color.",
                    "Example: `--font-size: 16px; font-size: var(--font-size);` uses a variable for font size."
                ]
            },
        ]
    }
];

export default cssTopics;