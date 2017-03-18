import React, { Component } from 'react'

class ProfilePic extends Component {
    render() {
        return <img src={this.props.imageUrl} style={{height: 100, width: 100}} alt="Github avatar" />
    }
}

// const ProfileLink = (props) => { }

class ProfileLink extends Component {
    render() {
        return (
            <div>
                <a href={'https://github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
}

class ProfileName extends Component {
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

class Profile extends Component {
    render() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
}

export default Profile