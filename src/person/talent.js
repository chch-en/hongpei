import React, { Component, Fragment } from 'react'
import xunzhang from '../scss/medal.module.scss'
import { withRouter } from 'react-router-dom'
class medal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  clicked(param, event) {
    alert('对不起，您没有权限申请达人')
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
        <div className={xunzhang.hezi}>
          <div>
            <h1>什么是食谱达人？</h1>
            <p>
              <span>
                烘焙帮活跃优质达人，热爱烘焙并对烘焙有深度见解，制作能力强，能够上传优质烘焙内容（优秀食谱、作品、测评、视频等）。与烘焙帮共同创造优质烘焙社区，共同成长。
              </span>
            </p>
            <h1>怎样成为食谱达人</h1>
            <p>
              <span>达到以下要求，可通过达人认证，成为食谱达人：</span>
            </p>
            <p>
              <span>
                1.
                至少上传20篇烘焙类食谱，且被推荐首页8次以上（头条日被推荐的食谱不计）
              </span>
            </p>
            <p>
              <span>2.或者上传的食谱中，有5篇以上优秀食谱</span>
            </p>
            <p>
              <span>凡满足以上两个要求之一，都可以申请成为达人。</span>
            </p>
            <h1>食谱达人特权？</h1>
            <p>
              <span>1. 专属达人勋章全站展示；</span>
            </p>
            <p>
              <span>2. 优先参与产品试用活动；</span>
            </p>
            <p>
              <span>3. 站内上传食谱奖励300帮贡。</span>
            </p>
            <h1>食谱达人要求？</h1>
            <p>
              <span>
                1. 食谱达人须每月至少上传一篇优秀食谱，否则勋章将会被收回。
              </span>
            </p>
            <p>
              <span>2. 食谱达人需遵守烘焙帮社区规范</span>
            </p>
            <p>
              <span>3. 食谱达人需进入“烘焙帮美食达人群”，不得擅自退群。</span>
            </p>
            <h1>您当前的状态</h1>
            <p className={xunzhang.jieshao}>
              <span>您当前还不是食谱达人</span>
            </p>
            <button
              className={xunzhang.anniu}
              onClick={(event) => this.clicked()}
            >
              申请认证
            </button>
            <p className={xunzhang.jieshao}>
              <span>每隔15太难可申请一次</span>
            </p>
            <p className={xunzhang.jieshao}>
              <span>将在3个工作日内完成审核并私信通知结果</span>
            </p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(medal)
