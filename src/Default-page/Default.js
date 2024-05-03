import React, { useEffect, useState } from "react";
import "./Default.css";

export default function Boreds() {
  const [data, setUseData] = useState({
    // text to show when the page loads
    text: "When boredom strikes, it's often an opportunity for our minds to explore new avenues of creativity and innovation. So, instead of seeing boredom as a hindrance, embrace it as a chance to engage in activities that stimulate your imagination and intellect.",
    quote: "Creativity is intelligence having fun.",
    author: "- Albert Einstein",
  });

  const [showNextPage, setShowNextPage] = useState(false);
  const [bgColor, setBgColor] = useState("#625ac4")

  const handleButtonClick = () => {
    setShowNextPage(true);
    handleNextClick();
  };


  // funtion for the next button
  const handleNextClick = () => {
    boredData();
    changeBackground()
  };

  

  async function boredData() {
    const response = await fetch(`https://www.boredapi.com/api/activity`);
    const jsonData = await response.json();
    console.log(jsonData);
    setUseData(jsonData);
  }

  useEffect(() => {
    // boredData();
  }, []);

  const changeBackground = () => {
      //  const background = {rgb Math.floor((Math.random() *))}
     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
     setBgColor(randomColor)
     //  document.body.style.backgroundColor = randomColor;
  }
  

  const DefaultPage = () => {
    return (
      <div>
        <div className="container" >
          <div className="text"><p>{data.text} </p></div>
          <div><h2><q>{data.quote}</q></h2></div>
          <div><p>{data.author}</p></div>
          <div className="btn">
             <button onClick={handleButtonClick}  className="btn1">Check Activities</button>
             {/* <button className="btn1" onClick={handleNextClick}>Next</button> */}
         </div>
        </div>
      </div>
    );
  };

  const NextPage = () => {
    return (
      <div>
          <div className="container1" style={{BackgroundColor: bgColor}}>
              <div>
                  <h1 id="bored">Activities to do when feeling detached</h1>
                  <h1>Type Of Activity: {data.type}</h1>
                  {/* <label>Activity:</label> */}
                  <h1><b>{data.activity}</b></h1>
                  <h3>Number Of Participant: {data.participants}</h3>
              </div> 
             <div className="btn">
               <button className="btn2" onClick={handleNextClick}>Next</button>
             </div>
         </div>
     </div>
    );
  };
  return (
    <div>
      {showNextPage ? <NextPage /> : <DefaultPage />}
      
    </div>
  );

  
}
