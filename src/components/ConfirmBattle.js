import React, { PropTypes } from 'react'

const ConfirmBattle = (props) => {
    console.log(props)
    return props.isLoading === true
    ? <p>Loading...</p>
    : <p>Confirm Battle</p>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle