import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import MyRouter from "../mock/MyRouter"

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        const { childrenaa } = this.props
        console.log(this.props, childrenaa)
    }
    render() {
        const { childrenaa } = this.props

        return (
            <div>
                <nav>
                    <NavLink
                        to={"/"}
                        exact
                    >{"学烘培"}</NavLink>

                    <NavLink
                        to={"/show"}
                    >{"烘培圈"}</NavLink>

                    <NavLink
                        to={"/questionAndAnswer"}
                    >{"问答"}</NavLink>
                    <NavLink
                        to={"/my"}
                    >{"小窝"}</NavLink>
                </nav>

                <MyRouter router={childrenaa}></MyRouter>
            </div>
        )
    }
}
