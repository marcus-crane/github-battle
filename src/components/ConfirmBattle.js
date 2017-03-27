import React from 'react'

const ConfirmBattle = (props) => {
    console.log(props)
    return props.isLoading === true
    ? <p>Loading...</p>
    : <p>Confirm Battle</p>
}

export default ConfirmBattle