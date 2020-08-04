import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom';
import alldish from "../../scss/classify/alldish.module.scss"
import axios from 'axios';
import Swiper from "swiper"




class AllDish extends Component {
    constructor() {
        super()
        this.state = {
            list_alldish: [],//全部作业数组
            pageIndex: 0,//定义再次加载数据的参数
            imgs: [],//弹窗所有图片的数组
            isshow: false,//定义弹窗显示属性
            style: {//定义弹窗图片的大小，这里固定大小
                width: "100%",
                height: "400px",
                marginTop: '130px'
            }
        }

    }
    componentDidMount() {
        this.get_alldish()
    }
    //点击过来拿到所有数据
    get_alldish = () => {
        axios.get(`https://api.hongbeibang.com/dish/getAll?&pageIndex=${this.state.pageIndex}&pageSize=10&contentId=${this.props.match.params.id}`)
            .then((res) => {
                if (this.state.list_alldish.length === 0) {
                    this.setState({
                        list_alldish: res.data.data.dish.data

                    })
                } else {
                    let newArr = this.state.list_alldish
                    newArr = newArr.concat(res.data.data.dish.data)
                    this.setState({
                        list_alldish: newArr
                    }, () => {
                        console.log(this.state.list_alldish)
                    })
                }

            })
    }
    //滚动事件，修改发送请求参数
    get_Scroll = (e) => {
        let { scroll } = this.refs
        // scrollTop为滚动条在Y轴上的滚动距离。
        // clientHeight为内容可视区域的高度。
        // scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。
        if (scroll.scrollHeight >
            scroll.clientHeight && scroll.scrollHeight - (scroll.scrollTop +
                scroll.clientHeight) < 1 && scroll.scrollHeight - (scroll.scrollTop +
                    scroll.clientHeight) > -1) {

            this.setState({
                pageIndex: this.state.pageIndex + 10,
            }, () => {
                this.get_alldish()
            })
        }
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
    //点击作业内容跳转作业详情页
    toDishDetail = (id) => {
        this.props.history.push(`/dishDetail/${id}`)
        console.log(`${id}`)
    }
    //点击头像跳转至个人详情页
    toClient = (id) => {
        // this.props.history.push(`/client/${id}`)
    }
    //点击返回上一页
    back = () => {
        this.props.history.go(-1)
    }


    render() {
        let { list_alldish, style, imgs, isshow } = this.state
        return (
            <Fragment>
                <div className={isshow ? alldish.swiper : alldish.swiper1} onClick={this.onClose.bind(this)}>
                    <div className='swiper-container' ref="swiper">
                        <div className='swiper-wrapper'>
                            {
                                imgs.map((item, index) => {
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
                <div className={alldish.top} onClick={this.back.bind(this)}>
                    <img src={require("../../imgs/left.png")} alt="" />
                    <h4>烘焙帮</h4>
                </div>
                <div className={alldish.content} ref="scroll" onScroll={this.get_Scroll}>
                    <div className={alldish.kong}></div>


                    {
                        list_alldish.map((item, index) => {
                            return <div key={index} className={alldish.item}>
                                <div className={alldish.person}>
                                    <div className={alldish.div1} onClick={this.toClient.bind(this, item.clientId)}>
                                        <img src={item.clientImage} alt="" />
                                    </div>
                                    <div className={alldish.div2} onClick={this.toDishDetail.bind(this, item.contentId)}>
                                        <p className={alldish.authorname}>{item.clientName}</p>
                                        <p className={alldish.time}><span>{item.createTime.substring(0, item.createTime.length - 3)}</span><span>{item.coverTitle}</span></p>
                                    </div>

                                </div>
                                <div className={alldish.text} onClick={this.toDishDetail.bind(this, item.contentId)}>{item.coverSummary}</div>
                                <div className={alldish.imgbox}>
                                    {
                                        item.image.map((item1, index1) => {
                                            return (
                                                <img src={item1} alt="" key={index1}
                                                    onClick={this.imgClick.bind(this, item.image, index1)}
                                                    className={item.image.length === 2 ? alldish.img1 :
                                                        item.image.length === 1 ? '' : alldish.img3} />
                                            )
                                        })
                                    }
                                </div>
                                <div className={alldish.ul_bottom}>
                                    <div>点赞: {item.likeNum}</div>
                                    <div>打赏: {item.rewardNum}</div>
                                    <div>评论</div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </Fragment>
        )
    }
}
export default withRouter(AllDish)
