import { useState } from 'react';
import './Person.css';

const Person = () => {
    return (
<>
<table id='Person'>
<tr>
    <th>Index        </th>
    <th>Name        </th>
    <th>Age         </th>
    <th>Gender      </th>
    <th>Edit        </th>
    <th>Delete      </th>
</tr>
<tr>
    <td>0</td>
    <td>Hello             </td>
    <td>33             </td>
    <td>Male             </td>
    <td><button>Edit</button>       </td>
    <td><button>Delete</button>     </td>
</tr>
</table>
</>
    )
}

export default Person