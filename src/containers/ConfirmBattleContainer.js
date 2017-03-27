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
        console.log(this.props.location.query)
    }
    render() {
        return (
            <ConfirmBattle />
        )
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer