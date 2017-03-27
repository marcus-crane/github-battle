import React, { Component } from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import helpers from '../utils/githubHelpers'

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
        helpers.getPlayersInfo([query.playerOne, query.playerTwo])
        .then((players) => {
            this.setState({
                isLoading: false,
                playersInfo: [players[0], players[1]]
            })
        })
    }
    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
            />
        )
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer