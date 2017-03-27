import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/index'
import UserDetails from './UserDetails'

const ConfirmBattle = (props) => {
    console.log(props)
    return props.isLoading === true
    ? <p>Loading...</p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
            <div className="col-sm-6">
                <p className="lead">Player 1</p>
                <UserDetails info={props.playersInfo[0]} />
            </div>
            <div className="col-sm-6">
                <p className="lead">Player 2</p>
                <UserDetails info={props.playersInfo[1]} />
            </div>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
            <div className="col-sm-12" style={styles.space}>
                <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                    Initiate Battle!
                </button>
            </div>
            <div className="col-sm-12" style={styles.space}>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-danger">
                        Reselect Players
                    </button>
                </Link>
            </div>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array
}

export default ConfirmBattle