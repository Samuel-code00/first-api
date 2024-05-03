import React, { useState } from "react";
import "./Bored.css";


export default function boredActivity(){
   const [data, setUseData ] = useState("")

    async function boredData() {
        const response = await fetch(`https://www.boredapi.com/api/activity`);
        const jsonData = response.json();
        console.log(jsonData);
    }
    boredData();
    return(
        <div>

        </div>
    )
}