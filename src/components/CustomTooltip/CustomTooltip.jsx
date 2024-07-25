import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const CustomTooltip = ({ id, imgSrc, hoveredImg, clickedImg }) => (
  <Tooltip
    id={id}
    style={{borderRadius:'100px',
      border:"2px solid black",
      width:'60px',
      zIndex:"50",
    }}
    render={() => (
      <div>
        <img
          src={imgSrc}
          alt="Profile Picture"
          style={{
            width:'200px',
            borderRadius:'100px',
            opacity: hoveredImg === imgSrc ? 0.8 : 1,
            transform: clickedImg === imgSrc ? 'scale(1.2)' : 'scale(1)',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      </div>
    )}
  />
);

export default CustomTooltip;