import React, { Component, Fragment } from 'react'
import xunzhang from '../scss/medal.module.scss'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class medal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      past: '',
      id: '',
    }
  }
  componentDidMount() {
    axios
      .get(
        'https://api.hongbeibang.com/activity/getActivitys?_t=1595490623302&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NDU5OTM2MSwiaWF0IjoxNTk1Mjk2OTYxfQ.a2-5EzTILJkE6vzUIdA9WVnQaV5C6vTwuk5RQ5uCOXg&pageIndex=0&pageSize=10'
      )
      .then((res) => {
        console.log(res)
        this.setState({
          list: res.data.data.data,
        })
      })
  }
  zhuan = (id) => {
    this.props.history.push(`/details1/${id}`)
  }
  render() {
    let { list } = this.state
    // console.log(list)
    // console.log(this.props)
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
          <h1>精彩活动</h1>
        </div>
        <div className={xunzhang.activity}>
          {list.map((item) => (
            <div
              className={xunzhang.activity3}
              onClick={() => {
                this.zhuan(item.contentId)
              }}
              key={item.contentContainerActivityId}
            >
              <img
                className={xunzhang.activity1}
                src={item.coverImage}
                alt=""
              />
              <div className={xunzhang.top}>
                <p>
                  {new Date(item.activityEndTime).getTime() -
                    new Date().getTime() >
                  0
                    ? '[进行中]'
                    : '[结束]'}
                </p>

                <div className={xunzhang.text}>{item.coverTitle}</div>
                <div className={xunzhang.activity2}>{item.activityEndTime}</div>
              </div>
              <div className={xunzhang.activity2}>{item.introduce}</div>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

export default withRouter(medal)
