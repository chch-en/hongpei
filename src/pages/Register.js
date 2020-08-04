import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { register } from "../api/index"
import aaa from "../scss/login.module.scss"
import Top from "../componets/Top"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const openNotification = () => {
  notification.open({
    message: "恭喜你",
    description: "注册成功,2秒后跳转至登录页面 ",
    onclick: () => {
      console.log("notification")
    }
  })
}

class Register extends Component {
  constructor() {
    super()

  }
  onFinish = values => {
    console.log(values)
    register(values).then((res) => {
      if (typeof (res) === "string") {
        alert(res)
      } else {
        openNotification()
        setTimeout(() => { this.props.history.replace("/login") }, 2000)
      }
    })
    // console.log('Success:', values);  //获取输入的信息   点击之后获取
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render () {
    return (

      <div className={aaa.bogy}>
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
              rules={[{ required: true, message: 'Please input your username!' }]} >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item >

            <Button type="primary" htmlType="submit" >
              注册
          </Button>

          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);