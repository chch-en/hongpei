import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import MyRouter from "../mock/MyRouter"
import Head from "../scss/Head.module.scss"
import Axios from 'axios'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [],
            lessonList: [],
            arr: [],
            loading:true,
        }
    }
    componentDidMount() {

        this.get_Recommond()
        this.get_Seemore()

    }
    get_Recommond = () => {
        Axios.get("https://api.hongbeibang.com/recommend/getRandContent?type=3&pageSize=10").then((res) => {
            this.setState({
               
                goodsList: res.data.data.data
            })
        })
    }
    get_Seemore = () => {
        Axios.get("https://api.hongbeibang.com/education/getIndexByWeb?").then((res) => {
            let arr = res.data.data.category.splice(1, 9)
            this.setState({
                lessonList: arr,
                loading:false,
            })
        })
    }
    render() {
      
        let { goodsList, lessonList ,loading} = this.state

        return (
          loading ? <img src="/lan.gif" alt="" className="lan" /> :
            <div>

                <div className={Head.Header}>

                    <div className={Head.small}>
                        <img src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" />
                    </div>
                    <div className={Head.center}>
                        <img src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt="" />
                        <span>搜索食谱/食材，烘焙/家常菜一应俱全</span>
                        <input className={Head.search} type="text" />
                    </div>
                    <div className={Head.small}>
                        <img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" />
                    </div>
                </div>
                <div style={{ width: '100%', height: '44px' }}></div>
                <div className={Head.Nav}>
                    <div className={Head.Nav_four}>
                        <div className={Head.Nav_img}>
                            <img src="https://image.hongbeibang.com/FqTIqQgUiGzbGvFBjYJyJRIvmb7W?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                        <div className={Head.Nav_txt}
                            onClick={() => {
                                this.props.history.push("/skill")
                            }}
                        >
                            <span>技巧百科</span>
                        </div>
                    </div>
                    <div className={Head.Nav_four}>
                        <div className={Head.Nav_img}>
                            <img src="https://image.hongbeibang.com/FsdwLQX6d3HCUvTO6krgAvL12e5z?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                        <div className={Head.Nav_txt}
                            onClick={() => {
                                this.props.history.push("/school")
                            }}
                        >
                            <span>视频学堂</span>
                        </div>
                    </div>
                    <div className={Head.Nav_four}>
                        <div className={Head.Nav_img}>
                            <img src="https://image.hongbeibang.com/Ftas3mziKsE3fMQvZ3jC4YgDugVk?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                        <div className={Head.Nav_txt}
                            onClick={() => {
                                this.props.history.push("/novice")
                            }}
                        >
                            <span>新手教程</span>
                        </div>
                    </div>
                    <div className={Head.Nav_four}>
                        <div className={Head.Nav_img}>
                            <img src="https://image.hongbeibang.com/FqkRcAKpMnFUL3qs1BB9aOhbihlj?80X80&imageView2/1/w/80/h/80" alt="" />
                        </div>
                        <div className={Head.Nav_txt}
                            onClick={() => {
                                this.props.history.push("/classify")
                            }}
                        >
                            <span>食谱分类</span>
                        </div>
                    </div>
                </div>
                {/* 产品栈 */}
                <div className={Head.Goods}>
                    <div className={Head.Title}>
                        <p>推荐课程</p>
                    </div>
                    <div className={Head.recommend}>

                        {
                            goodsList.map((v, index) => (
                                <div key={index} className={Head.lei}>
                                    <img src={v.coverImage} alt="" />
                                    <p>{v.coverTitle}</p>
                                    <div className={Head.Study}>{v.buyNum >= 1000 ? `1000+在学` : `${v.buyNum}在学`}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={Head.Lesson}>
                    {
                        lessonList.map((q, index) => (
                            <div key={index} className={Head.lessonLists}>
                                <div className={Head.LTitle}>
                                    <div className={Head.LTitleLeft}>{q.title}</div>
                                    <div className={Head.LTitleRight}><span>查看更多</span></div>

                                </div>
                                <div className={Head.tan} >

                                    {
                                        q.item.map((w, index) => (
                                            <div key={index} className={Head.Llei}>
                                                <img src={w.image} alt="" />
                                                <p>{w.title}</p>
                                                <div className={Head.LStudy}>{w.buyNum >= 1000 ? `1000+在学` : `${w.buyNum}在学`}</div>
                                            </div>

                                        ))
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className={Head.CopyRight}>
                    <div><a href="#">Copyright © hongbeibang.com 粤ICP备14090926号-1</a></div>
                    <div><img src="http://image.hongbeibang.com/FinEALw7ifYIV2baxOAzDe1ctz1S?20X20" alt="" /><a href="#">粤公网安备 44060602001356号</a></div>
                </div>


                {/* <MyRouter router={router}></MyRouter> */}
            </div>
        )
    }
}

