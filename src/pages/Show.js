// 烘焙圈  Baking_circle    个人 personal 
import { Button, notification, Space, BackTop } from 'antd';
import React, { Component, Fragment } from 'react'
import { quan_tu, quan_share } from "../api/index"
import Baking_circle from "../scss/Baking_circle.module.scss"
import axios from "axios"
import Swiper from "swiper"

// import Head from "../componets/Head"

function rgb() {//rgb颜色随机
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = '(' + r + ',' + g + ',' + b + ')';
  return rgb;
}

export default class Show extends Component {
  constructor() {
    super()
    this.state = {
      quan: [{ a: "关注", b: "getFollow" }
        , { a: "最新", b: "getNew" }
        , { a: "达人", b: "getMasterNew" }],
      list: [],
      list_classify: [],   //classify 分类 
      list_user: '',
      is_active: '',
      index: 6,
      pageIndex: 0,
      isShow: false,
      style: {   //定义弹窗图片的大小，这里固定大小
        width: "100%",
        height: "100%",
        marginTop: '130px'
      },
      imgs: []

    }
  }

  componentDidMount() {
    quan_tu().then((res) => {
      this.setState({
        list: res.data.data.category[0].item
      })
    })

    quan_share().then((res) => {
      this.setState({
        list_classify: res.data.data.data
      })
      // console.log(res)
    })

    this.quan_user()
    // document.querySelector("#").addEventListener('scroll', this.listenScroll);
  }

