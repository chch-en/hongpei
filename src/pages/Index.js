import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom"
import MyRouter from "../mock/MyRouter"
import Head from "../scss/Head.module.scss"
import Icon from "../Toc/Icon"

class Index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    const { childrenaa } = this.props
  }

  render () {
    const { childrenaa } = this.props
    return (
      <div>
        {/* 下方导航点击变色未做 */}
        <div className={Head.Footer}>
          <ul>
            <li onClick={() => {
              this.props.history.push("/")
            }}>
              <div className={Head.FootImg}>
                <img src="https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50" alt="" />
              </div>
              <div className={Head.FootTxt}>
                <span>学烘培</span>
              </div>
            </li>
            <li onClick={() => {
              this.props.history.push("/show")
            }}>
              <div className={Head.FootImg}>
                <img src="https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50" alt="" />
              </div>
              <div className={Head.FootTxt}>
                <span>烘培圈</span>
              </div>
            </li>
            <li onClick={() => {
              this.props.history.push("/questionAndAnswer")
            }}>
              <div className={Head.FootImg}>
                <img src="https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50" alt="" />
              </div>
              <div className={Head.FootTxt}>
                <span>问答</span>
              </div>
            </li>
            <li onClick={() => {
              this.props.history.push("/my")
            }}>
              <div className={Head.FootImg}>
                <img src="https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50" alt="" />
              </div>
              <div className={Head.FootTxt}>
                <span>小窝</span>
              </div>
            </li>
          </ul>
        </div>
        <MyRouter router={childrenaa}></MyRouter>
      </div>
    )
  }
}

export default withRouter(Icon(Index))