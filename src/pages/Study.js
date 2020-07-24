import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MyRouter from '../mock/MyRouter'
import router from '../Router/StudyRouter'
export default class Study extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <nav>
          {/* 默认选中项 */}
          <NavLink exact to={'/skill'}>
            {'技巧百科'}
          </NavLink>
          <NavLink exact to={'/school'}>
            {'视频学堂'}
          </NavLink>

          <NavLink exact to={'/novice'}>
            {'新手教程'}
          </NavLink>
          <NavLink exact to={'/classify'}>
            {'食谱分类'}
          </NavLink>
        </nav>
        学烘培
        <MyRouter router={router}></MyRouter>
      </div>
    )
  }
}
