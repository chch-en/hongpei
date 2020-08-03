import React, { Component, Fragment } from 'react';
import classify from "../../scss/classify.module.scss"
import axios from "axios"
import { withRouter } from 'react-router-dom';
class Recipes_classify extends Component {
    constructor() {
        super()
        this.state = {
            list: [],//左侧分类数据获取
            show_list: [],//定义右侧展示数组
            recommend_list: [],//数据结构不同，专门定义推荐数组
            is_active: 0
        }
    }98
    componentDidMount() {
        this.get_alllist()
        this.get_Recommond()
    }
    get_alllist = () => {
        //获取页面除了推荐之外的所有数据
        axios.get("https://api.hongbeibang.com/classify/get")
            .then((res) => {
                // console.log(res)
                //推荐的那个li拿不到数据，自己定义添加到数组中，再循环遍历
                res.data.data.classify.unshift({ name: "推荐", list: [] })
                this.setState({
                    list: res.data.data.classify
                }, () => {
                    // console.log(this.state.list)
                })
            }
            )
    }
    //获取推荐数据，推荐数据部分
    get_Recommond = () => {
        axios.get("https://api.hongbeibang.com/classify/getRecommend")
            .then((res) => {
                // console.log(res.data.data)
                res.data.data.map((item) => {
                    //因为推荐的这个数据，结构与其他不同，没有list属性，所以添加一个list属性，即为拿到的详情数据
                    item.list = item.classifys
                    // console.log(res.data.data)//此时的数据结构即正确，与其他数据结构相同
                })
                this.setState({
                    show_list: res.data.data,
                    recommend_list: res.data.data//这里需要单独定义一个存储推荐的数据，在点击切换的时候进行赋值

                })

            })
    }
    //切换数据显示
    click_Item = (index) => {
        this.state.list[0].list = this.state.recommend_list
        this.setState({
            show_list: this.state.list[index].list,
            is_active: index//控制高亮

        }, () => {
            // console.log(this.state.show_list)
        })

    }
    //点击跳转详情页
    toClassifyDetail = (name) => {
        this.props.history.push(`/classifyDetail/${name}`)
    }
    render() {

        let { list, show_list, is_active } = this.state

        // console.log(this.state)
        console.log(list,"list")
        console.log(show_list,"show_list")
        console.log(is_active,"is_active")

        return (
            <Fragment>
                <div className={classify.content}>
                    <ul className={classify.ul_left}>
                        {list.map((item, index) => <li className={is_active === index ? classify.active : ""}
                            key={index} onClick={this.click_Item.bind(this, index)}>{item.name}</li>)}
                    </ul>
                    <div className={classify.right}>
                        {
                            show_list.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h2>{item.name}</h2>
                                        <div key={index} className={classify.right_ul} >
                                            {
                                                item.list.map((item1, index1) => {
                                                    return (
                                                        <div className={classify.right_li} key={index1} onClick={this.toClassifyDetail.bind(this, item1.name)}>
                                                            <div>
                                                                <img src={item1.image} alt="" />
                                                            </div>
                                                            <p>{item1.name}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Recipes_classify);
// export default ClassifyDetail;