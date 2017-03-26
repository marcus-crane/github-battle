import React, { Component } from 'react'
import styles from '../styles/index'

class PromptContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    onUpdateUser = (e) => {
        this.setState({ username: e.target.value })
    }

    onSubmitUser = (e) => {
        let username = this.state.username

        e.preventDefault()
        if (this.context.router.route.location.pathname !== '/playerOne') {
            this.context.router.history.push({
                pathname: '/battle',
                query: {
                    playerOne: 'test',
                    playerTwo: username
                }
            })
        } else {
            console.log('beh')
            this.context.router.history.push({
                pathname: '/playerTwo/' + username
            })
        }
    }

    render() {
        console.log(this)
        return(
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
                <h1>{this.props.header}</h1>
                <div className="col-sm-12">
                    <form onSubmit={this.onSubmitUser}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Github Username"
                                onChange={this.onUpdateUser}
                                value={this.state.username}
                                type="text" 
                            />
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button
                                className="btn btn-block btn-success"
                                type="submit">
                                    Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default PromptContainer