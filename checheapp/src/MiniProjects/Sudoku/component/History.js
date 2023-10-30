import './History.css'
const History = ({size}) => {
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

    return (
<>
<div id='All'>
    <button 
        id='BBT' 
        onClick={Handle}
    >
        Turn 000
    </button>
    
    <button id='BBT' //onClick={TotalReset}
    >
        Show
    </button>
    </div>
</>
    )
}

const HistoryS = ({size}) => {
    return (
<div id='HistoryS'>
<History size={size}/>
<History size={size}/>
<History size={size}/>
</div>
    )
}
export default HistoryS