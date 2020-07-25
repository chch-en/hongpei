import React from 'react';

export default function Icon (Com) {

  return class componentName extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
    componentDidMount () {
      this.props.history.listen((props) => {
        this.setTil(props.pathname)
      })
    }
    setTil = (pathname) => {
      switch (pathname) {
        case "/":
          document.title = "烘焙帮";
          break;
        case "/skill":
          document.title = "技巧百科";
          break;
        case "/school":
          document.title = "视频学堂";
          break;
        case "/novice":
          document.title = "新手教程";
          break;
        case "/classify":
          document.title = "食谱分类";
          break;
      }
    }
    render () {
      return (<Com {...this.props} />
      );
    }
  }
}








