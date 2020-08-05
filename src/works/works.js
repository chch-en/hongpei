import React, { Component, Fragment } from 'react'
import { withRouter, Route, Link } from 'react-router-dom'
import works1 from '../scss/works.module.scss'
import Ask from './ask'
import Recipes from './recipes'
class works extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div className={works1.haha}>
            <img
              onClick={() => {
                this.props.history.push('/my')
              }}
              src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
              alt=""
            />
            <ul className={works1.top1}>
              <Link>
                <li className={works1.top}>作品</li>
              </Link>
              <Link to={{ pathname: '/recipes' }}>
                <li className={works1.top}>食谱</li>
              </Link>
              <Link to={{ pathname: '/ask' }}>
                <li className={works1.top}>问答</li>
              </Link>
            </ul>
            <Route path="/ask" component={Ask} />
            <Route path="/recipes" component={Recipes} />
          </div>
          <div className={works1.content}>作品</div>
          <button className={works1.shangchuan}>发布</button>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(works)
