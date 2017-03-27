import axios from 'axios'

const getUserInfo = (username) => {
    return axios.get('https://api.github.com/users/' + username)
}

const getRepos = (username) => {
    return axios.get('https://api.github.com/users/' + username + '/repos')
}

const getTotalStars = (repos) => {
    return repos.data.reduce((prev, curr) => {
        return prev + curr.stargazers_count
    }, 0)
}

const getPlayersData = (player) => {
    return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
        return {
            followers: player.followers,
            totalStars: totalStars
        }
    })
}

const calculateScores = (players) => {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ]
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
    },
    battle: (players) => {
        let playerOneData = getPlayersData(players[0])
        let playerTwoData = getPlayersData(players[1])

        return axios.all([playerOneData, playerTwoData])
        .then(calculateScores)
        .catch((err) => { console.warn('Error in getPlayersData', err) })
    }
}

export default helpers