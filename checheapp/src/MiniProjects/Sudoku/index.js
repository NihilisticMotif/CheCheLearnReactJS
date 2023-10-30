import { useState , useEffect } from 'react';
import './index.css'
import SquareS from './component/Square'
import HistoryS from './component/History'
import Input from './component/Input'

const TicTacToe = () => {
    const [XO,setXO]=useState(true)
    const [size,setSize]=useState(3)
    const [seed, setSeed] = useState(1);
    // https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs
    const PartialReset = () => {
        setSeed(Math.random());
    }

    function Handle(){
        let List=[]
        for (let i = 0; i < size; i++) {
            let Column=[]
        for (let j = 0; j < size; j++) {
            Column.push(document.getElementById('Square['+i.toString()+','+j.toString()+']').textContent)
        }
            List.push(Column)        
        }
        alert(List)
        // https://www.w3schools.com/jsref/prop_node_childnodes.asp
        // https://stackoverflow.com/questions/13063801/find-a-nested-div-tag
        // https://www.w3schools.com/jsref/prop_node_textcontent.asp
    }
    let NextPlayer;
    if(XO){NextPlayer='O'}
    else  {NextPlayer='X'}
    return (
<div id='TicTacToe'>
<Input size={size} setSize={setSize} PartialReset={PartialReset}/>
<div key={seed}>
    <hr/>
    <SquareS size={size} XO={XO} setXO={setXO}/>
    <button onClick={Handle} XO={XO} setXO={setXO}>XO state Check</button>
    <hr/>
    <h1>Next player: {NextPlayer}</h1>
    <HistoryS size={size}/>
</div>

</div>
)
}

export default TicTacToe