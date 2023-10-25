import { useState } from 'react';
import './index.css'
import SquareS from './component/Square'
import History from './component/History'
import X2 from './component/Input'

const TicTacToe = () => {
    const [XO,setXO]=useState(true)
    let message;
    if(XO){message='X'}else{message='O'}

    return (
<div id='TicTacToe'>
<X2/>
<hr/>
<SquareS message={'Fasion'}/>
<hr/>
<h1>Next player: X</h1>
<History/>
</div>
)
}

export default TicTacToe