import React, {Component} from 'react'
import {SelectAll, DeselectAll} from 'react-selectable-fast'
import SelectableApple from './selectableApple'
import {withStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
const styles = theme => ({
    root: {
        display: 'inline-grid',
    },
    ListOfApples: {
        display: 'flex',
        justifyContent: 'space - between',
        flexWrap: 'wrap',
    }
});


function ListOfApples(props) {

    const {classes, items, selectedItemsCollback} = props;
    const [checked, setChecked] = React.useState([]);


    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        selectedItemsCollback(checked);
    };


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


            <List className={classes.root}>
                {props.items.map(value => (
                    <ListItem key={value._id} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.includes(value)}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary={`name: ${value.AppleNum}`}/>

                        <SelectableApple key={value._id} item={value}/>

                    </ListItem>
                ))}
            </List>

        </div>
    )
}

export default withStyles(styles)(ListOfApples);
