import React, { useEffect, useState } from "react";
import "./Bored.css";

export default function Bored() {
  const [data, setUseData] = useState({
    // text to show when the page loads
    text: "When boredom strikes, it's often an opportunity for our minds to explore new avenues of creativity and innovation. So, instead of seeing boredom as a hindrance, embrace it as a chance to engage in activities that stimulate your imagination and intellect.",
    quote: "Creativity is intelligence having fun.",
    author: "- Albert Einstein",
  });

  // funtion for the next button
  const handleNextClick = () => {
    boredData();
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

  return (
    <div>
      <div className="container">
        <div className="text"><p>{data.text} </p></div>
        <div><h2>{data.quote}</h2></div>
        <div><p>{data.author}</p></div>
        <div>
          <h1 id="bored">ACTIVITIES TO DO WHEN FEELING DETACHED</h1>
          <h1>Type Of Activity: {data.type}</h1>
          <h3>Number Of Participant: {data.participants}</h3>
          <h1><b>{data.activity}</b></h1>
        </div>
       <div className="btn">
        <button className="btn1">Previous</button>
        <button className="btn1" onClick={handleNextClick}>Next</button>
       </div>
      </div>
      
    </div>
  );

  
}
