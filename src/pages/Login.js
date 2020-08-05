import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button, Checkbox, notification } from 'antd'
import { login } from '../api/index'
import aaa from '../scss/login.module.scss'
import Top from '../componets/Top'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const openNotification = () => {
  notification.open({
    message: '恭喜你',
    duration: 2,
    description: '登录成功,跳转至首页 ',
    onclick: () => {
      console.log('notification')
    },
  })
}

class Login extends Component {
  onFinish = (values) => {
    //value 是输入的用户名密码  一个对象
    login(values).then((res) => {
      console.log(values, 'values')
      console.log(res, '成功') // 成功返回信息  失败返回空
      if ((res.data.message = '操作成功')) {
        openNotification()
        this.props.history.replace('/')
        localStorage.setItem('user_id', '登录')
      } else {
        alert('登陆失败,请确认你的用户名和密码输入正确')
      }
    })
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    // console.log(this.props)
    return (
      <div className={aaa.body}>
        <Top {...this.props} />
        <div className={aaa.login}>
          <Form
            className="form"
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form>

          <a
            onClick={() => {
              this.props.history.push('/register')
            }}
          >
            注册
          </a>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)
