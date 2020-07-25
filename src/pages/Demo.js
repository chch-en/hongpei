import React, { Component } from 'react';
import aaa from "../scss/demo.module.scss"
import { demo } from "../api/index"

class Demo extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
componentDidMount() {
  demo().then((res) => {
    console.log(res)
    this.setState({
      list: res.data.data.content
    })
  })
}
render() {
  let { list } = this.state
  console.log(list)
  return (

    <div className={aaa.box}>

      <ul>
        {list.map(item => (
          <li key={item.clientId}>
            {item.image.length === 2 ? item.image.map((i,k) => <img src={i} alt="" key={k.clientId}/>)
             : item.image.length === 1 ? item.image.map((i,k) => <img src={i} alt="" key={k.clientId} />) 
              : item.image.length === 3 ? item.image.map((i,k) => <img src={i} alt="" key={k.clientId} />) 
              : item.image.length === 4 ? item.image.map((i,k) => <img src={i} alt="" key={k.clientId} />) 
              : item.image.length === 5 ? item.image.map((i,k) => <img src={i} alt="" key={k.clientId} />) 
              : item.image.length === 6 ? item.image.map((i,k) => <img src={i} alt="" key={k.clientId} />) 
              : 'dsad '
            }
          </li>

        ))}
      </ul>
    </div>
  );
}
}

export default Demo;