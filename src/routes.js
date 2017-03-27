import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import PromptContainer from './containers/PromptContainer'
import ConfirmBattleContainer from './containers/ConfirmBattleContainer'

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
                <Route path="/battle" component={ConfirmBattleContainer} />
            </Switch>
        </Router>
    )
}

export default Routes