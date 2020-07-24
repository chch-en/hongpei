import React, { Component, Fragment } from 'react'
import miao from '../scss/my.module.scss'

export default class My extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        {/* 头部 */}
        <div className={miao.top}>
          {/* 头像 */}
          <div>
            <img
              className={miao.image1}
              src="https://image.hongbeibang.com/FsV_6LPxNhjLMxvjxNc2FTs9VF3E?132X132&imageView2/1/w/132/h/132"
              alt=""
            />
          </div>
          {/* 姓名、等级、性别 */}
          <div>
            <div className={miao.sex}>
              <span className={miao.name}>松月</span>
              <img
                className={miao.image2}
                src="https://image.hongbeibang.com/Fkwt9tYiYAFxX-lC-WHvmbPSOUwv?94X94&imageView2/1/w/30/h/30"
                alt=""
              />
              <img
                className={miao.image3}
                src="https://image.hongbeibang.com/Fli0GEzzpuUq9ddumWbYe7mEsJf4?200X200&imageView2/1/w/50/h/50"
                alt=""
              />
            </div>
            {/* id、修改个人信息 */}
            <div className={miao.math}>
              <p className={miao.zi}>ID:1111222222221111111</p>
              <img
                className={miao.image4}
                src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 关注、粉丝、帮贡 */}
        <div>
          <ul className={miao.xinxi}>
            <li>
              <div> 0</div>关注
            </li>
            <li>
              <div> 0</div>粉丝
            </li>

            <li>
              <div> 0</div>帮贡
            </li>
          </ul>
        </div>
        {/* 作品、食谱、收藏、问题 */}
        <div>
          <ul className={miao.works}>
            <li
              onClick={() => {
                this.props.history.push('/works')
              }}
            >
              <img
                src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80"
                alt=""
              />
              <p>作品</p>
            </li>
            <li
              onClick={() => {
                this.props.history.push('/recipes')
              }}
            >
              <img
                src="https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80"
                alt=""
              />
              <p>食谱</p>
            </li>
            <li>
              <img
                src="https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80"
                alt=""
              />
              <p>收藏</p>
            </li>
            <li
              onClick={() => {
                this.props.history.push('ask')
              }}
            >
              <img
                src="https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80"
                alt=""
              />
              <p>问题</p>
            </li>
          </ul>
          <hr className={miao.hang} />
        </div>
        {/* 活动 */}
        <div>
          <ul className={miao.activity}>
            <li
              onClick={() => {
                this.props.history.push('/medal')
              }}
            >
              <div>
                <img
                  src="https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48"
                  alt=""
                />
                <p>勋章库</p>
              </div>
              <img
                className={miao.image4}
                src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                alt=""
              />
            </li>
            <li
              onClick={() => {
                this.props.history.push('/activity')
              }}
            >
              <div>
                <img
                  src="https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48"
                  alt=""
                />
                <p>精彩活动</p>
              </div>
              <img
                className={miao.image4}
                src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                alt=""
              />
            </li>
            <li
              onClick={() => {
                this.props.history.push('/sign')
              }}
            >
              <div>
                <img
                  src="https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48"
                  alt=""
                />
                <p>每日签到</p>
              </div>
              <img
                className={miao.image4}
                src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                alt=""
              />
            </li>
            <li
              onClick={() => {
                this.props.history.push('/course')
              }}
            >
              <div>
                <img
                  src="https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48"
                  alt=""
                />
                <p>我的课程</p>
              </div>
              <img
                className={miao.image4}
                src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                alt=""
              />
            </li>
            <li
              onClick={() => {
                this.props.history.push('/history')
              }}
            >
              <div>
                <img
                  src="https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48"
                  alt=""
                />
                <p>浏览记录</p>
              </div>
              <img
                className={miao.image4}
                src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                alt=""
              />
            </li>
            <li
              onClick={() => {
                this.props.history.push('/talent')
              }}
            >
              <div>
                <img
                  src="https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48"
                  alt=""
                />
                <p>达人申请</p>
              </div>
              <img
                className={miao.image4}
                src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                alt=""
              />
            </li>
            <li
              onClick={() => {
                this.props.history.push('/contribution')
              }}
            >
              <div>
                <img
                  src="https://image.hongbeibang.com/Fn2YVwr3Ng_AQlJvQCWtBoRBDyjR?48X48&imageView2/1/w/48/h/48"
                  alt=""
                />
                <p>帮贡兑换</p>
              </div>
              <img
                className={miao.image4}
                src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                alt=""
              />
            </li>
          </ul>
        </div>
      </Fragment>
    )
  }
}
