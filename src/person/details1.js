import React, { Component, Fragment } from 'react'
import xunzhang from '../scss/medal.module.scss'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: {},
    }
  }
  componentDidMount() {
    console.log(this.props)
    let id = this.props.match.params.id
    axios
      .get(
        `https://api.hongbeibang.com/activity/getComponent?_t=1595506355302&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NDU5OTM2MSwiaWF0IjoxNTk1Mjk2OTYxfQ.a2-5EzTILJkE6vzUIdA9WVnQaV5C6vTwuk5RQ5uCOXg&pageIndex=0&pageSize=10&contentId=${id}&listMode=createTime`
      )
      .then((res) => {
        console.log(res)
        this.setState({
          list: res.data.data.activity,
        })
      })
  }
  render() {
    console.log(this.props)
    let { list } = this.state
    console.log(list)
    return (
      <Fragment>
        <div className={xunzhang.nav}>
          <img
            onClick={() => {
              this.props.history.push('/activity')
            }}
            src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
            alt=""
          />
          <h1>日常活动</h1>
        </div>

        <div className={xunzhang.hezi1} key={list.activityContentId}>
          <p dangerouslySetInnerHTML={{ __html: list.activityIntroduce }} />
        </div>
        {/* {list.map((list) => (
        ))} */}
      </Fragment>
    )
  }
}

export default withRouter(details)
