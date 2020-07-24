import React, { Component, } from 'react';
import { baike_detail, baike_dd, baike_lun, aa } from "../../api/index"
import { withRouter} from "react-router-dom"

import skill from "../../scss/skill.module.scss"
import { BlockLoading } from 'zent';
class detail extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      list: {},
      step: '',
      tu: [],
      xia: [],
      loading: true
    }
  }

  componentDidMount () {
    
    let id = this.props.match.params.id

    // 获取 视频数据 
    baike_detail(id).then((res) => {
      // console.log(res)
      this.setState({
        loading: false,
        list: res.data.data,
        step: res.data.data.introduces[0].introduce,

      })

    })

    // 获取 推荐课程 数据
    baike_lun().then((res) => {
      // console.log(res)
      this.setState({
        tu: res.data.data.data
      })
    })

    // 获取 推荐课程 数据
    baike_dd().then((res) => {
      // console.log(res)
      this.setState({
        xia: res.data.data.category[0],
        // xia_a:res.data.data
      })

    })

  }


  render () {
    // 解构赋值 轮播图数组 视频数据  制作步骤数据
    let { list, step, tu, xia, loading } = this.state
    console.log(list)

    // console.log(xia)
    return (
      //视频部分

      <BlockLoading loading={loading} iconSize={64} iconText="加载中" height="800px">
      
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
      </BlockLoading>

    )

  }
}
export default withRouter(detail);