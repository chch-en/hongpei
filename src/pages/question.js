import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ask from '../scss/ask.module.scss'
class question extends Component {
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
        `https://api.hongbeibang.com/question/getQuestion?_t=1596074354298&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NTM3NjY3MiwiaWF0IjoxNTk2MDc0MjcyfQ.5nLvDuQ9Y9U2uxfJrIk_WBhjC0dE9jL6rsovEke1Ilk&contentId=${id}`
      )
      .then((res) => {
        console.log(res)
        this.setState({
          list_user: res.data.data.content.recipe,
          shu: res.data.data.content,
        })
      })
    axios
      .get(
        `https://api.hongbeibang.com/question/getAnswers?_t=1596072443822&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NTMwNjgxMCwiaWF0IjoxNTk2MDA0NDEwfQ.GMdRAWmrvwlHzT9llcVUsDNL3j-eDiCG55nr9s3XQXY&pageIndex=0&pageSize=10&contentId=${id}`
      )
      .then((res) => {
        console.log(res)
        this.setState({
          list: res.data.data.content.answer.data,
        })
      })
  }
  render() {
    // console.log(this.props)
    let { list_user, shu, list } = this.state
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
        </div>
        <br />
        <br />
        <div className={ask.kuai10}>
          <div className={ask.tt}>{shu.coverTitle}</div>
          <div className={ask.ttt}>
            <img className={ask.t} src={list_user.image} alt="" />
            <div className={ask.tttt}>
              <p className={ask.s}>{list_user.title}</p>
              <p className={ask.ss}>作者：{list_user.clientName}</p>
            </div>
          </div>
        </div>
        <div className={ask.kuai11}>
          <span> {shu.answerNum}回答</span>
        </div>

        {list.map((item, index) => (
          <div className={ask.kuai12} key={index}>
            <ul>
              <li>
                <img className={ask.tu2} src={item.clientImage} alt="" />
                <div className={ask.pinglun1}>
                  <p>{item.clientName}</p>
                  <p className={ask.time}>{item.modifyTime}</p>
                  <p className={ask.neirong}>{item.coverSummary}</p>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </Fragment>
    )
  }
}

export default withRouter(question)
