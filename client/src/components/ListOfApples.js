import React, { Component } from 'react'
import {SelectAll, DeselectAll} from 'react-selectable-fast'
import SelectableApple from './selectableApple'

class ListOfApples extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.items !== this.props.items
    }

    render() {
        return (
            <div>
                <p>Press ESC to clear selection</p>
                <div>
                    <SelectAll component="button" type="button" className="selectable-button">
                        Select all
                    </SelectAll>
                    <DeselectAll component="button" type="button" className="selectable-button">
                        Clear selection
                    </DeselectAll>
                </div>
                <div>
                    {this.props.items.map(item => (
                        <SelectableApple key={item._id} item = {item} />
                    ))}
                </div>
            </div>
        )
    }
}
export default ListOfApples;