  style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  }
  // 登录弹窗 方法
  openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        '您还没有登录,请登录后查看',
    });
  };

  // 点击请求数据 关注 最新 达人
  quan_user = (value = "getNew", key = 1) => {
    if (value === "getFollow") {
      if (!(localStorage.getItem("user_id") === "登录")) {
        this.openNotificationWithIcon('warning')
        this.props.history.push("/login")
        return false
      } else {
        axios.get(`https://api.hongbeibang.com/v2/feed/${value}?pageIndex=${this.state.pageIndex}&pageSize=10`).then((res) => {
          console.log(res)
          this.setState({
            // list_user: res.data.data.content,
            is_active: value,
            index: key,
            pageIndex: this.state.pageIndex + 10,
            // getFollow: res.data.data
          })
        })
      }
    }
    axios.get(`https://api.hongbeibang.com/v2/feed/${value}?pageIndex=${this.state.pageIndex}&pageSize=10`).then((res) => {

      this.setState({
        list_user: res.data.data.content,
        is_active: value,
        index: key,
        pageIndex: this.state.pageIndex + 10,


      })
    })
  }

  //鼠标滚动获取数据
  get_onScroll = (e) => {

    console.log(e)

    let { scroll } = this.refs
    // console.log(scroll)
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
        this.quan_user()
      })
    }
  }

  //点击图片打开弹窗大图显示
  imgClick = (data, index) => {
    this.setState({
      imgs: data,
      isShow: true
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
  onClose = () => {
    this.setState({
      isShow: false
    })
  }

  render() {

    let { list, list_classify, list_user, quan, is_active, index, isShow, style, imgs } = this.state

    return (
      <Fragment>
        {!(isShow) ? '' :
          < div className={Baking_circle.swiper}
            onClick={() => {
              this.onClose()
            }}
          >
            <div className='swiper-container' ref="swiper">
              <div className='swiper-wrapper'>
                {
                  imgs.map((item, index) => (
                    <div className='swiper-slide' key={index} style={style}
                    >
                      <img src={item} alt="" className={Baking_circle.imgaa} onClick={() => {
                        this.onClose()
                      }} />
                    </div>
                  )
                  )
                }

              </div>
            </div>
            <div className="swiper-pagination"></div>

          </div>
        }
        <div className={Baking_circle.content}>
          {/* 头部部分 */}
          {/* <Head {...this.state} /> */}

          <div className={Baking_circle.head}>
            <h3><img src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" /></h3>
            <ul>
              {quan.map((item, key) => (
                <li className={(is_active === item.b) ? Baking_circle.active : ''} key={key} onClick={() => {
                  this.quan_user(item.b, key)
                }}> {item.a} </li>
              ))}
            </ul>
            <div><img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" /></div>
          </div>

          {/* {(quan)} */}
          {/* 三个图部分 */}
          {list.length > 0 && (
            <div>
              <div className={index === 1 ? Baking_circle.quan : Baking_circle.is_show}>
                <div className={Baking_circle.box}>
                  {list.map((i, indx) => (
                    <img src={i.image} alt="" key={indx} />
                  ))}
                </div>
              </div>
              <hr />
              {/* 随机颜色部分 分类 */}
              <div className={index === 1 ? Baking_circle.quan : Baking_circle.is_show}>
                <ul className={Baking_circle.classify}>
                  {list_classify.map((item) => (
                    <li key={item.communityId} style={{ backgroundColor: 'rgb' + rgb() }}> {item.name} </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {/* 用户信息 */}
          {/* {!(getFollow === '') ? '' : <h1>暂无数据</h1>} */}
          {(list_user) ?
            <div className={Baking_circle.big} ref="scroll" onScroll={this.get_onScroll} >
              {/* <div style={{ height: "50px" }}></div> */}
              {list_user.map((item, i) => (
                <div className={Baking_circle.bigBox} key={i}>
                  <div className={Baking_circle.box} key={i}>
                    <div className={Baking_circle.personal} onClick={() => {

                      this.props.history.push(`/dishDetail/${item.contentId}`)
                    }}>
                      <img src={item.clientImage} alt="" />
                      <div className={Baking_circle.right}>
                        <p> {item.clientName}  </p>
                        <p> {setTime(item.createTime)} <span>{item.coverTitle}</span>  </p>
                      </div>
                    </div>
                    <p>{item.introduce}</p>
                  </div>

                  <div className={Baking_circle.imgbox}>
                    {item.image.map((val, ind) => (
                      <img src={val}
                        alt=""
                        key={ind}
                        onClick={this.imgClick.bind(this, item.image, ind)}
                        className={item.image.length === 2 ?
                          Baking_circle.img1
                          : item.image.length === 1
                            ? ''
                            : Baking_circle.img3}
                      />
                    ))}
                  </div>

                  {(item.recipe.clientId) ?
                    <div className={Baking_circle.userBottom}>
                      <div className={Baking_circle.userLeft}>
                        <img src={item.recipe.image} alt="" />
                      </div>
                      <div className={Baking_circle.userRight}>
                        <b> {item.recipe.clientName} </b>
                        <p> 作者： {item.clientName} </p>
                      </div>
                    </div> : ""
                  }
      -
                  <ul className={Baking_circle.like}>
                    {(item.likeNum) ? <li><img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt="" /> <span> {item.likeNum}</span>  </li> : <li>  <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt="" /> <span>点赞 </span>  </li>}
                    <li> <img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt="" /> <span>打赏 </span>  </li>
                    <li> <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt="" /> <span>评论 </span>  </li>
                  </ul>

                </div>
              ))}
            </div>
            : <h1>暂无数据</h1>}
          <BackTop>
            <div style={this.style}>UP</div>
          </BackTop>
        </div>
      </Fragment >
    )

  }
}

// 传入的为定义的时间 里面有转化为时间错的方法

function setTime(end) {
  var endTime = new Date(end);
  var startTime = new Date();
  var endMon = endTime.getMonth() + 1
  var startMon = startTime.getMonth() + 1
  var mon = endMon - startMon - 1
  var times = parseInt((startTime.getTime() - endTime.getTime()) / 1000) //剩余的毫秒数
  // var day = parseInt(times / (24 * 60 * 60)) //剩余的天数  
  var day = parseInt(times / (24 * 60 * 60));
  var house = parseInt((times % (24 * 60 * 60)) / (60 * 60)) //剩余的小时数
  var minute = parseInt((times % (60 * 60)) / 60)
  var second = times % 60;
  if (day) {
    return `${day}天前`
  } else if (house) {
    return `${house}小时前`
  } else if (minute) {
    return `${minute}分钟前`
  } else if (second) {
    return `${second}秒前`
  }
}