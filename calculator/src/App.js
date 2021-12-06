import React,{useState} from 'react';
import './App.css';

function App(){
    const [result, setResult] = useState("");
    const handelClic=(e)=>{
        setResult(result.concat(e.target.name));
    }
    const clear=()=>{
        setResult("");
    }
    const backspace=()=>{
        setResult(result.slice(0,result.length-1));
    }
    const calculate=()=>{
        try{
            setResult(eval(result));

        }catch(err){
            setResult("Erorr");
        }
        
    }    

    return (
    <div className="container">
        <form>
            <input type="text" value={result}></input>
        </form>
        <div className="keypad">
        <button className="highLight" onClick={clear} id="clear">AC</button>
        <button className="highLight" onClick={backspace} id="backspace">C</button>
        <button className="highLight" name="/" onClick={handelClic}>&divide;</button>
        <button name="7" onClick={handelClic}>7</button>
        <button name="8" onClick={handelClic}>8</button>
        <button name="9" onClick={handelClic}>9</button>
        <button className="highLight" name="*" onClick={handelClic}>&times;</button>
        <button name="4" onClick={handelClic}>4</button>
        <button name="5" onClick={handelClic}>5</button>
        <button name="6" onClick={handelClic}>6</button>
        <button className="highLight" name="-" onClick={handelClic}>&ndash;</button>
        <button name="1" onClick={handelClic}>1</button>
        <button name="2" onClick={handelClic}>2</button>
        <button name="3" onClick={handelClic}>3</button>
        <button className="highLight" name="+" onClick={handelClic}>+</button>
        <button name="0" onClick={handelClic}>0</button>
        <button name="." onClick={handelClic}>.</button>
        <button className="highLight" onClick={calculate} id="result">=</button>
        </div>  

    </div>
    );
}
export default App;