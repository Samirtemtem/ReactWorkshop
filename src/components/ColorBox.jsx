import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ColorBox = ({ initialColor, colorOptions }) => {
  const [currentColor, setCurrentColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    setCurrentColor(colorOptions[randomIndex]);
  };

  return (
    <div className="color-box-container">
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: currentColor,
          margin: '20px auto',
          border: '2px solid #333',
          borderRadius: '8px'
        }}
      />
      <button
        onClick={changeColor}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Changer de couleur
      </button>
    </div>
  );
};

ColorBox.propTypes = {
  initialColor: PropTypes.string.isRequired,
  colorOptions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ColorBox;
