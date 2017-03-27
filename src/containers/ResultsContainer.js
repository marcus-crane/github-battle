import React, { Component } from 'react'
import Results from '../components/Results'
import helpers from '../utils/githubHelpers'

class ResultsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            scores: []
        }
    }

    componentDidMount = () => {
        console.log(this.state)
        helpers.battle(this.props.location.state.playersInfo)
        .then((result) => {
            this.setState({
                isLoading: false,
                scores: result
            })
        })
    }

    render() {
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores}
            />
        )
    }
}

export default ResultsContainer