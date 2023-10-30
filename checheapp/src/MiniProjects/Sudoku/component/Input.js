import { useState } from 'react';
import './Input.css';

const Input = ({size,setSize,PartialReset}) => {
    const [nn,setNn]=useState(size)
    function TotalReset(){
        window.location.reload();
    }
    function TrueSetInput(){
        // https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
        setSize(document.getElementById('Input').value)
        PartialReset()
    }
    function FakeSetInput(event){
        // https://bobbyhadz.com/blog/react-set-default-value-of-input
        setNn(event.target.value)
    }
    return (
<>
<div id='All'><input id='Input' name='Input' value={nn} onChange={FakeSetInput}></input><button id='BBT' onClick={TrueSetInput}>OK</button><button id='BBT' onClick={TotalReset}>Reset</button></div>
</>
    )
}

export default Input