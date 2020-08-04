import React, { Component } from 'react'
import Axios from 'axios'
import nnovice from "../scss/nnovice.module.scss"
export default class Novice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [],
            jobList: [],
            shouList: {}
        }
    }
    componentDidMount() {
        this.get_Recommond()
        this.get_Job()
        this.get_Shou()
        const { childrenaa } = this.props
        console.log(childrenaa)
    }
    // 新手教程首页
    get_Shou = () => {
        Axios.get("https://api.hongbeibang.com/education/getCourse?educationCourseId=10533").then((res) => {
            console.log(res.data.data)
            this.setState({
                shouList: res.data.data
            })
        })
    }
    // 课程目录
    get_Recommond = () => {
        Axios.get("https://api.hongbeibang.com/education/getSeriesCourse?pageIndex=0&pageSize=10&educationCourseId=10533").then((res) => {
            console.log(res.data.data.data)
            this.setState({
                goodsList: res.data.data
            })
        })
    } 
    // 作业目录
    get_Job = () => {
        Axios.get("https://api.hongbeibang.com/dish/getOutstandingCourseContent?pageIndex=0&pageSize=10&educationCourseId=10533").then((res) => {
            console.log(res.data.data.content.data)
            this.setState({
                jobList: res.data.data
            })
        })
    }
    render() {
        let { shouList } = this.state

        return (
            <div>
                <div className={nnovice.head}>
                    <img src={shouList.image} alt="" />
                </div>
                <div className={nnovice.title}>
                    <div className={nnovice.door}>新手烘焙专题：从入门到精通</div>
                    <div className={nnovice.study}>
                        <img src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54" alt="" />
                        <span className={nnovice.num}>1000+</span><span>人在学</span>
                    </div>
                    <div className={nnovice.by_step}>
                        <div className={nnovice.by_step_lift}>
                            <div className={nnovice.eight}>
                                <div className={nnovice.dian}></div>
                                <div className={nnovice.txt}>永久回看</div>
                            </div>
                            <div className={nnovice.eight}>
                                <div className={nnovice.dian}></div>
                                <div className={nnovice.txt}>报名即学</div>
                            </div>
                            <div className={nnovice.eight}>
                                <div className={nnovice.dian}></div>
                                <div className={nnovice.txt}>自营课程</div>
                            </div><div className={nnovice.eight}>
                                <div className={nnovice.dian}></div>
                                <div className={nnovice.txt}>高效学习体验</div>
                            </div><div className={nnovice.eight}>
                                <div className={nnovice.dian}></div>
                                <div className={nnovice.txt}>分步骤学</div>
                            </div><div className={nnovice.eight}>
                                <div className={nnovice.dian}></div>
                                <div className={nnovice.txt}>唯一品类</div>
                            </div><div className={nnovice.eight}>
                                <div className={nnovice.dian}></div>
                                <div className={nnovice.txt}>图片下载</div>
                            </div><div className={nnovice.eight}>
                                <div className={nnovice.dian}></div>
                                <div className={nnovice.txt}>工具材料参考</div>
                            </div>
                        </div>
                        <div className={nnovice.by_step_right}>
                            <img src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8" alt="" />
                        </div>
                    </div>
                </div>
                <div className={nnovice.course}>
                    <div className={nnovice.course_left}>
                        <span>课程介绍</span>
                        <div className={nnovice.di}></div>
                    </div>
                    <div className={nnovice.course_left}>
                        <span>课程目录</span>
                        <div className={nnovice.di}></div>
                    </div>
                    <div className={nnovice.course_left}>
                        <span>学员作业</span>
                        <div className={nnovice.di}></div>
                    </div>
                </div>
                <div className={nnovice.hr} ></div>
            </div >
        )
    }
}
