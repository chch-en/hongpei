import React, { Component, } from 'react';
import { baike_detail,  baike_lun } from "../../api/index"
import { withRouter } from "react-router-dom"
import skill from "../../scss/skill.module.scss"

class detail extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      list: {},
      step: '',
      tu: [],
      loading: true
    }
  }

  componentDidMount () {

    let id = this.props.match.params.id
    console.log(this.props)
    // 获取 视频数据 
    baike_detail(id).then((res) => {
      console.log(res)
      this.setState({
        list: res.data.data,
        step: res.data.data.introduces[0].introduce,
      })
    })

    // 获取 推荐课程 数据
    baike_lun().then((res) => {
      console.log(res)
      this.setState({
        loading: false,
        tu: res.data.data.data
      })
    })
  }

  render () {
    // 解构赋值 轮播图数组 视频数据  制作步骤数据
    let { list, step, tu, loading } = this.state
    // console.log(list)

    return (
      //视频部分

      loading ? <img src="/lan.gif" alt="" className="lan" /> :
        <div className={skill.bie}>
          {
            list.title ? <video src={list.step[0].videoUrl} preload="auto" controls="controls" autoPlay={true} loop="loop" poster={list.image} width="100%" height="100%">
            </video> : ""
          }
          <h2> {list.title} </h2>

          {/* 过程部分 */}
          {/* 将字符串标签转化为html标签 */}
          <p className={skill.xiangqing} dangerouslySetInnerHTML={{ __html: step }} />

          {/* 下面推荐课程部分 */}
          <h2 className={skill.tuijian}>   <span>推荐课程</span>  <a onClick={() => {
            // this.props.history.push("")
          }}> 查看全部</a></h2>      {/* 查看全部跳转页面 */}
          <div className={skill.aa}>

            <div className={skill.box}>
              {tu.map((item) => (
                <div key={item.courseId}>
                  <img src={item.coverImage} alt="" />
                  {/* buyNum 大于1000为1000+ 否则为buyNum */}
                  <p className={skill.xuexi}> {(item.buyNum > 1000 ? ' 1000+在学' : item.buyNum + "在学")} </p>
                  <b> {item.title} </b>
                </div>
              )
              )}
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(detail);
