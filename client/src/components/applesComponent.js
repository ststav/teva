import React, {Component, Fragment, createRef} from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import {SelectableGroup} from 'react-selectable-fast'
import SelectedItems from "./selectedItems";
import ListOfApples from "./ListOfApples";


const styles = theme => ({
    root: {
        display: 'flex',
    },
});


class ApplesComponent extends Component {
    constructor(props) {
        super(props);

        this.selectedItems = new SelectedItems()
    }

    handleSelectionFinish = selectedItems => {
        this.selectedItems.handleSelectionFinish(selectedItems)
    };

    handleSelectionClear() {
        console.log('Cancel selection');
    }

    render() {
        const {classes, items} = this.props;
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
                    onSelectionFinish={this.handleSelectionFinish}
                    ignoreList={['.not-selectable']}>
                    <ListOfApples items={items}/>
                </SelectableGroup>


                {/*{(items || []).map(item => (*/}
                    {/*<li key={item._id}>{item._id}</li>*/}
                {/*))}*/}
            </Fragment>
        );
    }

}

ApplesComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array,

};
export default withStyles(styles)(ApplesComponent);
