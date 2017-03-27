import React, { Component } from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            playerInfo: []
        }
    }

    componentDidMount = () => {
        let query = this.props.location.query
        // fetch info from github
    }
    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playerInfo}
            />
        )
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer