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
          <h1>烘焙帮</h1>
        </div>
        <div className={xunzhang.box}>
          <div className={xunzhang.notice}>
            <h1>关于“帮贡商场系统升级”公告</h1>
            <p>
              <span>亲爱的帮友们：</span>
            </p>
            <p>
              <span>帮贡商场已于2018年7月25日升级完成！本次升级：</span>
            </p>
            <p>
              <span>1、“帮贡商城”增加了很多可兑换的礼品哦；</span>
            </p>
            <p>
              <span>
                2、
                <span className={xunzhang.xia}>
                  暂停“帮贡商城”网页版的服务支持
                </span>
                ，请需要兑换的帮友，
                <a
                  className={xunzhang.lan}
                  href="https://a.app.qq.com/o/simple.jsp?pkgname=com.hongbeibang.app&channel=0002160650432d595942&fromcase=60001"
                >
                  点击这里下载APP
                </a>
                ，在APP中进行兑换；
              </span>
            </p>
            <p>
              <span>
                感谢所有帮友对此次升级的理解与配合，我们也将继续不懈努力，为广大帮友提供更好的服务！
              </span>
            </p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(medal)
