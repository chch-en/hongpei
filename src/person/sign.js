import React, { Component, Fragment } from 'react'
import xunzhang from '../scss/medal.module.scss'
import { withRouter } from 'react-router-dom'
class medal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <div className={xunzhang.nav}>
          <img
            onClick={() => {
              this.props.history.push('/my')
            }}
            src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
            alt=""
          />
          <h1>签到</h1>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(medal)
