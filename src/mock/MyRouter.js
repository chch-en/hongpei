import React, { Component } from 'react'
import { Route } from 'react-router'

export default class MyRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                {
                    this.props.router.map(v => (
                        <Route key={v.path} {...v}>

                        </Route>
                    ))
                }
            </div>
        )
    }
}
