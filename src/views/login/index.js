import { Form, Icon, Input, Button } from 'antd';
import React, { Fragment } from 'react'
import './index.css'

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    let vaules=this.props.form.getFieldsValue()
    window.sessionStorage.setItem('use',JSON.stringify(vaules))
    this.props.history.push('/admin/home')
  };

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (
      <Fragment>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '用户名不能为空' },
              {validator: (rule, value, callback) => {
                let userReg = /^[a-zA-Z]{2,6}$/
                if (!userReg.test(value)) {
                    callback('用户名必须是2-6个字母组成')
                }
              }}
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '密码不能为空' },
              {validator: (rule, value, callback) => {
                let passReg = /^\d{6,12}$/
                if (!passReg.test(value)) {
                    callback('密码必须是6-12个数字组成')
                }
              }}
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" disabled={this.hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item> 
      </Form>
        <a  
          className="login-form"
          href='https://github.com/login/oauth/authorize?client_id=7b304ba9e2fd4803a33e&redirect_uri=http://localhost:3000/oauth/redirect'
          >
          第三方
        </a>
      </Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;