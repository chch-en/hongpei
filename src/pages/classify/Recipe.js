import React, { Component, Fragment } from 'react'
import axios from "axios"
import recipe from "../../scss/classify/recipe.module.scss"
import { withRouter } from 'react-router-dom';


class Recipe extends Component {
    constructor() {
        super()
        this.state = {
            list_detail: [],//定义展示数组
            list_foods: [],//定义食材数组
            list_step: [],//定义步骤数组
            list_dish: [],//作业数组
            list_recommend: [],//食谱推荐数组
            quantity: 1,//数量，接口的参数，实时修改请求后台
            list_authorcook: [],//定义作者食谱
            list_lesson: [],//推荐课程数据
            pageIndex: 0,//评论接口发送请求需要的参数
            pageSize: 10,
            list_comment: [],//评论数据列表
            comment_count: 0,//评论数量
            contentId: '',//定义点击更多作业需要的参数
            classifyName: "",//定义点击更多食谱需要的参数
        }
    }
    componentDidMount() {
        this.get_Detail(this.props.match.params.id, this.state.quantity)
        this.get_lesson()
        this.get_comment()
    }
    //页面跳转拿到详情数据
    //把接口中的两个参数，提到形参这，调用的时候传入实参
    get_Detail = (id, quantity) => {
        axios.get(`https://api.hongbeibang.com/recipe/get?contentId=${id}&quantity=${quantity}`)
            .then((res) => {
                this.get_authorCook(res.data.data.recipe.clientId) //作者的食谱是在调用完详情数据里拿到的，这里需要拿到id
                this.setState({
                    list_detail: res.data.data.recipe,
                    list_foods: res.data.data.recipe.material,
                    list_step: res.data.data.recipe.step,
                    list_dish: res.data.data.recipe.dish.data,
                    list_recommend: res.data.data.recipe.recipe,
                    classifyName: res.data.data.recipe.classify[2].classifyName,
                    contentId: res.data.data.recipe.contentId

                }, () => {
                    console.log(this.state.list_recommend)
                })
            })
    }

    //点击跳转更多作业页面
    to_alldish = (id) => {
        this.props.history.push(`/allDish/${id}`)
    }

    //点击食谱推荐更多跳转
    to_classifyDetail = (name) => {
        this.props.history.push(`/classifyDetail/${name}`)
    }

    //页面跳转拿到作者食谱，这里是另一个接口

    get_authorCook = (id) => {
        axios.get(`https://api.hongbeibang.com/client/getRecipe?pageIndex=0&pageSize=10&clientId=${id}`)
            .then((res) => {
                this.setState({
                    list_authorcook: res.data.data.cookClient.recipe.data
                }, () => {
                    // console.log(this.state.list_authorcook)
                })
            })

    }


