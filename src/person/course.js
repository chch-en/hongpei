import React, { Component, Fragment } from 'react'
import xunzhang from '../scss/medal.module.scss'
import { withRouter } from 'react-router-dom'
class medal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    window.onload = () => {
      this.setState({ loading_page: false })
    }
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
          <h1>我的课程</h1>
        </div>
        <div className={xunzhang.course}>
          <img
            className={xunzhang.tiyan}
            src="https://image.hongbeibang.com/FhGntq9cteLqYmKBst8odEj2js4a"
            alt=""
          />
          <p>
            <span>安装并打开烘焙帮APP，进入【学堂】-【我的课程】</span>
          </p>
          <p>
            <span>使用当前微信登陆，即可开始上课啦！</span>
          </p>
          <img
            className={xunzhang.tiyan1}
            src="https://image.hongbeibang.com/FmT6ScIhrkuIb-nLzojIfZ7ifG_r"
            alt=""
          />
        </div>
        <div className={xunzhang.ad}>
          <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.hongbeibang.app">
            <img
              className={xunzhang.tiyan2}
              src="https://image.hongbeibang.com/FkWT1DTkgRDLyx2rpWSU8WzA7Yo5"
              alt=""
            />
          </a>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(medal)
