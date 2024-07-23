import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './TypedText.css';

const TypedText = (props) => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: props.texts,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      cursorChar: '|', // Customize cursor character if needed
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <div ref={el} className="typed-text"></div>;
};

export default TypedText;
