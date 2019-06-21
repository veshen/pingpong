import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addTodoListItem} from '../actions';
import { Button } from 'antd';

const page = ({toDoList, addTodoListItem}) => {
    const [ text, setText ] = useState("");
    return(
        <div>
            <h1>Todo</h1>
            <div>
                <input type="text"  onChange={ e => setText(e.target.value)  }/>
                <Button onClick={()=>addTodoListItem(text)}>Add</Button>
            </div>
            <ul>
                {
                    toDoList.map((item,index)=><li key={index}>{item.text}</li>)
                }
            </ul>
        </div>
    )
}
export default connect(({toDoList}) => ({toDoList}), {addTodoListItem})(page);
