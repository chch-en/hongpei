import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button, Checkbox, notification } from 'antd'
import { login } from '../api/index'

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
      console.log(res, '成功') // 成功返回信息  失败返回空
      if (res.data.length > 0) {
        openNotification()
        this.props.history.replace('/')
        localStorage.setItem('user_id', res.data[0].id)
      } else {
        alert('登陆失败')
      }
    })
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    return (
      <div>
        <div>
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
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
