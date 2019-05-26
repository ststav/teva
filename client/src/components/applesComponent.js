import React, {Component, Fragment, createRef} from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import {SelectableGroup} from 'react-selectable-fast'
import ListOfApples from "./ListOfApples";
import ThreeDimScatterChart from "./chart";
import {get} from 'lodash'

const styles = theme => ({
    root: {
        display_position: 'flex',
    },
});


class ApplesComponent extends Component {
    constructor(props) {
        super(props);
        this.countersRef = createRef();
        this.state = {selectedItems: [], dataChart:[]}
        this.handleSelectionFinish = this.handleSelectionFinish.bind(this);
        this.get = get.bind(this);
    }

    handleSelectionClear() {
        console.log('Cancel selection');
    }

    handleSelecting = selectingItems => {
    }

    handleSelectionFinish = newSelectedItems => {
        this.setState((prevState) => ({selectedItems: [...newSelectedItems],
            dataChart: [...newSelectedItems].map(si=>si.props.item)}));

    };


    render() {
        const {classes, items} = this.props;
        let selectedItems = [];


        return (
            <Fragment>
                <SelectableGroup
                    ref={ref => (window.selectableGroup = ref)}
                    className="main"
                    clickClassName="tick"
                    enableDeselect
                    tolerance={0}
                    deselectOnEsc={true}
                    allowClickWithoutSelected={false}
                    duringSelection={this.handleSelecting}
                    onSelectionClear={this.handleSelectionClear}
                    onSelectionFinish={this.handleSelectionFinish}>
                    <ListOfApples items={items}/>
                </SelectableGroup>

                <ThreeDimScatterChart data={this.state.dataChart}/>
            </Fragment>
        );
    }

}

ApplesComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array,

};
export default withStyles(styles)(ApplesComponent);
