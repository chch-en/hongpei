<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import router from './Router'
import './scss/style.scss'
import './scss/reset.scss'
=======
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import router from "./Router"
// import "./scss/style.scss"
import "./scss/reset.scss"
import "zent/css/index.css"
import 'swiper/swiper-bundle.min.css'

>>>>>>> 34da7f971316a73d0930225acb818d1d5d0a8e25
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
<<<<<<< HEAD
          {router.map((v) => (
            <Route
              path={v.path}
              key={v.path}
              render={() => <v.component childrenaa={v.childrens} />}
            ></Route>
          ))}
=======
          {
            router.map(v => (
              <Route
                path={v.path}
                key={v.path}
                render={() => <v.component childrenaa={v.childrens} />}
              >
              </Route>
            ))
          }
>>>>>>> 34da7f971316a73d0930225acb818d1d5d0a8e25
        </Switch>
      </Router>
    </div>
  )
}
<<<<<<< HEAD
export default App
=======
// withrouter
export default App;
>>>>>>> 34da7f971316a73d0930225acb818d1d5d0a8e25
