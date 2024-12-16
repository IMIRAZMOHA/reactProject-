import { useState } from "react";

function App() {
   const[calc, setCalc]=useState("");
   const[result, setResult]=useState("");

   const ops= ['/', '*', '+', '-', '.'];

   const updateCAlc = value => {

    if(
      ops.includes(value) && calc ==='' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
       )
    ) {
      return;
    }
   
   
    setCalc(calc + value);
    if(!ops.includes(value))
      setResult(eval(calc+value).toString());

   }


  const createDigits=()=>{
    const digits = [];
    for (let i = 1; i<10; i++){
      digits.push(
        <button onClick={()=>updateCAlc(i.toString())}
         key={i}>
          {i}
          </button>
      )
    }
    return digits;
  }

  const claculate = () =>{
    setCalc(eval(calc).toString());
  }
  const deleteLast = ()=> {
    if (calc == ''){
      return;
  
  }
  const value = calc.slice(0,.1);
  setCalc(value);

}

const deleteC = ()=> {
  if (calc == ''){
    return;

}
const value = result.slice(0,.1);
setResult(value);
}
   return (
    <div className="App">
      <div className="calculator">
        <div className="display">
         {result ? <h6>{result } </h6>:'(0)'} 

         <h1 >{calc || "0"}</h1>

        </div>
          <div className="operators">
            <button onClick={()=> updateCAlc('/')}>/</button>
            <button onClick={()=> updateCAlc('*')}>*</button>
            <button onClick={()=> updateCAlc('+')}>+</button>
            <button onClick={()=> updateCAlc('-')}>-</button>
            <button onClick={deleteLast}>Del</button>
            <button onClick={deleteC}>C</button>



        
          </div>
        <div className="digits">
           {createDigits()}
            <button onClick={()=>updateCAlc('0')}>0</button>
            <button onClick={()=>updateCAlc('.')}>.</button>
            <button onClick={claculate}>=</button>
           

            
          
        </div>
      </div>
  
    </div>
  );
}

export default App;
