import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    render() {

        if (!this.props.users)
            return <div>Loading...</div>

        return (
            <div>
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList)