import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css'; // You can create this file to add custom styles if needed

const AnimatedButton = (props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    // Toggle the animation state
    setIsAnimating(!isAnimating);

    // Reset the animation after a delay
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div className="container mt-5">
      <button className={`btn btn-primary ${isAnimating ? 'animated-button' : ''}`} onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default AnimatedButton;