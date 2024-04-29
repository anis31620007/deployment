import React from 'react';

const PopupButton = () => {
  // Function to handle the button click
  const handleButtonClick = () => {
    // URL of the page you want to pop up
    const url = 'https://www.example.com';
    
    // Open a new browser window or tab with the specified URL
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div>
      {/* Button that triggers the pop-up */}
      <button onClick={handleButtonClick} style={buttonStyle}>
        Open Pop-up
      </button>
    </div>
  );
};

// Add some styling for the button
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4CAF50', // Green
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default PopupButton;
