import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import router from "./Router"
import "./scss/reset.scss"
function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
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
        </Switch>

      </Router>
    </div >
  )
}
// withrouter
export default App