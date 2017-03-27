import React, { Component } from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '' }
    }

    handleUpdateUser = (e) => {
        this.setState({ username: e.target.value })
    }

    handleSubmitUser = (e) => {
        let username = this.state.username
        let playerOne = this.context.router.route.match.params.playerOne
        this.setState({ username: '' })

        e.preventDefault()
        if (playerOne) {
            this.context.router.history.push({
                pathname: '/battle',
                query: {
                    playerOne,
                    playerTwo: username
                }
            })
        } else {
            this.context.router.history.push('/playerTwo/' + username)
        }
    }

    render() {
        return(
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.header}
                username={this.state.username}
            />
        )
    }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default PromptContainer