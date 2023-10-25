import { useState } from 'react';
import './index.css'
import ModeH2 from './component/ModeH2'
import MyButton from './component/MyButton'

/*
To Do Now
2. Separate Functions in different files
3. Custom Hook
*/

const Calculator = () => {
  const [A, setA] = useState('0');
  const [B, setB] = useState('0');
  const [C, setC] = useState('0');
  const [operate, setOperate] = useState('*');
  const [Choose, setChoose] = useState(true);

  // --------------------------------------------------------
  // Utility Button
  // --------------------------------------------------------
  function clickOK(){
    // https://www.w3schools.com/jsref/jsref_parsefloat.asp
    if (operate==='+'){setC(parseFloat(A)+parseFloat(B))}
    if (operate==='-'){setC(parseFloat(A)-parseFloat(B))}
    if (operate==='*'){setC(parseFloat(A)*parseFloat(B))}
    if (operate==='/'){setC(parseFloat(A)/parseFloat(B))}
  }
  function clickReset() {
    if (Choose) {setA('0');}
    else        {setB('0');}
  }

  function clickDelete() {
    // https://www.w3schools.com/jsref/jsref_slice_array.asp
    if (Choose) {if (A.length==='0'){setA('0');}else{setA(A.toString().slice(0,-1));};} 
    else        {if (B.length==='0'){setB('0');}else{setB(B.toString().slice(0,-1));};}
  }

  // --------------------------------------------------------
  // Choose Button
  // --------------------------------------------------------
  function clickChoose() {
    if (Choose) 
         {setChoose(false)
          document.getElementById('A').style.color = 'black'
          document.getElementById('B').style.color = 'red'} 
    else {setChoose(true)
          document.getElementById('A').style.color = 'red'
          document.getElementById('B').style.color = 'black'}
  }

  // --------------------------------------------------------
  // Operate Button
  // --------------------------------------------------------
  function clickOperate(x) {
    setOperate(x);
  }

  // --------------------------------------------------------
  // Number Button
  // --------------------------------------------------------
  function clickNumber(x) {
    if (Choose) {if (A==='0'){setA(x.toString());}else{setA(A.toString()+x.toString());};} 
    else        {if (B==='0'){setB(x.toString());}else{setB(B.toString()+x.toString());};}
  }
  
  const listNumber = [];
  for (let i = 0; i < 10; i++) {
    // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
    // https://reactjs.org/docs/lists-and-keys.html
    listNumber.push(<MyButton key={i} name={i} onClick={clickNumber}/>);
  }

  function clickDot() {
    if (Choose) {if (A.toString().includes('.')){setA(A.toString());}else{setA(A.toString()+'.');};} 
    else        {if (B.toString().includes('.')){setB(B.toString());}else{setB(B.toString()+'.');};}
  }

  // --------------------------------------------------------
  // UI
  // --------------------------------------------------------
  return (
    <div id='Calculator'>
      <h1 id='All'><h1 id='A'>{A}</h1> {operate} <h1 id='B'>{B}</h1>  = {C}</h1>
      <hr/>
      <h1>Utility Button</h1>
      <MyButton name='Enter'     onClick={clickOK} />
      <MyButton name='AC'  onClick={clickReset} />
      <MyButton name='Delete' onClick={clickDelete} />
      <hr/>
      <h1>Choose Button</h1>
      <ModeH2 IsLeft={Choose}/>
      <MyButton name='Choose Number' onClick={clickChoose} />
      <hr/>
      <h1>Operate Button</h1>
      <MyButton name='+' onClick={clickOperate} />
      <MyButton name='-' onClick={clickOperate} />
      <MyButton name='*' onClick={clickOperate} />
      <MyButton name='/' onClick={clickOperate} />
      <hr/>
      <h1>Number Button</h1>
      <MyButton name='.' onClick={clickDot} />
      {listNumber}
      <hr/>
    </div>
  );
}

export default Calculator