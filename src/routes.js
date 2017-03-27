import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import PromptContainer from './containers/PromptContainer'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/playerOne" render={() =>
                    ( <PromptContainer header="Player One" /> )
                } />
                <Route path="/playerTwo/:playerOne" render={() =>
                    ( <PromptContainer header="Player Two" /> )
                } />
            </Switch>
        </Router>
    )
}

export default Routes