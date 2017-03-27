import axios from 'axios'

const getUserInfo = (username) => {
    return axios.get('https://api.github.com/users/' + username)
}

const helpers = {
    getPlayersInfo: (players) => {
        return axios.all(players.map((username) => {
            return getUserInfo(username)
        }))
        .then((info) => {
            return info.map((user) => {
                return user.data
            })
        })
        .catch((err) => {
            console.warn('Error in getPlayersInfo', err)
        })
    }
}

export default helpers