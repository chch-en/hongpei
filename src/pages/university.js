import React, { Component } from 'react'
import Axios from 'axios'
export default class university extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lessonList: [],
            goodsList: [],

        }
    }
    componentDidMount() {
        this.get_Recommond()
        this.get_Seemore()


    }
    // 上方导航以及id
    get_Recommond = () => {
        Axios.get("https://api.hongbeibang.com/index/getByType?type=11").then((res) => {
            console.log(res.data.data)
            this.setState({
                goodsList: res.data.data
            })
        })
    }
    // 推荐
    get_Seemore = () => {
        Axios.get("https://api.hongbeibang.com/education/getIndexByWeb?").then((res) => {
            let arr = res.data.data.category.splice(1, 9)
            console.log(arr)
            this.setState({
                lessonList: arr
            })
        })
    }
    render() {
        return (
            <div>
                臭死爹了
            </div>
        )
    }
}
