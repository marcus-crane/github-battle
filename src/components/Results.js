import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import styles from '../styles/index'

const StartOver = () => {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to="playerOne">
                    <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    )
}

const Results = (props) => {
    console.log('props', props)
    if (props.isLoading === true) {
        return <p>Loading...</p>
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <div className="jumbrotron col-sm-12 text-center" style={styles.transparentBg}>
                <h1>It's a tie!</h1>
                <StartOver />
            </div>
        )
    }

    let winnerIndex = props.scores[0] > props.scores[1] ? 0 : 1
    let loserIndex = winnerIndex === 0 ? 1 : 0
    return (
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winnerIndex]} info={props.playersInfo[winnerIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                    <UserDetails score={props.scores[loserIndex]} info={props.playersInfo[loserIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </div>
    )
}

Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

export default Results