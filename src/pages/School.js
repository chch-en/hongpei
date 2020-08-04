import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom"
import "../scss/style1.scss"
import axios from 'axios';
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'
// import MyRouter from "../mock/MyRouter"


class School extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list_all: [], //导航部分
            item_list: [], //内容所有数组
            tuijian_list: [], //推荐数组
            el_index: 1,  //点击切换颜色
            List: [],
            display: "block",
            isTogle: true,

        }
        console.log(this.props)
        // this.click_item = this.click_item.bind(this);
    }
    componentDidMount() {
        this.get_Dataall()
        this.getIndexByWeb()
        this.click_item = this.click_item.bind(this);
        //轮播图
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
        })
    }

    // 获取全部信息
    get_Dataall = () => {
        var api = 'https://api.hongbeibang.com/index/getByType?type=11';
        axios.get(api).then((response) => {
            // console.log(response.data.data)
            // response.data.data.unshift({ title: "推荐", item: [] })
            // console.log(response.data)
            this.setState({
                list_all: response.data.data
            })
        })
    }

    getIndexByWeb = () => {
        var ncr = 'https://api.hongbeibang.com/education/getIndexByWeb?';
        axios.get(ncr).then((response) => {
            // console.log(response.data.data.category)
            const copy = response.data.data.category
            copy.splice(0, 1)  //新课推荐删除
            copy.map((item) => {
                item.list = item.category

            })
            // console.log(aa)
            this.setState({
                item_list: copy,
                tuijian_list: copy,
                List: copy
            })
        })
    }



    click_item = (id) => {
        console.log(id)
        // this.state.item_list[0].list = this.state.tuijian_list
        axios.get(`https://api.hongbeibang.com/index/getIndexItem?categoryId=${id}`).then((res) => {
            console.log(res.data.data)
            this.state.item_list = res.data.data
            this.setState(prevState => {
                console.log(prevState);
                return ({
                    isTogle: !prevState.isTogle
                })
            });

        })
    }

    toRcamor = (id) => {
        console.log(id)
        this.props.history.push(`/rcamor/${id}`)
    }

    render() {
        let { list_all, item_list, List, isTogle } = this.state
        // let { childrenaa } = this.props
        console.log(isTogle)

        return (
            <Fragment>
                <div>
                    {/* header */}
                    < ul className="infoai">
                        {/* <li>推荐</li> */}

                        {list_all.map((item, index) =>
                            <li key={index}
                                onClick={this.click_item.bind(this, item.categoryId)}
                                // className={el_active === index ? active : ''}
                                className="infoaii"
                            >
                                {item.title}
                                {/* < div className="lin-a" >
                                    <div className="linb">__</div>
                                </div> */}
                            </li>)}
                    </ul>
                    {/* 搜索 */}
                    <div className="inimgo">
                        <img className="inimg" src="https://image.hongbeibang.com/FnrqUc_5_kAF72ooW4xubuH07P-S?imageView2/1/w/640/h/640"></img>
                    </div>

                    {/* 轮播图 */}
                    {isTogle ? <div>
                        <div className="swiper-container" >
                            <div className="swiper-wrapper">
                                {/* 
                        {listMat.map((q, index) => (
                            <div className="swiper-slide" ={index>
                                <img src={q.image} className="swiper-slidela" />
                            </div>
                        )) */}

                                <div className="swiper-slide">
                                    <img src="https://image.hongbeibang.com/FoE2eeyx4SKJooiHRzuhq4WTOHCi?1380X700&imageView2/1/w/750/h/380" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://image.hongbeibang.com/Fnf2QbW2ulvOrUETbHYMrhG2fE4z?1380X700" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://image.hongbeibang.com/Fjl_bdT7j5NhBCH5VQwuCwS6s8Ek?1380X700" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://image.hongbeibang.com/FgWTfui1EQc3P92fbIl09B2StaIo?1380X700" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://image.hongbeibang.com/Ft3QH_m_QaDCneAKCLLueFilNV8f?1380X700" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://image.hongbeibang.com/FpG08AN1p98rD2ANWKPGxliYptKk?1380X700" />
                                </div>

                            </div>
                        </div>



                        <div className="axos">
                            {
                                List.map((v, index) => (

                                    <div key={index}>
                                        <div className="titleone">
                                            <div className="titleleft"> {v.title}</div>
                                        </div>
                                        <div className="titleimg">
                                            {
                                                v.item.map((v, ind) => (
                                                    <img className="titleimage" src={v.image} key={ind} />


                                                ))
                                            }
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>
                        :
                        <div className={"crux-header"}  >
                            <div className="crux-header-a">
                                {
                                    item_list.map((iq, index) => {
                                        return (

                                            <div key={index} className="crux-old" onClick={this.toRcamor.bind(this, iq.categoryId)}>
                                                <div className="crux-old-img">
                                                    <div className="crux-old-img-za">
                                                        <img className="crux-old-img-za-img" src={iq.images} />
                                                        <div className="title-v">{iq.title}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {/* contentUp */}

                </div >
                {/* <MyRouter>childrenaa</MyRouter> */}
            </Fragment >
        )
    }
}
export default withRouter(School);