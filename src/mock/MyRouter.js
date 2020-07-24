import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


export default class MyRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Switch>
                    {

                        this.props.router.map(v => (
                            <Route key={v.path} {...v}>
                            </Route>
                        ))
                    }

                </Switch>


            </div>
        )
    }
}
