import {useState,useEffect} from 'react';
import './History.css'

const History = ({size,message}) => {
    let List;
    useEffect(() => {
    let Lists=[]
    for (let i = 0; i < size; i++) {
        let Column=[]
    for (let j = 0; j < size; j++) {
        Column.push(document.getElementById('Square['+i.toString()+','+j.toString()+']').textContent)
    }
        Lists.push(Column)        
    }
    // https://www.w3schools.com/jsref/prop_node_childnodes.asp
    // https://stackoverflow.com/questions/13063801/find-a-nested-div-tag
    // https://www.w3schools.com/jsref/prop_node_textcontent.asp
    List=Lists
    }, []);

    function Handle(){
        alert(List)    
    }
    return (
<>
<div id='All'>
    <button 
        id='BBT' 
        onClick={Handle}
    >
        {message}
    </button>
    </div>
</>
    )
}

const HistoryS = ({size}) => {
    return (
<div id='HistoryS'>
<History key={0} size={size} message={'Start Game'}/>
</div>
    )
}
export default HistoryS