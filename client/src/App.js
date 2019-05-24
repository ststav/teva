import React from 'react';
import './App.css';
import withRoot from './theme/withRoot';
import AppRouter from "./routers/appRouter";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

function App() {
    return (

            <AppRouter />
    );
}

export default withRoot(withStyles(styles)(App));;
