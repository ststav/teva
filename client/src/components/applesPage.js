import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import fetchQuery from '../services/serverApi';
import ApplesComponent from './applesComponent';

const styles = theme => ({
    root: {
        display: 'flex',
    },
});


class ApplesPage extends Component {

    constructor(props) {
        super(props);
        this.state={applesCollection: []};

    }

    componentDidMount() {
        this.onLoadData()

    }

    onLoadData() {
        const apples = fetchQuery();
        apples.then(data =>
            this.setState((prevState, props) => ({applesCollection: data}))
        );
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <ApplesComponent items={this.state.applesCollection}></ApplesComponent>

            </Fragment>
        );
    }

}

ApplesPage.propTypes = {
    classes: PropTypes.object.isRequired

};

export default withStyles(styles)(ApplesPage);
