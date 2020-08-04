import React, { Component, Fragment } from 'react'
import "../scss/style1.scss"
import axios from 'axios';
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'
export default class Tuijiana extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [],
            List: [],
            listMat: [],
            goodsUp: [],

        }
    }
    componentDidMount() {
        this.getData();
        this.getIndexByWeb();
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
        })

    }


    getData = () => {
        var api = 'https://api.hongbeibang.com/index/getByType?type=11';
        axios.get(api).then((response) => {
            this.setState({
                goodsList: response.data.data
            })
            // console.log(response.data.data)

        })


    }

    getIndexByWeb = () => {
        var ncr = 'https://api.hongbeibang.com/education/getIndexByWeb?';
        axios.get(ncr).then((response) => {
            // console.log(response.data.data.category)
            // console.log(response.data.data.category[0].item, "aa")
            console.log(response.data.data.category)
            this.setState({
                List: response.data.data.category,
                // listMat: response.data.data.category[0].item
                // goodsUp: response.data.data.category
            })
        })
    }
    chuan = (id) => {
        this.props.history.push(`/Rcamor/${id}`)
        console.log(this.props)
    }



    render() {
        let { List, goodsList, goodsUp } = this.state
        console.log(goodsList)
        return (
            <Fragment >
                {/* //头部 */}
                <div>
                    <div className={"infoai"} onClick={this.handleClick}>

                        {goodsList.map(v => (

                            <div key={v.categoryId} className={"infoaii"}>
                                <p className={"infoaiib"} onClick={() => {
                                    this.chuan(v.categoryId)
                                }}>{v.title}</p>

                            </div>
                        ))}
                        <div className={"infoaibl"}>
                            <img src={"https://image.hongbeibang.com/FnrqUc_5_kAF72ooW4xubuH07P-S?imageView2/1/w/640/h/640"}
                                className={"infoaiimg"}
                            ></img>

                        </div>
                    </div>
                </div>

            //     {/* 轮播图 */}
            //     <div className="swiper-container">
            //         <div className="swiper-wrapper">
            //             {/* 
                        {listMat.map((q, index) => (
                            <div className="swiper-slide" key={index}>
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
            //     </div>

            //     <div>
            //         {
                        List.map((v, index) => (

                            <div key={index}>
                                <div className="titleone">
                                    <div className="titleleft"> {v.title}</div>
                                </div>
                                <div className="titleimg">
                                    {
                                        v.item.map(v => (
                                            <img className="titleimage" src={v.image} />
                                        ))
                                    }
                                </div>

                            </div>
                        ))
                    }

                </div>



             </Fragment>
           
        )
    }



}













