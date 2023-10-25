import { useState } from 'react';
import './index.css'
import Square from './component/Square'
import { createRoot } from 'react-dom/client';
// https://react.dev/reference/react-dom/client/createRoot

/*
To Do List
1. ToeTacTic
 * Marked Button
2. Linear Algebra Calculator
 * Matrix Multiplication Calculator (+,\cdot,\odot)
 * Determinant
 * Eigan Vector and Eigan Value
 * Singular Value Decomposition
 * Gaussian elimination
 * Matrix Taylor Series
3. Convey Game
4. Pages
5. CSS
6. Read the Document
*/

const ToeTacTic = () => {
    function clickSquare(){alert('Hello')}
    const DivSquare = [];
    const listSquare = [];
    const size=3
    for (let i = 0; i < size; i++) {
        let lineSquare=[]
    for (let j = 0; j < size; j++) {
        // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
        // https://reactjs.org/docs/lists-and-keys.html
        let index=i.toString()+','+j.toString()
        listSquare.push(<Square key={index} id={index} onClick={clickSquare} activate={false}/>);
        lineSquare.push(<Square key={index} id={index} onClick={clickSquare} activate={false}/>)
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

export default ToeTacTic