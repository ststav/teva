import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import {SelectableGroup} from 'react-selectable-fast'
import ListOfApples from "./ListOfApples";
import ThreeDimScatterChart from "./chart";


const styles = theme => ({
    root: {
        display_position: 'flex',
    },
});


class ApplesComponent extends Component {
    constructor(props) {
        super(props);
        this.state={selectedItems:[]}
    }

    handleSelectionClear() {
        console.log('Cancel selection');
    }



    render() {
        const {classes, items} = this.props;
        let selectedItems=[];
        const selectedItemsCollback = (newSelectedItems)=>{
            this.setState((prevState)=>({selectedItems:[...newSelectedItems]}));
        };

        return (
            <Fragment>
                apples component

                <SelectableGroup
                ref={ref => (window.selectableGroup = ref)}
                className="main"
                clickClassName="tick"
                enableDeselect
                tolerance={0}
                deselectOnEsc={false}
                allowClickWithoutSelected={false}
                onSelectionClear={this.handleSelectionClear}
                // onSelectionFinish={this.handleSelectionFinish}
                ignoreList={['.not-selectable']}>
                <ListOfApples items={items} selectedItemsCollback={selectedItemsCollback}/>
                </SelectableGroup>

                <ThreeDimScatterChart data={this.state.selectedItems}/>
            </Fragment>
        );
    }

}

ApplesComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array,

};
export default withStyles(styles)(ApplesComponent);
