import React, { Component, Fragment } from 'react'
import { withRouter, Route, Link } from 'react-router-dom'
import works1 from '../scss/works.module.scss'
import Works from './works'
import Recipes from './recipes'
class ask extends Component {
  render() {
    return (
      <Fragment>
        <div className={works1.haha}>
          <img
            onClick={() => {
              this.props.history.push('/my')
            }}
            src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
            alt=""
          />
          <ul className={works1.top1}>
            <Link to={{ pathname: '/works' }}>
              <li className={works1.top}>作品</li>
            </Link>
            <Link to={{ pathname: '/recipes' }}>
              <li className={works1.top}>食谱</li>
            </Link>
            <Link>
              <li className={works1.top}>问答</li>
            </Link>
          </ul>
          <Route path="/works" component={Works} />
          <Route path="/recipes" component={Recipes} />
        </div>
        <div className={works1.content}>问答</div>
        <button className={works1.shangchuan}>发布</button>
      </Fragment>
    )
  }
}

export default withRouter(ask)
