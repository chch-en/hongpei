import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'

class Client extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        this.get_all()
    }
    //获取数据
    get_all = () => {
        axios.get(`https://api.hongbeibang.com/client/getDish?pageIndex=0&pageSize=10&clientId=${this.props.match.params.id}`)
            .then((res) => {
                console.log(res)
            })
    }
    render() {
        return (
            <div>
                个人详情页面
                无登录token，暂时写不了
            </div>
        )
    }
}
export default withRouter(Client)
