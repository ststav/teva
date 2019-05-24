import React from 'react'
import {createSelectable} from 'react-selectable-fast'

const SelectableApple = (props) => {

    return <div ref={props.selectableRef}>
        <div>{props.item._id}</div>
        <h2>{props.item.color}</h2>
        <small>{props.item.size}</small>
    </div>
};

export default createSelectable(SelectableApple);
