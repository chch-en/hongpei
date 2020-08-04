import React, { Component, Fragment } from 'react'
import axios from "axios"
import classifyDetail from "../../scss/classify/classifyDetail.module.scss"
import { withRouter } from 'react-router-dom';




class ClassifyDetail extends Component {
    constructor() {
        super()
        this.state = {
            tab: [
                {
                    name: "综合排序",
                    key: ''
                },
                {
                    name: "做过最多",
                    key: "dishNum"

                },
                {
                    name: "达人食谱",
                    key: "master"

                },
            ],//定义页面上边nav的内容

            searchKey: '',//路由跳转传递过来的关键词，是要在上边展示的
            pageIndex: 0,//定义发送请求时的相关参数
            isActive: "",
            show_list: [],//定义展示用的数组
            showEmpty: false,
        }
    }
    componentDidMount() {
        this.setState({
            searchKey: this.props.match.params.name
        }, () => {
            console.log(this.state.searchKey)
            this.get_all()
        })
        // this.refs.scroll.addEventListener("scroll", this.get_onScroll, true)
        //可以这里监听，也可以下边绑定滚动事件，注意是监听dom节点，不是window

    }
    //页面跳转过来获取全部数据
    get_all = () => {
        axios.get(`https://api.hongbeibang.com/search/getMoreRecipe?pageIndex=${this.state.pageIndex}&pageSize=10&keyword=${this.state.searchKey}&sort=${this.state.isActive}`)
            .then((res) => {
                //这块的判断是有必要的，如果数组长度为0，说明是第一次请求数据，否则是再此基础上继续请求数据
                if (this.state.show_list.length === 0) {
                    this.setState({
                        show_list: res.data.data.search.list.recipe.data
                    }, () => {
                        // console.log(this.state.show_list)
                    })
                } else {
                    //长度不为0，说明之前已经有数据了，是再次请求，需要解构数组
                    let newArr = this.state.show_list
                    newArr = newArr.concat(res.data.data.search.list.recipe.data)
                    this.setState({

                        show_list: newArr
                    }, () => {
                        // console.log(this.state.show_list)
                    })

                }
            })
    }
    //点击li，切换相关展示内容，传递这里定义的key，作为参数，发送请求
    tabsChange = (key) => {
        //点击时，修改定义的相关内容
        this.setState({
            pageIndex: 0,
            isActive: key,
            show_list: [],
        }, () => {
            this.get_all()
        })
    }

    //鼠标滚动获取数据
    get_onScroll = (e) => {
        let { scroll } = this.refs
        // scrollTop为滚动条在Y轴上的滚动距离。
        // clientHeight为内容可视区域的高度。
        // scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。
        if (scroll.scrollHeight >
            scroll.clientHeight && scroll.scrollTop +
            scroll.clientHeight === scroll.scrollHeight) {

            this.setState({
                pageIndex: this.state.pageIndex + 10,
            }, () => {
                this.get_all()
            })
        }
    }
    //搜索框change事件
    searchText = (e) => {
        this.setState({
            searchKey: e.target.value,
            showEmpty: false,
            show_list: []
        }, () => {
            //当搜索框的value 发生改变，请求数据， 建议给个延时
            setTimeout(() => {
                if (this.state.searchKey) {
                    this.get_all()
                } else {
                    this.setState({
                        show_list: []
                    })
                }
            }, 1500);
        })
    }
    //清空搜索框
    clearSearch() {
        this.setState({
            searchKey: '',
            showEmpty: true,
        }, () => {
        })
    }
    //点击跳转到下个页面
    toItem = (id) => {
        this.props.history.push(`/recipe/${id}`)
    }
    //点击返回上一页
    back = () => {
        this.props.history.go(-1)
    }

    render() {
        let style = {
            display: 'none'
        }
        let style2 = {
            display: 'block'
        }
        let { tab, show_list, isActive, searchKey } = this.state
        return (
            <Fragment>
                <div >
                    <div className={classifyDetail.sousuo}>
                        <div className={classifyDetail.tou} onClick={this.back.bind(this)}>
                            <img src={require("../../imgs/left.png")} alt="" />
                        </div>
                        <div className={classifyDetail.inp}>
                            {/* 搜索食谱，食材，烘焙/家常菜... */}
                            <img src={require('../../imgs/close.png')} alt="" onClick={this.clearSearch.bind(this)} style={this.state.showEmpty ? style : style2} />
                            <input type="text" placeholder='搜索食谱' value={searchKey} onChange={this.searchText.bind(this)} />
                        </div>
                    </div>
                    <ul className={classifyDetail.nav} >
                        {
                            tab.map((item) => <li key={item.key}
                                className={isActive === item.key ? classifyDetail.active : ""}
                                onClick={this.tabsChange.bind(this, item.key)}>{item.name}</li>)
                        }

                    </ul>
                    <div ref="scroll" onScroll={this.get_onScroll} className={classifyDetail.scrollcontent}>
                        {
                            show_list.map((item, index) => {
                                return <div className={classifyDetail.content} key={index} onClick={this.toItem.bind(this, item.contentId)}>
                                    <div className={classifyDetail.imgbox}>
                                        <img src={item.coverImage} alt="" />
                                    </div>
                                    <div className={classifyDetail.text}>
                                        <h2>{item.coverTitle}</h2>
                                        <p className={classifyDetail.p1}>{item.clientName}</p>
                                        <p className={classifyDetail.p2}>
                                            <span>{item.collectNum}收藏</span>
                                            <span>{item.dishNum}人做过</span>
                                        </p>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(ClassifyDetail);