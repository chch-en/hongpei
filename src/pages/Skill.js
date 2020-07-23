import React, { Component } from 'react'
import skill from "../scss/skill.module.scss"
import { baike } from "../api"

export default class Skill extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
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

  Newbie = (id) => {

    this.props.history.push(`/newbie/${id}`)
    // this.props.history.push({pathname:"/newbie",id:id})
  }

  render () {
    // console.log(this.props)
    let list = this.state.list.slice(0, 8)
    // console.log(list)
    return (

        <div className={skill.content}>
          <div className={skill.head}>
            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
            {/* <h1></h1> */}
          </div>
          <div>
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

          <div className={skill.mao}>
            <img src="https://image.hongbeibang.com/FqrNwXey8HDGxtROft8FVPUMPEwE" alt="" />
          </div>
        </div>

    )
  }
}
