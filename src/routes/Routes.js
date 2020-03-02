import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,

} from "react-router-dom";
import {getAllRoutes} from './_routes'
import Layout from "../components/layout/Layout";

export default class Routes extends React.PureComponent {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        {
                            getAllRoutes().map(
                                (route) =>
                                    <Route path={route.path} component={route.component}/>
                            )
                        }
                    </Switch>
                </Layout>

                <Route exact path="/" render={() => (
                    <Redirect exact from={'/'} to={'/info'}/>
                )}/>
            </Router>
        );
    }
}