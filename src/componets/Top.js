import skill from "../scss/skill.module.scss"
import React from 'react'


// 函数组件 跳转到上一级的时候使用
function Top (props) {
  return (
  <div className={skill.head}>
    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" onClick={() => {
      props.history.go(-1)
    }} />
  </div>
  )
}

export default Top