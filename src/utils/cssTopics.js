const cssTopics = [
    {
        head: "Css Tutorial",
        headContent: "CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in HTML or XML. It allows you to separate content from presentation, enabling more flexible and efficient control over the layout, colors, fonts, and overall design of web pages. CSS uses selectors to target HTML elements and apply styles, and it employs a box model to manage the spacing and positioning of elements. With its cascading nature, multiple style sheets can be applied to a document, resolving conflicts based on specificity and source order, which is essential for responsive and consistent web design.",
        Topics: [
            {
                heading: "Why to Learn CSS?",
                link: "#",
                content: "JLearning CSS is crucial for web development as it provides control over the visual presentation of web pages, allowing for custom designs and styles. It separates content from presentation, making it easier to manage and update styles without altering the HTML structure. CSS enables responsive design, ensuring websites look good on all devices. It ensures consistency across multiple pages, improving user experience. Additionally, well-written CSS can enhance performance by reducing code complexity and load times. Overall, CSS is essential for creating visually appealing, efficient, and user-friendly websites.",
                ulItems: [
                    "CSS provides precise control over the appearance of web pages, enabling you to create visually appealing and professional designs. This includes the ability to style fonts, colors, layouts, and animations, enhancing the user experience and making the website more engaging.",
                    "CSS is essential for creating responsive websites that adapt to various screen sizes and devices. This ensures that your website looks good and functions well on desktops, tablets, and smartphones, providing a consistent and user-friendly experience across all platforms.",
                ],
            },
        ]
    },
    {
        head: "CSS Syntax",
        Topics: [
            {
                heading: "CSS Syntax",
                link: "#",
                content: "CSS syntax consists of a set of rules. Each rule contains a selector and a declaration block. The selector points to the HTML element to style, and the declaration block contains one or more declarations separated by semicolons.",
                ulItems: [
                    "Selector: Specifies the HTML element to style.",
                    "Declaration block: Contains one or more declarations separated by semicolons.",
                    "Property: The name of the style property you want to change.",
                    "Value: The value of the property."
                ],
                Example: [
                    "`h1 { color: blue; font-size: 12px; }` - Styles all `<h1>` elements with blue color and 12px font size."
                ]
            }
        ]
    },
    {
        head: "CSS Selectors",
        Topics: [
            {
                heading: "CSS Selectors",
                link: "#",
                content: "CSS selectors are used to select the HTML element(s) you want to style. There are several types of selectors including element, class, ID, and attribute selectors.",
                ulItems: [
                    "Element Selector: Selects all elements of a given type.",
                    "Class Selector: Selects all elements with a specific class.",
                    "ID Selector: Selects a single element with a specific ID.",
                    "Attribute Selector: Selects elements based on an attribute or attribute value."
                ],
                Example: [
                    "`p { color: red; }` - Selects all `<p>` elements and sets their text color to red.",
                    "`.class { font-size: 20px; }` - Selects all elements with class `class` and sets their font size to 20px.",
                    "`#id { margin: 10px; }` - Selects the element with ID `id` and sets its margin to 10px.",
                    "`[type='text'] { border: 1px solid black; }` - Selects all input elements with type `text` and sets their border to 1px solid black."
                ]
            }
        ]
    },
    {
        head: "CSS How To",
        Topics: [
            {
                heading: "CSS How To",
                link: "#",
                content: "CSS can be applied to HTML documents in three ways: inline, internal, and external.",
                ulItems: [
                    "Inline CSS: Uses the `style` attribute within HTML elements.",
                    "Internal CSS: Uses a `<style>` element within the `<head>` section of an HTML document.",
                    "External CSS: Uses an external stylesheet file linked with the `<link>` element."
                ],
                Example: [
                    "`<h1 style='color: blue;'>This is a heading</h1>` - An example of inline CSS.",
                    "`<style> h1 { color: blue; } </style>` - An example of internal CSS.",
                    "`<link rel='stylesheet' type='text/css' href='styles.css'>` - An example of external CSS."
                ]
            }
        ]
    },
    {
        head: "CSS Comments",
        Topics: [
            {
                heading: "CSS Comments",
                link: "#",
                content: "CSS comments are used to explain your code, and may help you when you edit the source code at a later date. Comments are ignored by browsers.",
                ulItems: [
                    "Syntax: Comments are added with `/* comment */`."
                ],
                Example: [
                    "`/* This is a single-line comment */`",
                    "`/* This is a multi-line comment \n that spans over multiple lines */`"
                ]
            }
        ]
    },
    {
        head: "CSS Colors",
        Topics: [
            {
                heading: "CSS Colors",
                link: "#",
                content: "CSS colors are specified using predefined color names, HEX, RGB, RGBA, HSL, and HSLA values.",
                ulItems: [
                    "Color Names: Common colors are predefined in CSS, such as `red`, `blue`, `green`.",
                    "HEX: A hexadecimal color value is specified with a `#` followed by a 6-digit code.",
                    "RGB: An RGB color value is specified with `rgb(red, green, blue)`.",
                    "RGBA: An RGBA color value is an extension of RGB with an alpha channel (opacity).",
                    "HSL: An HSL color value is specified with `hsl(hue, saturation, lightness)`.",
                    "HSLA: An HSLA color value is an extension of HSL with an alpha channel (opacity)."
                ],
                Example: [
                    "`color: red;` - Uses a color name.",
                    "`color: #ff0000;` - Uses a HEX value.",
                    "`color: rgb(255, 0, 0);` - Uses an RGB value.",
                    "`color: rgba(255, 0, 0, 0.5);` - Uses an RGBA value.",
                    "`color: hsl(0, 100%, 50%);` - Uses an HSL value.",
                    "`color: hsla(0, 100%, 50%, 0.5);` - Uses an HSLA value."
                ]
            }
        ]
    },
    {
        head: "CSS Backgrounds",
        Topics: [
            {
                heading: "CSS Backgrounds",
                link: "#",
                content: "CSS background properties are used to define the background effects for elements.",
                ulItems: [
                    "background-color: Sets the background color of an element.",
                    "background-image: Sets the background image of an element.",
                    "background-repeat: Sets if/how a background image will be repeated.",
                    "background-attachment: Sets whether a background image is fixed or scrolls with the rest of the page.",
                    "background-position: Sets the starting position of a background image."
                ],
                Example: [
                    "`background-color: lightblue;` - Sets the background color to light blue.",
                    "`background-image: url('image.jpg');` - Sets the background image to `image.jpg`.",
                    "`background-repeat: no-repeat;` - Prevents the background image from repeating.",
                    "`background-attachment: fixed;` - Fixes the background image in place.",
                    "`background-position: center;` - Centers the background image."
                ]
            }
        ]
    },
    {
        head: "CSS Borders",
        Topics: [
            {
                heading: "CSS Borders",
                link: "#",
                content: "CSS border properties are used to define the border around an HTML element.",
                ulItems: [
                    "border: Sets all the border properties in one declaration.",
                    "border-width: Sets the width of the border.",
                    "border-style: Sets the style of the border.",
                    "border-color: Sets the color of the border."
                ],
                Example: [
                    "`border: 1px solid black;` - Sets a black solid border of 1 pixel width.",
                    "`border-width: 2px;` - Sets the border width to 2 pixels.",
                    "`border-style: dashed;` - Sets the border style to dashed.",
                    "`border-color: red;` - Sets the border color to red."
                ]
            }
        ]
    },
    {
        head: "CSS Margins",
        Topics: [
            {
                heading: "CSS Margins",
                link: "#",
                content: "CSS margin properties are used to create space around elements, outside of any defined borders.",
                ulItems: [
                    "margin: Sets all the margin properties in one declaration.",
                    "margin-top: Sets the top margin of an element.",
                    "margin-right: Sets the right margin of an element.",
                    "margin-bottom: Sets the bottom margin of an element.",
                    "margin-left: Sets the left margin of an element."
                ],
                Example: [
                    "`margin: 20px;` - Sets a 20-pixel margin on all four sides of an element.",
                    "`margin-top: 10px;` - Sets the top margin to 10 pixels.",
                    "`margin-right: 15px;` - Sets the right margin to 15 pixels.",
                    "`margin-bottom: 20px;` - Sets the bottom margin to 20 pixels.",
                    "`margin-left: 25px;` - Sets the left margin to 25 pixels."
                ]
            }
        ]
    },
    {
        head: "CSS Padding",
        Topics: [
            {
                heading: "CSS Padding",
                link: "#",
                content: "CSS padding properties are used to generate space around an element's content, inside of any defined borders.",
                ulItems: [
                    "padding: Sets all the padding properties in one declaration.",
                    "padding-top: Sets the top padding of an element.",
                    "padding-right: Sets the right padding of an element.",
                    "padding-bottom: Sets the bottom padding of an element.",
                    "padding-left: Sets the left padding of an element."
                ],
                Example: [
                    "`padding: 20px;` - Sets a 20-pixel padding on all four sides of an element.",
                    "`padding-top: 10px;` - Sets the top padding to 10 pixels.",
                    "`padding-right: 15px;` - Sets the right padding to 15 pixels.",
                    "`padding-bottom: 20px;` - Sets the bottom padding to 20 pixels.",
                    "`padding-left: 25px;` - Sets the left padding to 25 pixels."
                ]
            }
        ]
    },
    {
        head: "CSS Height and Width",
        Topics: [
            {
                heading: "CSS Height and Width",
                link: "#",
                content: "CSS height and width properties are used to set the height and width of an element.",
                ulItems: [
                    "height: Sets the height of an element.",
                    "width: Sets the width of an element.",
                    "max-height: Sets the maximum height of an element.",
                    "max-width: Sets the maximum width of an element.",
                    "min-height: Sets the minimum height of an element.",
                    "min-width: Sets the minimum width of an element."
                ],
                Example: [
                    "`height: 100px;` - Sets the height to 100 pixels.",
                    "`width: 50%;` - Sets the width to 50% of the containing element.",
                    "`max-height: 200px;` - Sets the maximum height to 200 pixels.",
                    "`max-width: 100%;` - Sets the maximum width to 100% of the containing element.",
                    "`min-height: 50px;` - Sets the minimum height to 50 pixels.",
                    "`min-width: 20px;` - Sets the minimum width to 20 pixels."
                ]
            }
        ]
    },
    {
        head: "CSS Fonts",
        Topics: [
            {
                heading: "CSS Fonts",
                link: "#",
                content: "CSS font properties define the font family, size, weight, and style of the text.",
                ulItems: [
                    "font-family: Specifies the font family for the text.",
                    "font-size: Specifies the size of the font.",
                    "font-weight: Specifies the weight of the font.",
                    "font-style: Specifies the style of the font.",
                    "font-variant: Specifies whether or not a text should be displayed in a small-caps font."
                ],
                Example: [
                    "`font-family: 'Arial', sans-serif;` - Sets the font family to Arial, with a fallback to sans-serif.",
                    "`font-size: 16px;` - Sets the font size to 16 pixels.",
                    "`font-weight: bold;` - Sets the font weight to bold.",
                    "`font-style: italic;` - Sets the font style to italic.",
                    "`font-variant: small-caps;` - Sets the font variant to small caps."
                ]
            }
        ]
    },
    {
        head: "CSS Text",
        Topics: [
            {
                heading: "CSS Text",
                link: "#",
                content: "CSS text properties are used to format text. These properties control the appearance of text, such as alignment, decoration, transformation, and spacing.",
                ulItems: [
                    "color: Sets the color of the text.",
                    "text-align: Sets the horizontal alignment of the text.",
                    "text-decoration: Adds decoration to the text, such as underlining.",
                    "text-transform: Controls the capitalization of text.",
                    "line-height: Sets the height of each line of text.",
                    "letter-spacing: Sets the space between characters in a text.",
                    "word-spacing: Sets the space between words in a text."
                ],
                Example: [
                    "`color: blue;` - Sets the text color to blue.",
                    "`text-align: center;` - Centers the text.",
                    "`text-decoration: underline;` - Underlines the text.",
                    "`text-transform: uppercase;` - Transforms the text to uppercase.",
                    "`line-height: 1.5;` - Sets the line height to 1.5 times the font size.",
                    "`letter-spacing: 2px;` - Sets the space between characters to 2 pixels.",
                    "`word-spacing: 5px;` - Sets the space between words to 5 pixels."
                ]
            }
        ]
    },
    {
        head: "CSS Links",
        Topics: [
            {
                heading: "CSS Links",
                link: "#",
                content: "CSS link properties are used to style links. Links can be styled to change color when hovered over or visited.",
                ulItems: [
                    "a:link: Selects unvisited links.",
                    "a:visited: Selects visited links.",
                    "a:hover: Selects links when the user mouses over them.",
                    "a:active: Selects the active link."
                ],
                Example: [
                    "`a:link { color: blue; }` - Sets the color of unvisited links to blue.",
                    "`a:visited { color: purple; }` - Sets the color of visited links to purple.",
                    "`a:hover { color: red; }` - Sets the color of links when hovered over to red.",
                    "`a:active { color: green; }` - Sets the color of the active link to green."
                ]
            }
        ]
    },
    {
        head: "CSS Lists",
        Topics: [
            {
                heading: "CSS Lists",
                link: "#",
                content: "CSS list properties are used to style lists, including setting list markers and controlling the appearance of list items.",
                ulItems: [
                    "list-style-type: Specifies the type of list item marker.",
                    "list-style-image: Specifies an image as the list item marker.",
                    "list-style-position: Specifies the position of list item markers.",
                    "list-style: Sets all the list properties in one declaration."
                ],
                Example: [
                    "`list-style-type: disc;` - Sets the list item marker to a bullet.",
                    "`list-style-type: none;` - Removes the list item markers.",
                    "`list-style-image: url('marker.png');` - Sets an image as the list item marker.",
                    "`list-style-position: inside;` - Places the list item marker inside the list item.",
                    "`list-style: square inside;` - Sets the list item marker to a square and places it inside the list item."
                ]
            }
        ]
    },
    {
        head: "CSS Tables",
        Topics: [
            {
                heading: "CSS Tables",
                link: "#",
                content: "CSS table properties are used to style HTML tables. These properties control the appearance of table elements such as borders, padding, and alignment.",
                ulItems: [
                    "border-collapse: Specifies whether the table borders should be collapsed into a single border or separated.",
                    "border-spacing: Specifies the space between the borders of adjacent cells.",
                    "caption-side: Specifies the position of the table caption.",
                    "empty-cells: Specifies whether or not to display borders and background on empty cells.",
                    "table-layout: Specifies the layout algorithm to be used for the table."
                ],
                Example: [
                    "`border-collapse: collapse;` - Collapses the table borders into a single border.",
                    "`border-spacing: 10px;` - Sets the space between table cell borders to 10 pixels.",
                    "`caption-side: bottom;` - Positions the table caption at the bottom of the table.",
                    "`empty-cells: hide;` - Hides borders and background on empty cells.",
                    "`table-layout: fixed;` - Uses a fixed table layout algorithm."
                ]
            }
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
    },
    {
        head: "CSS Box Model",
        Topics: [
            {
                heading: "CSS Box Model",
                link: "#",
                content: "The CSS box model is a fundamental concept that describes the rectangular boxes generated for elements in the document tree. It consists of margins, borders, padding, and the actual content.",
                ulItems: [
                    "Content: The actual content of the box, where text and images appear.",
                    "Padding: Clears an area around the content. The padding is transparent.",
                    "Border: A border that goes around the padding (if any) and content.",
                    "Margin: Clears an area outside the border. The margin is transparent."
                ],
                Example: [
                    "`width: 300px;` - Sets the width of the content area.",
                    "`padding: 20px;` - Sets the padding around the content to 20 pixels.",
                    "`border: 5px solid black;` - Sets a 5-pixel solid black border.",
                    "`margin: 10px;` - Sets a 10-pixel margin outside the border."
                ]
            }
        ]
    },
    {
        head: "CSS Outline",
        Topics: [
            {
                heading: "CSS Outline",
                link: "#",
                content: "CSS outline properties are used to draw a line around an element, outside the border. Outlines do not take up space and may be non-rectangular.",
                ulItems: [
                    "outline: Sets all the outline properties in one declaration.",
                    "outline-width: Sets the width of the outline.",
                    "outline-style: Sets the style of the outline.",
                    "outline-color: Sets the color of the outline.",
                    "outline-offset: Sets the space between an outline and the edge or border of an element."
                ],
                Example: [
                    "`outline: 2px solid red;` - Sets a 2-pixel solid red outline.",
                    "`outline-width: thick;` - Sets the outline width to thick.",
                    "`outline-style: dashed;` - Sets the outline style to dashed.",
                    "`outline-color: blue;` - Sets the outline color to blue.",
                    "`outline-offset: 10px;` - Sets the space between the outline and the border to 10 pixels."
                ]
            }
        ]
    },
    {
        head: "CSS Units",
        Topics: [
            {
                heading: "CSS Units",
                link: "#",
                content: "CSS units define the measurement of length. They can be absolute units or relative units.",
                ulItems: [
                    "px: Pixels (absolute unit).",
                    "em: Relative to the font-size of the element (relative unit).",
                    "rem: Relative to the font-size of the root element (relative unit).",
                    "%: Relative to the parent element (relative unit).",
                    "vh: Relative to 1% of the viewport's height (relative unit).",
                    "vw: Relative to 1% of the viewport's width (relative unit)."
                ],
                Example: [
                    "`width: 100px;` - Sets the width to 100 pixels.",
                    "`font-size: 2em;` - Sets the font size to 2 times the size of the current font.",
                    "`margin: 10%;` - Sets the margin to 10% of the parent element's width.",
                    "`height: 50vh;` - Sets the height to 50% of the viewport's height."
                ]
            }
        ]
    },
    {
        head: "CSS Positioning",
        Topics: [
            {
                heading: "CSS Positioning",
                link: "#",
                content: "CSS positioning properties are used to position an element on the web page.",
                ulItems: [
                    "position: Specifies the type of positioning method used for an element (static, relative, absolute, fixed, sticky).",
                    "top: Sets the top edge position of an element.",
                    "right: Sets the right edge position of an element.",
                    "bottom: Sets the bottom edge position of an element.",
                    "left: Sets the left edge position of an element.",
                    "z-index: Sets the stack order of an element."
                ],
                Example: [
                    "`position: absolute;` - Positions the element absolutely relative to its containing element.",
                    "`top: 50px;` - Sets the top edge position to 50 pixels from the top.",
                    "`right: 20px;` - Sets the right edge position to 20 pixels from the right.",
                    "`bottom: 10px;` - Sets the bottom edge position to 10 pixels from the bottom.",
                    "`left: 0;` - Sets the left edge position to 0 (no offset).",
                    "`z-index: 10;` - Sets the stack order to 10."
                ]
            }
        ]
    },
    {
        head: "CSS Overflow",
        Topics: [
            {
                heading: "CSS Overflow",
                link: "#",
                content: "CSS overflow properties are used to specify what happens if content overflows an element's box.",
                ulItems: [
                    "overflow: Specifies what happens if content overflows an element's box (visible, hidden, scroll, auto).",
                    "overflow-x: Specifies what happens if content overflows the left and right edges of an element's box.",
                    "overflow-y: Specifies what happens if content overflows the top and bottom edges of an element's box."
                ],
                Example: [
                    "`overflow: hidden;` - Hides the overflowing content.",
                    "`overflow-x: scroll;` - Adds a horizontal scrollbar if needed.",
                    "`overflow-y: auto;` - Adds a vertical scrollbar only if needed."
                ]
            }
        ]
    },
    {
        head: "CSS Pseudo-classes",
        Topics: [
            {
                heading: "CSS Pseudo-classes",
                link: "#",
                content: "CSS pseudo-classes are used to define the special state of an element.",
                ulItems: [
                    ":hover: Applies when the user designates an element (with some pointing device), but does not activate it.",
                    ":focus: Applies when an element has received focus.",
                    ":first-child: Applies to the first child of an element.",
                    ":last-child: Applies to the last child of an element.",
                    ":nth-child(n): Applies to the nth child of an element."
                ],
                Example: [
                    "`a:hover { color: red; }` - Changes the color of a link to red when the user hovers over it.",
                    "`input:focus { border-color: blue; }` - Changes the border color of an input field to blue when it receives focus.",
                    "`p:first-child { font-weight: bold; }` - Makes the first paragraph child bold.",
                    "`li:last-child { color: green; }` - Changes the color of the last list item to green.",
                    "`tr:nth-child(even) { background-color: #f2f2f2; }` - Sets the background color of even table rows."
                ]
            }
        ]
    },
    {
        head: "CSS Pseudo-elements",
        Topics: [
            {
                heading: "CSS Pseudo-elements",
                link: "#",
                content: "CSS pseudo-elements are used to style specified parts of an element.",
                ulItems: [
                    "::after: Inserts content after an element's content.",
                    "::before: Inserts content before an element's content.",
                    "::first-letter: Styles the first letter of an element.",
                    "::first-line: Styles the first line of an element.",
                    "::selection: Styles the portion of an element that is selected by a user."
                ],
                Example: [
                    "`p::after { content: ' (Read more)'; }` - Inserts ' (Read more)' after the content of each paragraph.",
                    "`h1::before { content: '*'; }` - Inserts '*' before the content of each heading 1.",
                    "`p::first-letter { font-size: 2em; }` - Styles the first letter of each paragraph with a font size of 2em.",
                    "`p::first-line { color: red; }` - Styles the first line of each paragraph with red color.",
                    "`::selection { background-color: yellow; }` - Sets the background color of selected text to yellow."
                ]
            }
        ]
    },
    {
        head: "CSS Media Queries",
        Topics: [
            {
                heading: "CSS Media Queries",
                link: "#",
                content: "CSS media queries are used to apply different styles for different media types/devices.",
                ulItems: [
                    "@media only screen and (max-width: 600px): Applies styles only if the viewport width is 600 pixels or less.",
                    "@media print: Applies styles only when the page is printed.",
                    "@media screen and (min-width: 768px): Applies styles if the viewport width is 768 pixels or more."
                ],
                Example: [
                    "`@media only screen and (max-width: 600px) { body { background-color: lightblue; } }` - Changes the background color to light blue if the viewport width is 600 pixels or less.",
                    "`@media print { body { font-size: 12pt; } }` - Sets the font size to 12pt when the page is printed.",
                    "`@media screen and (min-width: 768px) { body { font-size: 18px; } }` - Sets the font size to 18 pixels if the viewport width is 768 pixels or more."
                ]
            }
        ]
    },
    {
        head: "CSS Flexbox",
        Topics: [
            {
                heading: "CSS Flexbox",
                link: "#",
                content: "CSS Flexbox is a layout model that allows elements to align and distribute space within a container.",
                ulItems: [
                    "display: flex: Turns on flexbox layout.",
                    "flex-direction: Defines the direction of the flexible items (row, row-reverse, column, column-reverse).",
                    "justify-content: Aligns the flexible container's items when the items do not use all available space (flex-start, flex-end, center, space-between, space-around).",
                    "align-items: Aligns the flexible container's items (stretch, flex-start, flex-end, center, baseline).",
                    "flex-wrap: Specifies whether the flex items should wrap or not (nowrap, wrap, wrap-reverse)."
                ],
                Example: [
                    "`display: flex;` - Turns on flexbox layout.",
                    "`flex-direction: row;` - Aligns the flexible items in a row.",
                    "`justify-content: center;` - Centers the flexible items within the container.",
                    "`align-items: stretch;` - Stretches the flexible items to fill the container.",
                    "`flex-wrap: wrap;` - Wraps the flexible items within the container."
                ]
            }
        ]
    },
    {
        head: "CSS Grid",
        Topics: [
            {
                heading: "CSS Grid",
                link: "#",
                content: "CSS Grid is a layout system that allows you to design web pages using a grid-based approach.",
                ulItems: [
                    "display: grid: Turns on grid layout.",
                    "grid-template-columns: Defines the columns of the grid.",
                    "grid-template-rows: Defines the rows of the grid.",
                    "grid-gap: Sets the gap between the grid items.",
                    "grid-column: Specifies the size and location of a grid item within the grid columns.",
                    "grid-row: Specifies the size and location of a grid item within the grid rows."
                ],
                Example: [
                    "`display: grid;` - Turns on grid layout.",
                    "`grid-template-columns: 1fr 2fr;` - Defines two columns, one taking up 1 fraction of the space, the other 2 fractions.",
                    "`grid-template-rows: 100px auto;` - Defines two rows, the first 100 pixels tall, the second taking up the remaining space.",
                    "`grid-gap: 10px;` - Sets a 10-pixel gap between grid items.",
                    "`grid-column: 1 / 3;` - Makes the grid item span from the first to the third column.",
                    "`grid-row: 2 / span 2;` - Makes the grid item span 2 rows, starting from the second row."
                ]
            }
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
                    "flex: The element is displayed as a flex container."
                ],
                Example: [
                    "`display: block;` makes an element a block-level element.",
                    "`display: inline;` makes an element inline.",
                    "`display: flex;` turns an element into a flex container."
                ]
            }
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
                    "sticky: Elements are positioned based on the user's scroll position."
                ],
                Example: [
                    "`position: absolute; top: 10px; left: 20px;` positions an element 10px from the top and 20px from the left of its containing block.",
                    "`position: fixed; bottom: 0; right: 0;` fixes an element to the bottom-right of the viewport.",
                    "`position: relative; top: 20px;` moves an element 20px down from its original position."
                ]
            }
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
                    "overflow-x, overflow-y: Control overflow behavior on the horizontal or vertical axis."
                ],
                Example: [
                    "`overflow: hidden;` hides content that overflows the element's box.",
                    "`overflow: scroll;` adds scrollbars to view overflowing content.",
                    "`overflow-x: auto;` adds a horizontal scrollbar only if needed."
                ]
            }
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
                    "clear: Controls the behavior of elements that should not wrap around floated elements."
                ],
                Example: [
                    "`float: left;` makes an element float to the left.",
                    "`clear: both;` ensures an element will not be next to any floated elements.",
                    "`float: right;` makes an element float to the right, allowing text to wrap around it."
                ]
            }
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
                    "align-items: Aligns items along the column axis (start, end, center, stretch)."
                ],
                Example: [
                    "`display: grid;` sets an element as a grid container.",
                    "`grid-template-columns: 1fr 2fr;` creates two columns with different widths.",
                    "`grid-gap: 10px;` adds space between grid items."
                ]
            }
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
                    "animation-delay: Specifies when the animation will start."
                ],
                Example: [
                    "`@keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }` defines a slide-in animation.",
                    "`animation: slideIn 1s ease-out;` applies the slideIn animation with a duration of 1 second.",
                    "`animation-delay: 2s;` delays the start of the animation by 2 seconds."
                ]
            }
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
                    "transition-delay: Specifies when the transition effect will start."
                ],
                Example: [
                    "`transition: background-color 0.3s ease;` changes the background color smoothly over 0.3 seconds.",
                    "`transition-property: opacity; transition-duration: 1s;` transitions only the opacity property over 1 second.",
                    "`transition-delay: 0.5s;` delays the start of the transition by 0.5 seconds."
                ]
            }
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
                    "orientation: Applies styles based on the orientation of the device (portrait, landscape)."
                ],
                Example: [
                    "`@media (min-width: 600px) { /* styles */ }` applies styles for viewports wider than 600px.",
                    "`@media (orientation: landscape) { /* styles */ }` applies styles for landscape-oriented devices.",
                    "`@media print { /* styles */ }` applies styles specifically for print media."
                ]
            }
        ]
    },
    {
        Example: "CSS Rounded Corners",
        Topics: [
            {
                heading: "CSS Rounded Corners",
                link: "#",
                content: "CSS rounded corners are used to create rounded borders for elements.",
                ulItems: [
                    "border-radius: Defines the radius of an element's corners.",
                    "Can be specified in lengths (px, em) or percentages.",
                    "Can define all four corners, or each corner individually."
                ],
                Example: [
                    "`border-radius: 10px;` applies a 10px radius to all corners.",
                    "`border-top-left-radius: 20px;` applies a 20px radius to the top-left corner.",
                    "`border-radius: 50%;` creates a circular shape for square elements."
                ]
            }
        ]
    },
    {
        Example: "CSS Border Images",
        Topics: [
            {
                heading: "CSS Border Images",
                link: "#",
                content: "CSS border images allow you to use an image as a border around an element.",
                ulItems: [
                    "border-image-source: Specifies the image to be used as the border.",
                    "border-image-slice: Specifies how to slice the image.",
                    "border-image-width: Specifies the width of the border image.",
                    "border-image-outset: Specifies the amount by which the border image area extends beyond the border box.",
                    "border-image-repeat: Specifies how the border image should be repeated."
                ],
                Example: [
                    "`border-image-source: url(border.png);` uses 'border.png' as the border image.",
                    "`border-image-slice: 30;` slices the border image 30 units from the edge.",
                    "`border-image-width: 10px;` sets the width of the border image to 10px."
                ]
            }
        ]
    },
    {
        Example: "CSS Backgrounds",
        Topics: [
            {
                heading: "CSS Backgrounds",
                link: "#",
                content: "CSS backgrounds are used to set the background of an element.",
                ulItems: [
                    "background-color: Sets the background color.",
                    "background-image: Sets the background image.",
                    "background-repeat: Defines how background images are repeated.",
                    "background-position: Defines the starting position of a background image.",
                    "background-size: Specifies the size of the background image.",
                    "background-attachment: Defines whether the background image is fixed or scrolls with the page."
                ],
                Example: [
                    "`background-color: #f0f0f0;` sets the background color to #f0f0f0.",
                    "`background-image: url('background.jpg');` sets 'background.jpg' as the background image.",
                    "`background-repeat: no-repeat;` prevents the background image from repeating."
                ]
            }
        ]
    },
    {
        Example: "CSS Colors",
        Topics: [
            {
                heading: "CSS Colors",
                link: "#",
                content: "CSS colors are used to specify the color of elements.",
                ulItems: [
                    "color: Sets the color of text.",
                    "background-color: Sets the background color of an element.",
                    "border-color: Sets the color of an element's border.",
                    "Can use color names, hex values, RGB, RGBA, HSL, HSLA values."
                ],
                Example: [
                    "`color: red;` sets the text color to red.",
                    "`background-color: #00ff00;` sets the background color to green.",
                    "`border-color: rgb(0,0,255);` sets the border color to blue."
                ]
            }
        ]
    },
    {
        Example: "CSS Color Keywords",
        Topics: [
            {
                heading: "CSS Color Keywords",
                link: "#",
                content: "CSS color keywords are predefined colors that can be used in CSS.",
                ulItems: [
                    "Examples include: 'red', 'blue', 'green', 'yellow', 'pink', 'purple', etc.",
                    "Can be used for text, background, and border colors."
                ],
                Example: [
                    "`color: blue;` sets the text color to blue.",
                    "`background-color: yellow;` sets the background color to yellow.",
                    "`border-color: purple;` sets the border color to purple."
                ]
            }
        ]
    },
    {
        Example: "CSS Gradients",
        Topics: [
            {
                heading: "CSS Gradients",
                link: "#",
                content: "CSS gradients allow you to display smooth transitions between two or more specified colors.",
                ulItems: [
                    "linear-gradient: Creates a linear gradient.",
                    "radial-gradient: Creates a radial gradient.",
                    "repeating-linear-gradient: Creates a repeating linear gradient.",
                    "repeating-radial-gradient: Creates a repeating radial gradient."
                ],
                Example: [
                    "`background: linear-gradient(to right, red, yellow);` creates a gradient from red to yellow, horizontally.",
                    "`background: radial-gradient(circle, red, yellow);` creates a radial gradient from red to yellow, in a circle.",
                    "`background: repeating-linear-gradient(45deg, red, yellow 10%, green 20%);` creates a repeating gradient at a 45-degree angle."
                ]
            }
        ]
    },
    {
        Example: "CSS Shadows",
        Topics: [
            {
                heading: "CSS Shadows",
                link: "#",
                content: "CSS shadows allow you to add shadow effects to elements.",
                ulItems: [
                    "box-shadow: Adds shadow to an element's box.",
                    "text-shadow: Adds shadow to text.",
                    "Can specify horizontal and vertical offsets, blur radius, and color."
                ],
                Example: [
                    "`box-shadow: 5px 5px 10px #888888;` adds a shadow with 5px horizontal and vertical offset, 10px blur, and gray color.",
                    "`text-shadow: 2px 2px 5px red;` adds a shadow to text with 2px horizontal and vertical offset, 5px blur, and red color."
                ]
            }
        ]
    },
    {
        Example: "CSS Text Effects",
        Topics: [
            {
                heading: "CSS Text Effects",
                link: "#",
                content: "CSS text effects are used to add special effects to text.",
                ulItems: [
                    "text-shadow: Adds shadow to text.",
                    "text-transform: Controls the capitalization of text.",
                    "text-decoration: Adds decoration to text (underline, overline, line-through).",
                    "letter-spacing: Increases or decreases the space between characters."
                ],
                Example: [
                    "`text-shadow: 2px 2px 5px blue;` adds a blue shadow to text.",
                    "`text-transform: uppercase;` converts text to uppercase.",
                    "`text-decoration: underline;` underlines the text."
                ]
            }
        ]
    },
    {
        Example: "CSS Web Fonts",
        Topics: [
            {
                heading: "CSS Web Fonts",
                link: "#",
                content: "CSS web fonts allow you to use fonts that are not installed on the user's computer.",
                ulItems: [
                    "@font-face: Defines a custom font.",
                    "font-family: Specifies the font family for text.",
                    "src: Specifies the location of the font file."
                ],
                Example: [
                    "`@font-face { font-family: 'MyFont'; src: url('myfont.woff'); }` defines a custom font.",
                    "`font-family: 'MyFont', sans-serif;` applies 'MyFont' and falls back to sans-serif."
                ]
            }
        ]
    },
    {
        Example: "CSS 2D Transforms",
        Topics: [
            {
                heading: "CSS 2D Transforms",
                link: "#",
                content: "CSS 2D transforms allow you to rotate, scale, move, or skew an element.",
                ulItems: [
                    "transform: Applies a 2D transformation to an element.",
                    "rotate: Rotates an element.",
                    "scale: Scales an element up or down.",
                    "translate: Moves an element from its current position.",
                    "skew: Skews an element along the X and Y axes."
                ],
                Example: [
                    "`transform: rotate(45deg);` rotates an element 45 degrees.",
                    "`transform: scale(1.5);` scales an element to 1.5 times its original size.",
                    "`transform: translate(50px, 100px);` moves an element 50px to the right and 100px down."
                ]
            }
        ]
    }
]

export default cssTopics;

