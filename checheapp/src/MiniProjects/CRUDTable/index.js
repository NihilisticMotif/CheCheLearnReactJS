import { useState } from "react";
import './index.css'
import ColumnS from './component/Column'
import Table from "./component/Table";
import ColumnEditor from "./component/ColumnEditor";
import Header from "./component/Header";
function CRUDTable() {
    return (
<div id='App'>
<Header/>
<div id='Body'>
<ColumnEditor/>
<Table/>
</div>

<div id='Body'>
<ColumnS/>
<Table/>

</div>
</div>
)
}

export default CRUDTable;