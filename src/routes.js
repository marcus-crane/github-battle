import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './components/App'
import NotFound from './components/NotFound'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes