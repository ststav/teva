import React from 'react'
import {createSelectable} from 'react-selectable-fast'
import {withStyles} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";


const styles = theme => ({
        root: {
            display: 'flex',
            borderRadius: '50%',
            alignSelf: 'center',
        },
        item: {
            cursor: 'pointer',
            background: 'lightgray',
            margin: '7px',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'inline-block',
            textAlign: 'center',
        },
        selected: {
            background: 'lightgreen',
            color: 'white',
        },
        selecting: {
            border: '1px solid rebeccapurple',
        }
    })
;


function AppleIcon(props) {
    return (
        <SvgIcon {...props}>
            <path
                d="M20,10C22,13 17,22 15,22C13,22 13,21 12,21C11,21 11,22 9,22C7,22 2,13 4,10C6,7 9,7 11,8V5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5V3H13V8C15,7 18,7 20,10Z"/>
        </SvgIcon>
    );
}

const SelectableApple = (props) => {
    const {classes} = props;
    const {selectableRef, selected, selecting} = props;
    return <div ref={selectableRef}
                className={`${classes.item} ${selecting && classes.selecting} ${selected && classes.selected}`}>
        <AppleIcon className={classes.icon} nativeColor={props.item.Color} style={{fontSize: props.item.Size * 3}}/>
        <div>{props.item.AppleNum}</div>
    </div>
};

export default withStyles(styles)(createSelectable(SelectableApple));
