import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './components/Main'
import PromptContainer from './containers/PromptContainer'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
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