

import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios";
export default withRouter(class Rcamor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list_video: [],
            list_introduces: [],
            list_ClientOther: [],

        }

    }

    componentDidMount() {
        this.get_detailsList()
        this.get_ClientOther()

    }
    get_detailsList() {
        var api = 'https://api.hongbeibang.com/education/getCourse?educationCourseId=10480';
        axios.get(api).then((response) => {
            console.log(response.data.data)
            this.setState({
                list_video: response.data.data,
                list_introduces: response.data.data.introduces,
            })
        })
    }

    get_ClientOther() {
        var api = 'https://api.hongbeibang.com/course/getClientOtherCourse?&pageSize=10&educationCourseId=10481';
        axios.get(api).then((response) => {
            console.log(response.data.data.data)
            this.setState({
                list_ClientOther: response.data.data.data

            })
        })
    }
    render() {
        let { list_video, list_introduces, list_ClientOther } = this.state
        // console.log(this.props)
        // console.log(list_introduces)
        return (
            <Fragment>

                <div>
                    {/* video */}
                    <div>
                        <video
                            className="video_a"
                            src={list_video.playURL2} preload="auto"
                            controls="controls" autoPlay={false}
                            loop="loop"
                            width="100%" height="100%">
                        </video>
                    </div>

                    <div className="video_b">
                        {/* title */}
                        <div className="video_b_title">{list_video.title}</div>
                        {/* 课程介绍 */}
                        <div className="video_c_introduce">
                            <img className="video_c_introduce_img" src={"https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54"} />
                            <span className="video_c_introduce_span_a">853</span>
                            <span className="video_c_introduce_span_b">人在学</span>
                            <div className="video_c_introduce_js">
                                <div className="video_c_introduce_js_img">
                                    <img src={"https://image.hongbeibang.com/FvlaRxbO9YVI0n8uMoFepUzffkWK?imageView2/1/w/640/h/640"} />
                                </div>
                                <div className="video_c_introduce_js_sk">试看教程</div>
                            </div>
                        </div>
                    </div>

                    {/* 服务 */}
                    <div className="fuwu">

                        {/* 一 */}
                        <div className="fuwu_color">
                            <div className="fuwu_one">
                                <ul className="fuwu_ull">
                                    <div className="fuwu_dian"></div>
                                    <li>永久回看</li>
                                    <div className="fuwu_dian"></div>
                                    <li> 报名即学</li>
                                    <div className="fuwu_dian"></div>
                                    <li> 自营课程</li>
                                    <div className="fuwu_dian"></div>
                                    <li>高效学习体验</li>
                                </ul>
                            </div>
                            <div className="fuwu_two">
                                <ul className="fuwu_ull" >
                                    <div className="fuwu_dian"></div>
                                    <li> 分步骤学</li>
                                    <div className="fuwu_dian"></div>
                                    <li> 唯一品类</li>
                                    <div className="fuwu_dian"></div>
                                    <li> 图片下载</li>
                                    <div className="fuwu_dian"></div>
                                    <li>工具材料参考</li>
                                </ul>
                            </div>
                            {/* <span className="fuwu_dv">
                                <img className="fuwu_img" src={"https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8"} />
                            </span> */}
                        </div>

                    </div>

                    <div>
                        {/* 学生作业 */}
                        <div className="student">
                            <div className="student-a">
                                <div className="student-a-a">学员作业</div>
                                <div className="student-a-b">查看更多</div>
                            </div>

                            {/* 图片 */}
                            <div className="student-img">
                                <div className="student-img-a">
                                    <div className="student-img-b">
                                        <img src={"https://image.hongbeibang.com/FnmAETd21rtghNrSjRrToULDAZbe?1080X1440&imageView2/1/w/640/h/640"} />
                                    </div>
                                </div>
                                <div className="student-img-a">
                                    <div className="student-img-b">
                                        <img src={"https://image.hongbeibang.com/FvtFsQEesh0PRhRzkywtW2hRqAFk?1080X810&imageView2/1/w/640/h/640"} />
                                    </div>
                                </div>
                                <div className="student-img-a">
                                    <div className="student-img-b">
                                        <img src={"https://image.hongbeibang.com/FrgbkGWjb3j0aLVnfc8QrD0KGkRP?1080X810&imageView2/1/w/640/h/640"} />
                                    </div>
                                </div>
                                <div className="student-img-a">
                                    <div className="student-img-b">
                                        <img src={"https://image.hongbeibang.com/FgwAhzqwYO3JFbsrcYTGSmScTR-M?1080X810&imageView2/1/w/640/h/640"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 你将学会 */}
                    <div className="student-learn">
                        <ul>
                            {
                                list_introduces.map((item, index) => {
                                    {
                                        return (
                                            <div>
                                                <div className="student-learn-title">{item.title}</div>
                                                <div className="student-learn-learn" dangerouslySetInnerHTML={{ __html: item.introduce }} />
                                            </div>
                                        )
                                    }
                                }
                                )
                            }
                        </ul>
                    </div>
                    {/* 导师介绍 */}

                    <div className="jies_a">
                        <p className="jies_a_title">导师介绍</p>
                        <div className="jies_a_img">
                            <img className="jies_a_aimg" src={list_video.teacherImage} />
                            <div className="jies_a_name">{list_video.teacherName}</div>
                        </div>
                        <div>
                            <div className="jies_a_html" dangerouslySetInnerHTML={{ __html: list_video.teacherIntroduce }} />
                        </div>

                    </div>

                    {/* 导师其他课程 */}
                    <div className="kc">

                        <div className="ke_a">
                            <div className="ke_a_a"> <div className="ke_a_a_i">导师的其他课程</div></div>
                            <div className="ke_a_b">  <div className="ke_a_b_i">查看全部</div></div>
                        </div>
                        <div className="kc_aa">

                            {
                                list_ClientOther.map((item, index) => {
                                    return (
                                        <div className="kc_a">

                                            <div className="kc_a_a_i">
                                                <img className="kc_a_img" src={item.image} />
                                                <div className="kc_title">{item.title}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* 烘培学堂 */}
                    <div className="xt">
                        <img className="xt_img" src={"https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&imageView2/1/w/551/h/242"} />
                        <div className="xt_ziduan">
                            烘焙帮学堂，是由烘焙帮推出的课程品牌，
                            通过官方自制的教学视频，用科学的烘焙配方、
                            细致的步骤讲解、贴心的答疑服务，让烘焙更简单！
                        </div>
                        <div className="xt_aa">
                            <div className="xt_bb">
                                <div className="xt_bb">
                                    <img className="xt_bb_img" src={"https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&imageView2/1/w/100/h/116"} />
                                    <div className="xt_bb_zi">蛋糕</div>
                                </div>
                            </div>
                            <div className="xt_bb">
                                <div className="xt_bb">
                                    <img className="xt_bb_img" src={"https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116"} />
                                    <div className="xt_bb_zi">甜点</div>
                                </div>
                            </div>
                            <div className="xt_bb">
                                <div className="xt_bb">
                                    <img className="xt_bb_img" src={"https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116"} />
                                    <div className="xt_bb_zi">面包</div>
                                </div>
                            </div>
                            <div className="xt_bb">
                                <div className="xt_bb">
                                    <img className="xt_bb_img" src={"https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116"} />
                                    <div className="xt_bb_zi">中式点心</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="nn"></div>
                    {/* 尾部 */}
                    <div className="wei">
                        <div className="wei_a">
                            <img className="wei_a_img" src={"https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640"} />
                            <div className="wei_a_i">更多课程</div>
                        </div>
                        <div className="wei_a">
                            <img className="wei_a_img" src={"https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640"} />
                            <div className="wei_a_i">咨询</div>
                        </div>
                        <div className="wei_bu">
                            <div>
                                <span>&nbsp</span>
                                <span>9.9</span>
                                <span> </span>
                                <span>购买本课程</span>
                            </div>
                        </div>
                    </div>



                </div>

            </Fragment>

        )
    }
})