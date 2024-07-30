const tailwindTopics = [
    {
        head: "Introduction to Tailwind CSS",
        headContent: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Unlike traditional CSS frameworks that come with predefined components, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.\n\nTailwind CSS emphasizes a utility-first approach to styling, allowing developers to apply styles directly in their markup, resulting in a highly productive development workflow. It also supports responsive design with utility variants for different screen sizes, making it a powerful tool for modern web development.",
        Topics: [
            {
                heading: "Utility-First Approach",
                link: "#",
                content: "Tailwind CSS is designed to be utility-first, meaning it provides low-level utility classes that let you build custom designs without writing custom CSS. Understanding this approach is crucial for effective use.",
                ulItems: [
                    "Advantages of utility-first CSS.",
                    "Comparison with traditional CSS frameworks.",
                    "How to apply utility classes."
                ],
                Example: [
                    "`<div class='text-center font-bold'>Centered Bold Text</div>`"
                ]
            }
        ],
    },
    {
        heading: "Responsive Design",
        link: "#",
        content: "Tailwind makes it easy to create responsive designs by using responsive utility variants, such as sm:, md:, lg:, xl:, and 2xl:.",
        ulItems: [
            "Using responsive utility classes.",
            "Media queries in Tailwind CSS.",
            "Building responsive layouts."
        ],
        Example: [
            "`<div class='md:text-lg text-sm'>Responsive Text Size</div>`"
        ]
    },
    {
        heading: "Flexbox and Grid",
        link: "#",
        content: "These are essential for creating complex layouts. Tailwind offers comprehensive utilities for both Flexbox and Grid.",
        ulItems: [
            "Flexbox utilities.",
            "Grid utilities.",
            "Creating complex layouts with Flexbox and Grid."
        ],
        Example: [
            "`<div class='flex justify-center items-center'>Centered Flexbox</div>`"
        ]
    },
    {
        heading: "Spacing",
        link: "#",
        content: "Managing margins and padding is fundamental. Tailwind provides utilities for adjusting spacing, which is critical for layout design.",
        ulItems: [
            "Margin utilities.",
            "Padding utilities.",
            "Spacing scale and customization."
        ],
        Example: [
            "`<div class='m-4 p-2'>Margin and Padding</div>`"
        ]
    },
    {
        heading: "Typography",
        link: "#",
        content: "Tailwind includes utilities for setting font sizes, weights, line heights, letter spacing, and more, allowing for precise typographic control.",
        ulItems: [
            "Font size utilities.",
            "Font weight utilities.",
            "Line height and letter spacing."
        ],
        Example: [
            "`<div class='text-xl font-semibold'>Large Bold Text</div>`"
        ]
    },
    {
        heading: "Colors",
        link: "#",
        content: "Tailwind's extensive color palette includes utilities for setting background colors, text colors, border colors, and gradients.",
        ulItems: [
            "Text color utilities.",
            "Background color utilities.",
            "Border color utilities."
        ],
        Example: [
            "`<div class='text-blue-500 bg-gray-200'>Colored Text and Background</div>`"
        ]
    },
    {
        heading: "Backgrounds",
        link: "#",
        content: "Tailwind provides utilities for background colors, images, gradients, and more, enabling diverse background styling options.",
        ulItems: [
            "Background color utilities.",
            "Background image utilities.",
            "Background gradient utilities."
        ],
        Example: [
            "`<div class='bg-gradient-to-r from-green-400 to-blue-500'>Gradient Background</div>`"
        ]
    },
    {
        heading: "Borders",
        link: "#",
        content: "Utilities for controlling border width, color, radius, and style are essential for UI design.",
        ulItems: [
            "Border width utilities.",
            "Border color utilities.",
            "Border radius utilities."
        ],
        Example: [
            "`<div class='border-2 border-red-500 rounded-lg'>Styled Border</div>`"
        ]
    },
    {
        heading: "State Variants",
        link: "#",
        content: "Tailwind's pseudo-class variants, such as hover:, focus:, active:, and disabled:, allow for interactive state styling.",
        ulItems: [
            "Hover variants.",
            "Focus variants.",
            "Active and disabled variants."
        ],
        Example: [
            "`<button class='bg-blue-500 hover:bg-blue-700'>Hover Button</button>`"
        ]
    },
    {
        heading: "Transitions and Animations",
        link: "#",
        content: "Tailwind includes utilities for setting transition properties, durations, timing functions, and delays, which are crucial for creating smooth animations.",
        ulItems: [
            "Transition property utilities.",
            "Duration and delay utilities.",
            "Using keyframe animations."
        ],
        Example: [
            "`<div class='transition duration-500 ease-in-out transform hover:scale-110'>Animated Element</div>`"
        ]
    },
    {
        heading: "Customizing Tailwind",
        link: "#",
        content: "Understanding how to customize the default Tailwind configuration to fit specific project needs, including extending the theme, is vital for advanced usage.",
        ulItems: [
            "Extending the theme.",
            "Adding custom utilities.",
            "Configuration file structure."
        ],
        Example: [
            "`module.exports = { theme: { extend: { colors: { 'custom-blue': '#1e40af' } } } }`"
        ]
    },
    {
        heading: "Container",
        link: "#",
        content: "Utilities for setting a fixed-width container and centering it horizontally.",
        ulItems: [
            "Using the container class.",
            "Customizing container widths.",
            "Centering content."
        ],
        Example: [
            "`<div class='container mx-auto'>Centered Container</div>`"
        ]
    },
    {
        heading: "Display",
        link: "#",
        content: "Utilities for controlling the display box type, including block, inline-block, flex, and grid.",
        ulItems: [
            "Block and inline-block display.",
            "Flex and grid display.",
            "Visibility utilities."
        ],
        Example: [
            "`<div class='block md:inline-block'>Block on Mobile, Inline on Desktop</div>`"
        ]
    },
    {
        heading: "Position",
        link: "#",
        content: "Utilities for setting the position property, including static, relative, absolute, fixed, and sticky.",
        ulItems: [
            "Static and relative positioning.",
            "Absolute and fixed positioning.",
            "Sticky positioning."
        ],
        Example: [
            "`<div class='relative top-0 left-0'>Relative Positioning</div>`"
        ]
    },
    {
        heading: "Z-Index",
        link: "#",
        content: "Utilities for controlling the stack order of elements.",
        ulItems: [
            "Setting z-index values.",
            "Using z-index with positioned elements.",
            "Customizing z-index scale."
        ],
        Example: [
            "`<div class='relative z-10'>Top Layer</div>`"
        ]
    },
    {
        heading: "Float",
        link: "#",
        content: "Utilities for floating elements to the left or right.",
        ulItems: [
            "Using float utilities.",
            "Clearing floated elements.",
            "Responsive float utilities."
        ],
        Example: [
            "`<div class='float-right'>Floated Right</div>`"
        ]
    },
    {
        heading: "Clear",
        link: "#",
        content: "Utilities for controlling the clearing of floated elements.",
        ulItems: [
            "Using clear utilities.",
            "Clearing specific sides.",
            "Responsive clear utilities."
        ],
        Example: [
            "`<div class='clear-both'>Clear Both</div>`"
        ]
    },
    {
        heading: "Object Fit",
        link: "#",
        content: "Utilities for controlling how an element with a src (image, video, etc.) should be resized to fit its container.",
        ulItems: [
            "Object fit utilities.",
            "Using object fit with images and videos.",
            "Responsive object fit utilities."
        ],
        Example: [
            "`<img class='object-cover w-full h-full' src='image.jpg'>`"
        ]
    },
    {
        heading: "Object Position",
        link: "#",
        content: "Utilities for controlling the alignment of the replaced element inside its box.",
        ulItems: [
            "Object position utilities.",
            "Using object position with images and videos.",
            "Responsive object position utilities."
        ],
        Example: [
            "`<img class='object-center' src='image.jpg'>`"
        ]
    },
    {
        heading: "Overflow",
        link: "#",
        content: "Utilities for controlling how content is handled when it overflows an element’s box.",
        ulItems: [
            "Setting overflow values.",
            "Handling text overflow.",
            "Responsive overflow utilities."
        ],
        Example: [
            "`<div class='overflow-auto'>Scrollable Content</div>`"
        ]
    },
]

export default tailwindTopics;