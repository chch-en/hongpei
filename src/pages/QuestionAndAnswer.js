import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ask from '../scss/ask.module.scss'
class QuestionAndAnswer extends Component {
  constructor() {
    super()
    this.state = {
      tab: [
        {
          name: '精华问答',
          key: 'Essence',
        },
        {
          name: '最新问题',
          key: 'New',
        },
        {
          name: '最热问题',
          key: 'Hot',
        },
      ],
      list: [],
      isActive: '',
      pageIndex: 0,
    }
  }
  componentDidMount() {
    this.get_all()
  }
  get_all = (value = 'New') => {
    axios
      .get(
        `https://api.hongbeibang.com/question/get${value}?csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc4NDU5OTM2MSwiaWF0IjoxNTk1Mjk2OTYxfQ.a2-5EzTILJkE6vzUIdA9WVnQaV5C6vTwuk5RQ5uCOXg&pageIndex=${this.state.pageIndex}&pageSize=10`
      )
      .then((res) => {
        console.log(res)
        this.setState({
          list: res.data.data.content.data,
          isActive: value,
        })
      })
  }
  // tabChange = (key) => {
  //   this.setState({
  //     pageIndex: 0,
  //     isActive: key,
  //     list: [],
  //   })
  // }
  // tabsChange = (key) => {
  //   //点击时，修改定义的相关内容
  //   this.setState(
  //     {
  //       pageIndex: 0,
  //       isActive: key,
  //       list: [],
  //     },
  //     () => {
  //       this.get_all()
  //     }
  //   )
  // }
  // get_onScroll = (e) => {
  //   let { scroll } = this.refs
  //   // scrollTop为滚动条在Y轴上的滚动距离。
  //   // clientHeight为内容可视区域的高度。
  //   // scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。
  //   if (
  //     scroll.scrollHeight > scroll.clientHeight &&
  //     scroll.scrollTop + scroll.clientHeight === scroll.scrollHeight
  //   ) {
  //     this.setState(
  //       {
  //         pageIndex: this.state.pageIndex + 10,
  //       },
  //       () => {
  //         this.get_all()
  //       }
  //     )
  //   }
  // }
  tiao = (id) => {
    this.props.history.push(`/answer/${id}`)
  }
  tiao1 = (id) => {
    this.props.history.push(`/question/${id}`)
  }
  render() {
    let { tab, list, isActive } = this.state
    console.log(isActive)
    return (
      <Fragment>
        <div>
          <div>
            <ul className={ask.nav}>
              {tab.map((item) => (
                <li
                  key={item.key}
                  onClick={() => {
                    this.get_all(item.key)
                    // console.log(item.key)
                  }}
                  className={isActive === item.key ? ask.active : ''}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <br />
          <br />
          <div className={ask.kuai}>
            {list.map(
              (item, index) =>
                isActive === 'Essence' ? (
                  <div
                    onClick={() => {
                      this.tiao(item.contentId)
                    }}
                    key={index}
                    className={ask.kuai1}
                  >
                    <div>
                      <img
                        className={ask.touxiang}
                        src={item.clientImage}
                        alt=""
                      />
                      <img
                        className={ask.touxiang1}
                        src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"
                        alt=""
                      />
                      <span>{item.clientName}</span>
                    </div>

                    <h3 className={ask.timu}>{item.coverTitle}</h3>
                    <p className={ask.miaoshu}>{item.coverSummary}</p>
                    <p>{item.hotNum}个赞</p>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      this.tiao1(item.contentId)
                    }}
                    className={ask.kuai2}
                    key={index}
                  >
                    <h1 className={ask.timu1}>{item.coverTitle}</h1>
                    <div className={ask.kuai3}>
                      <img
                        className={ask.touxiang2}
                        src={item.recipe.image}
                        alt=""
                      />
                      <div className={ask.kuai4}>
                        <p className={ask.ming}>{item.recipe.title}</p>
                        <p className={ask.zuozhe}>
                          作者：{item.recipe.clientName}
                        </p>
                      </div>
                    </div>
                    <div className={ask.kuai5}>
                      <p>
                        {item.answerNum === 0
                          ? '暂无回答'
                          : item.answerNum + '个回答'}
                      </p>
                      <p className={ask.xie}>
                        <img
                          className={ask.touxiang3}
                          src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40"
                          alt=""
                        />
                        写答案
                      </p>
                    </div>
                  </div>
                )
              // <div>{item.coverTitle}</div>
            )}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(QuestionAndAnswer)
