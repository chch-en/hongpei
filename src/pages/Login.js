import React, { Component, Fragment } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        用户名：
        <input type="text" />
        <br />
        密码：
        <input type="text" />
        <br />
        <button>登录</button>
      </Fragment>
    )
  }
}
