import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routes from './_routes'

export default class Routes extends React.PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        routes.map(
                            (route, index) => (
                                <Route path={route.path} key={index}>
                                    {route.component}
                                </Route>
                            )
                        )
                    }
                </Switch>
            </Router>
        );
    }
}