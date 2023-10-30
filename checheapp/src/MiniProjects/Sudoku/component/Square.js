import './Square.css';
import {useState,useEffect} from 'react';

const Square = ({id,XO,setXO}) => {
  const [text,setText]=useState('-')
  const [activate,setActivate]=useState(true)

  function SetSquare(text,bool){
    if(activate===true){
        setText(text);
        setActivate(false);
        setXO(bool)
    }
  }
  function handleClick(){
    if(XO===undefined){SetSquare('O',false)}
    if(XO===true){SetSquare('O',false)}
    if(XO===false){SetSquare('X',true)}
  }
  return (
    <button class='Square' id={'Square'+id.toString()} onClick={handleClick}>
      {text}
    </button>
  );
}

const SquareS = ({size,XO,setXO}) => {
    const DivSquare = [];
    for (let i = 0; i < size; i++) {
        let lineSquare=[]
    for (let j = 0; j < size; j++) {
        // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
        // https://reactjs.org/docs/lists-and-keys.html
        let index='['+i.toString()+','+j.toString()+']'
        lineSquare.push(<Square key={index} id={index} XO={XO} setXO={setXO}/>)
    }
        DivSquare.push(<div id={'DivSquare'+i.toString()}>{lineSquare}</div>)
        // https://stackoverflow.com/questions/42790969/idiomatic-way-to-append-an-element-in-jsx
    }
    return (
<>
<div id='DivSquare'>
{DivSquare}
</div>
</>
    )
}

export default SquareS