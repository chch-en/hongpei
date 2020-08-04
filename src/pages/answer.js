import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ask from '../scss/ask.module.scss'
class answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      list_user: {},
      shu: {},
    }
  }
  componentDidMount() {
    console.log(this.props)
    let id = this.props.match.params.id
    axios
      .get(
        `https://api.hongbeibang.com/comment/getFloor?_t=1596000847830&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NDU5OTM2MSwiaWF0IjoxNTk1Mjk2OTYxfQ.a2-5EzTILJkE6vzUIdA9WVnQaV5C6vTwuk5RQ5uCOXg&pageIndex=0&pageSize=10&contentId=${id}`
      )
      .then((res) => {
        console.log(res)
        this.setState({
          list: res.data.data.data,
          list_user: res.data.data.data[0],
          shu: res.data.data,
        })
      })
  }
  render() {
    // console.log(this.props)
    let { list, list_user, shu } = this.state
    console.log(list)
    console.log(list_user)
    return (
      <Fragment>
        <div className={ask.nav1}>
          <img
            onClick={() => {
              this.props.history.push('/questionAndAnswer')
            }}
            src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
            alt=""
          />
          <h1>回答</h1>
        </div>
        <div className={ask.xiangqing}>
          <h1>{list_user.coverTitle}</h1>
          <div className={ask.top1}>
            <img className={ask.tu} src={list_user.commentClientImage} alt="" />
            <img
              className={ask.tu1}
              src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"
              alt=""
            />
            <span>{list_user.commentClientName}</span>
          </div>
          <p className={ask.timu}>评论：{shu.count}</p>
          <div className={ask.xia1}>
            {list.map((item, index) => (
              <div key={index}>
                <ul>
                  <li>
                    <img className={ask.tu2} src={item.clientImage} alt="" />
                    <div className={ask.pinglun}>
                      <p>{item.clientName}</p>
                      <p className={ask.time}>{item.modifyTime}</p>
                      <p className={ask.neirong}>{item.text}</p>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(answer)
