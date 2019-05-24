import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import NotFoundPage from '../components/notFoundPage';
// import ServicesPage from '../components/ServicesPage';
import ApplesPage from '../components/applesPage';
// import FormsPage from '../components/FormsPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>

            <Switch>

                <Route path="/" component={LandingPage} exact={true} />

                <Route path="/apples" component={ApplesPage} />
                {/*<Route path="/forms" component={FormsPage} />*/}

                {/*<Route path="/services" component={ServicesPage} />*/}
                <Route component={NotFoundPage} />
            </Switch>

        </div>
    </BrowserRouter>
);

export default AppRouter;
