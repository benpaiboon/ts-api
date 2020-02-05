import React, { Component } from 'react'
import axios from 'axios'

export default class User extends Component {
  _isMounted = false;

  state = {
    users: []
  }

  componentDidMount() {
    this._isMounted = true;
    axios.get(`http://localhost:5000/user`)
      .then(res => {
        if (this._isMounted) {
          this.setState({ users: res.data })
          console.log(this.state.users)
        }
      })
      .catch((error) => {
        if (error.response.status === 500) {
          console.log('Can not load users')
        }
      });
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
