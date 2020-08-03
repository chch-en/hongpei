import React, { Component, Fragment } from 'react'
import xunzhang from '../scss/medal.module.scss'
import { withRouter } from 'react-router-dom'

class medal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // componentDidMount() {
  //   axios
  //     .get(
  //       'https://api.hongbeibang.com/medal/getAll?_t=1595406583207&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NDU5OTM2MSwiaWF0IjoxNTk1Mjk2OTYxfQ.a2-5EzTILJkE6vzUIdA9WVnQaV5C6vTwuk5RQ5uCOXg'
  //     )
  //     .then((res) => {
  //       console.log(res)
  //     })
  // }
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
          <h1>我的勋章</h1>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(medal)
