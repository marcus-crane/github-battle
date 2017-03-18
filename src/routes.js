import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './components/Main'
import PromptContainer from './containers/PromptContainer'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/playerOne" header="Player One" component={PromptContainer} />
                <Route path="/playerTwo/:playerOne" component={PromptContainer} />
            </Switch>
        </Router>
    )
}

export default Routes