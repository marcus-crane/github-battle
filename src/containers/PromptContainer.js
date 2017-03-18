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
        e.preventDefault()
        let username = this.state.username
        if (!this.props.location.pathname === '/playerOne') {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: 'test',
                    playerTwo: this.state.username
                }
            })
        } else {
            this.props.history.push({
                pathname: '/playerTwo'
            })
        }
    }

    render() {
        console.log(this)
        return(
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
                <h1>HEADER</h1>
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

PromptContainer.contentTypes = {
    router: React.PropTypes.object.isRequired
}

export default PromptContainer