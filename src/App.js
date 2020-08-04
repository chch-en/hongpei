import React, { Component } from 'react';
import { withRouter, Route, Switch } from "react-router-dom";
import router from "./Router"
import "./scss/reset.scss"
import './scss/style.scss'
import "antd/dist/antd.css"
import 'swiper/swiper-bundle.min.css'
class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.props.history.listen((props) => {
      console.log(props)
    })
  }
  render() {
    return (
      <div className="App">
        <Switch>
          {
            router.map(v => (
              <Route
                path={v.path}
                key={v.path}
                render={() => <v.component childrenaa={v.childrens} />}>
              </Route>
            ))
          }
        </Switch>

      </div >
    )
  }
}

export default withRouter(App);


