import React, { component } from 'react'
import Baking_circle from "../scss/Baking_circle.module.scss"
import axios from "axios"

function Head (Com) {

  return class componentName extends React.Component {


    constructor() {
      super()
      this.state = {
        quan: [{ a: "关注", b: "关注" }
          , { a: "最新", b: "https://api.hongbeibang.com/v2/feed/getNew?pageIndex=0&pageSize=10" }
          , { a: "达人", b: "https://api.hongbeibang.com/v2/feed/getMasterNew?pageIndex=0&pageSize=10" }],
        list: [],
        list_classify: [],   //classify 分类 
        list_user: '',
        is_active: '',
        index: 6,
      }
     
    }

    componentDidMount () {
      this.quan_user()
    }

    quan_user = (value = "https://api.hongbeibang.com/v2/feed/getNew?pageIndex=0&pageSize=10", key = 1) => {
      console.log(value)
      if (value === "关注") {
        this.props.history.push("/login")
      }
      axios.get(value).then((res) => {
        // console.log(res)

        this.setState({
          list_user: res.data.data.content,
          is_active: value,
          index: key,
        })
      })
    }

    render () {

      return <Com {...this.state}>
        (<div>
          <div className={Baking_circle.head}>
            <h3><img src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" /></h3>
            <ul>
              {quan.map((item, key) => (
                <li className={(is_active === item.b) ? Baking_circle.active : ''} key={key} onClick={() => {
                  this.quan_user(item.b, key)
                }}> {item.a} </li>
              ))}
            </ul>
            <div><img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" /></div>
          </div>

        </div>)
      </Com>
    }

  }
}
export default Head