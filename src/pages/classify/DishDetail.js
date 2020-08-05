import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Swiper from 'swiper';
import dishDetail from "../../scss/classify/dishDetail.module.scss"



class DishDetail extends Component {
    constructor() {
        super()
        this.state = {
            list_detail: [],//定义数组
            time: '',//数据里的时间
            images: [],//定义数据里的图片渲染页面
            activekey: 3,//评论默认显示的key值，3是评论，1是点赞，2打赏
            commentList: [],//定义评论数据的数组
            tab: [],
            isshow: false,//定义弹窗显示属性
            style: {//定义弹窗图片的大小，这里固定大小
                width: "100%",
                height: "400px",
                marginTop: '130px'
            }


        }
    }
    componentDidMount() {
        this.get_detail()
        this.get_comment()
    }
    //获取作业详情数据
    get_detail = () => {
        axios.get(`https://api.hongbeibang.com/dish/get?contentId=${this.props.match.params.id}`)
            .then((res) => {
                this.setState({
                    list_detail: res.data.data.dish,
                    time: res.data.data.dish.createTime,
                    images: res.data.data.dish.image,


                }, () => {
                    this.setState({
                        //定义下方点击切换的tab，通过key值判断显示
                        tab: [
                            {
                                name: '点赞',
                                key: 1,
                                num: this.state.list_detail.likeNum
                            },
                            {
                                name: '打赏',
                                key: 2,
                                num: this.state.list_detail.rewardNum
                            },
                            {
                                name: '评论',
                                key: 3,
                                num: ''
                            },
                        ]
                    })
                    // console.log(this.state.list_detail)
                })
            })
    }
    //获取评论详细数据
    get_comment() {
        axios.get(`https://api.hongbeibang.com/comment/getFloor?pageIndex=0&pageSize=10&contentId=${this.props.match.params.id}`)
            // axios.get("http://47.105.216.247/cureSystem-1.0-SNAPSHOT/recipe/getAllRecipe.action")
            .then((res) => {
                console.log(res)
                this.setState({
                    commentList: res.data.data.data
                }, () => {
                    // console.log(this.state.commentList)
                })
            })
    }
    //点击切换下方tab，选项卡功能
    changeKey = (key) => {
        this.setState({
            activekey: key
        })
    }
    //点击图片打开弹窗大图显示
    imgClick = (data, index) => {
        this.setState({
            imgs: data,
            isshow: true
        }, () => {
            new Swiper('.swiper-container', {
                //进来默认展示第几个
                initialSlide: index,
                // loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                //修改swiper自己或子元素时，自动初始化swiper 
                // observer:true,
                // observeParents:true
            })
        })

    }
    //关闭弹窗
    onClose() {
        this.setState({
            isshow: false
        })
    }
    //点击头像跳转个人详情页面
    toClient = (id) => {
        this.props.history.push(`/client/${id}`)
    }
    //点击跳转回食谱页面
    toRecipe = (id) => {
        this.props.history.push(`/recipe/${id}`)
    }
    //点击返回上一页
    back = () => {
        this.props.history.go(-1)
    }

    render() {
        let { list_detail, time, images, commentList, tab, activekey, isshow } = this.state

        let style = {
            width: "100%",
            height: '400px',
            marginTop: "180px"
        }
        return (
            <Fragment>
                <div className={dishDetail.top} onClick={this.back.bind(this)}>
                    <img src={require("../../imgs/left.png")} alt="" />
                    <h4>作品</h4>
                </div>
                <div className={isshow ? dishDetail.swiper : dishDetail.swiper1} onClick={this.onClose.bind(this)}>
                    <div className='swiper-container' ref="swiper">
                        <div className='swiper-wrapper'>
                            {
                                images.map((item, index) => {
                                    return (
                                        <div className='swiper-slide' key={index} style={style}>
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                            <div className="swiper-pagination"></div>

                        </div>
                    </div>

                </div>
                <div className={dishDetail.box}>
                    <div className={dishDetail.main}>
                        <div className={dishDetail.person}>
                            <div className={dishDetail.div1} onClick={this.toClient.bind(this, list_detail.clientId)}>
                                <img src={list_detail.clientImage} alt="" />
                            </div>
                            <div className={dishDetail.div2} >
                                <p className={dishDetail.authorname}>{list_detail.clientName}</p>
                                <p className={dishDetail.time}><span>{time.substring(0, time.length - 3)}</span><span>{list_detail.coverTitle}</span></p>
                            </div>
                            <div className={dishDetail.div3}>+关注</div>

                        </div>
                        <div className={dishDetail.text} >{list_detail.coverSummary}</div>
                        <div className={dishDetail.imgbox}>
                            {
                                images.map((item, index) => {
                                    return (
                                        <img src={item} alt="" key={index}
                                            className={images.length === 2 ? dishDetail.img1 :
                                                images.length === 1 ? '' : dishDetail.img3} onClick={this.imgClick.bind(this, images, index)} />
                                    )
                                })
                            }
                        </div>
                        <div className={dishDetail.back}>
                            <span className={dishDetail.span1}>{list_detail.coverTitle}</span>
                            <span className={dishDetail.span2} onClick={this.toRecipe.bind(this, list_detail.parentContentId)}>找食谱 ＞</span>
                        </div>
                    </div>
                    <div className={dishDetail.comment}>
                        <div className={dishDetail.commentTitle}>
                            {
                                tab.map((item, index) => {
                                    return <div key={index} onClick={this.changeKey.bind(this, item.key)}
                                        className={activekey === item.key ? dishDetail.active : ''}>{item.name} {item.num}</div>
                                })
                            }
                        </div>
                        {/* 通过三元判断，点击的是哪个，让下边显示 */}
                        <div className={[`${dishDetail.zan}`, `${activekey === 1 ?
                            dishDetail.style1 : activekey === 2 ? dishDetail.style1 : dishDetail.style}`].join(' ')}>
                            {
                                activekey === 1 ? "快来点赞吧" : activekey === 2 ? "打赏一下吧" : ''
                            }
                        </div>
                        <div className={activekey === 3 ? dishDetail.comment_text : dishDetail.style}>
                            {/* 判断是否有评论，没有就不显示 */}
                            <div className={commentList.length ? dishDetail.style : dishDetail.commentkong}>快来发表你的评论吧！</div>
                            {
                                commentList.map((item, index) => {
                                    return <div key={index} className={dishDetail.comment_item}>
                                        <div className={dishDetail.imgbox_left}>
                                            <img src={item.clientImage} alt="" />
                                        </div>
                                        <div className={dishDetail.div_right}>
                                            <div className={dishDetail.name1} >{item.clientName}</div>
                                            <div className={dishDetail.time1}>{item.createTime}</div>
                                            <p> {item.coverSummary}</p>
                                            <div className={item.comments.data.length ? dishDetail.reply : dishDetail.reply1}>
                                                {
                                                    item.comments.data.map((item1, index1) => {
                                                        return (
                                                            <div key={index1} className={item.comments.data ? dishDetail.reply_item : dishDetail.reply_item1}>
                                                                <span>{item1.clientName}</span>回复<span>{item1.commentClientName}</span>: {item1.coverSummary}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                    <ul className={dishDetail.ulfixed}>
                        <li>点赞:{list_detail.likeNum}</li>
                        <li>打赏:{list_detail.rewardNum}</li>
                        <li>评论</li>
                    </ul>
                </div>
            </Fragment >
        )
    }
}
export default withRouter(DishDetail)
