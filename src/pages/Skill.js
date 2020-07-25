// 首页视频学烫页面   skill 文件夹下为子路径  
import React, { Component } from 'react'
import { withRouter} from "react-router-dom"
import skill from "../scss/skill.module.scss"
import { baike } from "../api"
export default withRouter(class Skill extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      showElem:true,
    }
  }

  componentDidMount () {
    baike().then((res) => {
      console.log(res)
      this.setState({
        list: res.data.data.courseGuide
      })
    })
  }

  // 点击跳转路由传入id
  Newbie = (id) => {
    this.props.history.push(`/newbie/${id}`) 
  }
  render () {
    // console.log(this.props)
    let list = this.state.list.slice(0, 8)
    // console.log(list)
    return (

      <div className={skill.content}>
        <div className={skill.head}>
          <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" onClick={()=>{
            this.props.history.push("/")

          }}/>
        </div>
        <div className={skill.type_mian}>
          <ul>

            {list.map((item) => (

              <li key={item.courseId} className={skill.aLi} onClick={() => {
                this.Newbie(item.courseId)
              }}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div className={skill.right} >
                  {item.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
     { this.state.showElem?(
        <div className={skill.mao} >
          <img src="https://image.hongbeibang.com/FqrNwXey8HDGxtROft8FVPUMPEwE" alt="" />
          <p className={skill.nall} onClick={ ()=>{
             this.setState({
               showElem:false
             })
          }}>X</p>
        </div>
        ):null}

      </div>

    )
  }
})
