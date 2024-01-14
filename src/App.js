
import React, { useState } from "react";
import Days from "./Days";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Thank You Gaurav 👍👍",
];


function App() {
  
  const [step , setstep] = useState(1)
  const [isopen , setIsOpen] = useState(true)
  


  function previousbtn(){
    if(step>1) setstep((s)=>s-1)
    
    



  }
  function Nextbtn(){
    if(step<4) {
      setstep((s)=>s+1);
    }


  }
 
  return (

    <div>
      
      <button className="close" onClick={()=>setIsOpen((is)=>!is)}>&times;</button>
      {isopen && (
      <div className="steps">
        <div className="numbers">
          <div className={step>=1 ? "active" : ""}>1</div>
          <div className={step>=2 ? "active" : ""}>2</div>
          <div className={step>=3 ? "active" : ""}>3</div>
          <div className={step>=4 ? "active" : ""}>4</div>
        </div>
        <p className="message">
          Step {step}:{messages[step-1]}
        </p>
        <div className="buttons">
          <button  style={{backgroundColor: "#7950f2" , color:"#fff"}}onClick={previousbtn} >Previous</button>
          <button style={{backgroundColor: "#7950f2" , color:"#fff"}} onClick={Nextbtn}>Next</button>
        </div>
       

      
      </div>
      )}
      <Days/>
      
    </div>
   
      
   
  );
}

export default App;
