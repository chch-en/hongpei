import React, { Component } from 'react';
import Swiper from 'swiper/swiper-bundle.min.js'
import { Disabled, Button } from "zent"
class Harden extends Component {
  componentDidMount () {
    //可以加上你需要的条件等，然后生成Swiper对象，
    //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay: true,
    })
  }


  render () {
    return (
      
      <>
        <div className="swiper-container">
          <div className="swiper-wrapper">

            <div className="swiper-slide ">slider1</div>
            <div className="swiper-slide ">slider2</div>
            <div className="swiper-slide ">slider3</div>
          </div>
        </div>

        {/* 按钮 */}
        {/* <Disabled>
          <Button type="primary" disabled={false}>
            Button
        </Button>
         </Disabled> */}
      </>
    );

  }
}





export default Harden;