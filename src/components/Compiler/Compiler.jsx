import React, { useState, useRef, useEffect } from "react";

export default function Compiler() {
    const [htmlContent, setHtmlContent] = useState(
        "<!DOCTYPE html>\n<html>\n<head> </head>\n<body> <h1> Hello world</h1>\n<script>  </script>\n</body>\n</html>"
    );
    const [cssContent, setCssContent] = useState(
        "body {\n  font-family: Arial, sans-serif;\n}"
    );
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Retrieve the theme preference from localStorage or default to false
        const savedTheme = localStorage.getItem("isDarkMode");
        return savedTheme ? JSON.parse(savedTheme) : false;
    });
    const iframeRef = useRef(null);

    useEffect(() => {
        const document = iframeRef.current.contentDocument;
        const documentContents = `
      <html>
        <head>
          <style>
            body {
              color: ${isDarkMode ? "white" : "black"};
              background-color: ${isDarkMode ? "#374151" : "white"};
            }
            ${cssContent}
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;
        document.open();
        document.write(documentContents);
        document.close();
    }, [htmlContent, cssContent, isDarkMode]);

    useEffect(() => {
        // Save the theme preference to localStorage whenever it changes
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <div
            className={`p-4 mt-24 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
                }`}
        >
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Code Compiler</h1>
                    <button
                        className="p-2 rounded border"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                        Toggle {isDarkMode ? "Light" : "Dark"} Mode
                    </button>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div
                    className={`p-4 rounded-xl shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"
                        }`}
                >
                    <h2 className="text-lg font-bold mb-2">HTML</h2>
                    <textarea
                        className={`w-full p-2 border rounded-xl resize-none outline-none h-56 ${isDarkMode
                                ? "bg-gray-700 text-white"
                                : "bg-gray-200 text-gray-900"
                            }`}
                        placeholder="HTML goes here..."
                        value={htmlContent}
                        onChange={(e) => setHtmlContent(e.target.value)}
                    />
                </div>
                <div
                    className={`p-4 rounded-xl shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"
                        }`}
                >
                    <h2 className="text-lg font-bold mb-2">CSS</h2>
                    <textarea
                        className={`w-full p-2 border  resize-none outline-none h-56 rounded-xl ${isDarkMode
                                ? "bg-gray-700 text-white"
                                : "bg-gray-200 text-gray-900"
                            }`}
                        placeholder="CSS goes here..."
                        value={cssContent}
                        onChange={(e) => setCssContent(e.target.value)}
                    />
                </div>
            </div>
            <h2 className="text-lg font-bold mb-2 text-center">Output</h2>
            <iframe
                title="output"
                ref={iframeRef}
                className={`w-full h-80 border rounded-xl shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
            />
        </div>
    );
}
