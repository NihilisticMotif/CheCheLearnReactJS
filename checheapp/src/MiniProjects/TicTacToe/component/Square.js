import './Square.css';
import {useState} from 'react';

const Square = ({id,activate,message}) => {
  const [text,setText]=useState('-')
  function handleClick() {
      if(activate){
        setText(message);
        activate=false;
      }
      else{
        setText('-');
        activate=true;
      };
  }
  return (
    <button class='Square' id={'Square'+id.toString()} activate={activate} onClick={handleClick}>
      {text}
    </button>
  );
}

const SquareS = ({message}) => {
    const DivSquare = [];
    const size=3;
    for (let i = 0; i < size; i++) {
        let lineSquare=[]
    for (let j = 0; j < size; j++) {
        // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
        // https://reactjs.org/docs/lists-and-keys.html
        let index=i.toString()+','+j.toString()
        lineSquare.push(<Square key={index} id={index} message={message} activate={false}/>)
    }
        DivSquare.push(<div id={'DivSquare'+i.toString()}>{lineSquare}</div>)
        // https://stackoverflow.com/questions/42790969/idiomatic-way-to-append-an-element-in-jsx
    }
    return (
<>
{DivSquare}
</>
    )
}

export default SquareS