    //推荐课程接口数据
    get_lesson = () => {
        axios.get("https://api.hongbeibang.com/recommend/getRandContent?type=3&pageSize=10")

            .then((res) => {
                this.setState({
                    list_lesson: res.data.data.data
                })
                // console.log(res.data.data.data)
            })
    }
    //评论数据接口
    get_comment = () => {

        axios.get(`https://api.hongbeibang.com/comment/getFloor?pageIndex=${this.state.pageIndex}&pageSize=${this.state.pageSize}&contentId=${this.props.match.params.id}`)
            .then((res) => {
                this.setState({
                    list_comment: res.data.data.data,
                    comment_count: res.data.data.count
                }, () => {
                    // console.log(res)

                })
            })
    }
    //修改页面数据
    inputChange = (e) => {
        let value = e.target.value
        this.setState({
            quantity: value
        }, () => {
            // console.log(this.state.quantity)
        })
    }
    //减少数量
    reduceNum = () => {
        let num = this.state.quantity - 1
        if (num <= 1) {
            num = 1
        }
        this.setState({
            quantity: num
        }, () => {
            this.get_Detail(this.props.match.params.id, this.state.quantity)
        })
    }
    //增加数量
    addNum = () => {
        this.setState({
            quantity: this.state.quantity + 1
        }, () => {
            this.get_Detail(this.props.match.params.id, this.state.quantity)
        })
    }
    //点击作业图片跳转到作业页面
    to_dishdetail = (id) => {
        this.props.history.push(`/dishDetail/${id}`)
    }
    //点击返回上一页
    back = () => {
        this.props.history.go(-1)
    }
    //点击推荐食谱，只是变换contentid 所以在点击事件中拿到contentid，传到方法当中
    get_newDetail = (id, quantity) => {
        //每次中加载需要重置 数量quantity
        this.setState({
            quantity: 1
        })
        this.props.history.push(`/recipe/${id}`) //这个相当于重新跳转了一遍这个页面，相当于刷新，但是id 改变了
        this.get_Detail(id, quantity) //调用接口，重新渲染
        window.scrollTo(0, 0) //重新加载需返回顶部
    }
    render() {
        let { list_detail, list_foods, list_step, list_dish,
            list_recommend, list_authorcook, list_lesson, list_comment, comment_count, classifyName, contentId, quantity } = this.state
        return (
            <Fragment>
                <div className={recipe.sousuo} onClick={this.back.bind(this)}>
                    <img src={require("../../imgs/left.png")} alt="" />
                </div>
                <div className={recipe.imgbox}>
                    <img src={list_detail.coverImage} alt="" />
                </div>
                <div className={recipe.author}>
                    <h2>{list_detail.coverTitle}</h2>
                    <div className={recipe.authorText}>
                        <div className={recipe.image}>
                            <div>
                                <img src={list_detail.image} alt="" />
                            </div>
                            <span>{list_detail.clientName}</span>
                        </div>
                        <div className={recipe.authorButton}>关注</div>

                    </div>
                    <p>{list_detail.coverSummary}</p>
                </div>
                <div className={recipe.foods}>
                    <h3>食材用料</h3>
                    <div className={recipe.food_change}>
                        <div className={recipe.change} onClick={this.reduceNum.bind(this)}>-</div>
                        <div className={recipe.input1}>
                            <input type="text" value={quantity} onChange={this.inputChange.bind(this)} />
                        </div>
                        <div className={recipe.change} onClick={this.addNum.bind(this)}>+</div>
                        <span>(份量/份)</span>
                    </div>
                    <ul className={recipe.food_detail}>

                        {

                            list_foods.map((item, index) => {
                                return <li key={index}>
                                    <div>{item.name}</div>
                                    <div>{item.weight}</div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className={recipe.stepbox}>
                    {list_step.map((item, index) => {
                        return <div key={index} className={recipe.steps}>
                            <h3>步骤{index + 1}</h3>
                            <img src={item.image} alt="" />
                            <p>{item.text}</p>
                        </div>
                    })}
                    <div className={list_detail.tip ? recipe.tips : recipe.tips2}>
                        <h2 >小贴士：</h2>
                        <p>{list_detail.tip}</p>
                    </div>
                </div>
                <div className={recipe.main}>
                    <div className={list_dish.length > 0 ? recipe.work : recipe.work1}>
                        <h2>
                            <span className={recipe.worktitle}> 作业</span>
                            <span className={recipe.span1} onClick={this.to_alldish.bind(this, contentId)}>查看全部</span>
                        </h2>
                        <div className={recipe.workcontent}>
                            {list_dish.map((item, index) => {
                                return <div key={index} className={recipe.work_author} onClick={this.to_dishdetail.bind(this, item.contentId)}>
                                    <img className={recipe.img1} src={item.image[0]} alt="" />
                                    <div className={recipe.work_name}>
                                        <img className={recipe.img2} src={item.clientImage} alt="" />
                                        <span>{item.clientName}</span>
                                    </div>
                                    <p>{item.coverSummary}</p>
                                    <div className={recipe.zan}>
                                        {/* <img src={require("../../../public/zan.png")} alt="" /> */}
                                        <span className={recipe.zannum}>点赞：{item.likeNum}</span>
                                    </div>

                                </div>

                            })}
                        </div>
                    </div>
                    <div className={recipe.show_work}>
                        <div>上传我的作品</div>
                    </div>
                    <div className={recipe.recommend}>
                        <h2>
                            <span className={recipe.worktitle}> 食谱推荐</span>
                            <span className={recipe.span1} onClick={this.to_classifyDetail.bind(this, classifyName)}>查看全部</span>
                        </h2>
                        <div className={recipe.reco_list}>
                            {
                                list_recommend.map((item, index) => {
                                    return <div key={index} className={recipe.reco_img} onClick={this.get_newDetail.bind(this, item.contentId, item.quantity)}>
                                        <img src={item.coverImage} alt="" />
                                        <p>{item.coverTitle}</p>
                                    </div>
                                })

                            }
                        </div>

                    </div>
                    <div className={recipe.recommend}>
                        <h2>
                            <span className={recipe.worktitle}>作者食谱</span>
                            <span className={recipe.span1}>查看全部</span>
                        </h2>
                        <div className={recipe.reco_list}>
                            {
                                list_authorcook.map((item, index) => {
                                    return <div key={index} className={recipe.reco_img}>
                                        <img src={item.coverImage} alt="" />
                                        <p>{item.coverTitle}</p>
                                    </div>
                                })

                            }

                        </div>

                    </div>
                    <div className={recipe.recommend}>
                        <h2>
                            <span className={recipe.worktitle}>推荐课程</span>
                            <span className={recipe.span1}>查看全部</span>
                        </h2>
                        <div className={recipe.lesson}>
                            {list_lesson.map((item, index) => {
                                return <div key={index} className={recipe.lesson_detail}>
                                    <img src={item.coverImage} alt="" />
                                    <div className={recipe.study}>{item.buyNum > 1000 ? "1000+" : item.buyNum}在学</div>
                                    <p>{item.coverTitle}</p>
                                </div>
                            })}

                        </div>

                    </div>
                    <div className={recipe.comment}>
                        <h2>
                            <span className={recipe.worktitle}>帮友评论</span>
                        </h2>
                        <div className={recipe.number}>
                            <div>点赞数：{list_detail.likeNum}</div>
                            <div>打赏数：{list_detail.rewardNum}</div>
                            <div>评论数：{comment_count}</div>
                        </div>
                        <div className={recipe.comment_text}>
                            <div className={list_comment.length === 0 ? recipe.kong : recipe.none}>快来发表你的评论吧</div>
                            {list_comment.map((item, index) => {
                                return <div key={index} className={recipe.comment_item}>
                                    <div className={recipe.imgbox_left}>
                                        <img src={item.clientImage} alt="" />
                                    </div>
                                    <div className={recipe.div_right}>
                                        <div className={recipe.name1} >{item.clientName}</div>
                                        <div className={recipe.time1}>{item.createTime}</div>
                                        <p> {item.coverSummary}</p>
                                        <div className={item.comments.data.length ? recipe.reply : recipe.reply1}>
                                            {
                                                item.comments.data.map((item1, index1) => {
                                                    return (
                                                        <div key={index1} className={item.comments.data ? recipe.reply_item : recipe.reply_item1}>
                                                            <span>{item1.clientName}</span>回复<span>{item1.commentClientName}</span>:{item1.coverSummary}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

            </Fragment>
        )

    }
}
export default withRouter(Recipe);


