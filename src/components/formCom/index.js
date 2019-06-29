import React, { Component } from 'react'
import { Form, Icon, Input, Button, Select } from 'antd';
import { connect } from "react-redux";
import {teachUpdAction} from 'action/teachAction/actionCreator'
const { Option } = Select;

class FormCom extends Component {
    render() {
        let { data } = this.props
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} >
                <Form.Item
                    label="讲师姓名"
                    validateStatus="success"
                >
                    {getFieldDecorator('name', {
                        initialValue: data.name
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />)}
                </Form.Item>

                <Form.Item
                    label="讲师职位"
                    validateStatus="success"
                >
                    {getFieldDecorator('post', {
                        initialValue: data.post
                    })(
                        <Select>
                            <Option value="大数据讲师">大数据讲师</Option>
                            <Option value="班主任">班主任</Option>
                            <Option value="c语言讲师">c语言讲师</Option>
                            <Option value="java讲师">java讲师</Option>
                            <Option value="python讲师">python师</Option>
                            <Option value="ui讲师">ui讲师</Option>
                            <Option value="课程主管">课程主管</Option>
                        </Select>
                    )}
                </Form.Item>

                <Form.Item
                    label="讲师级别"
                    validateStatus="success"
                >
                    {getFieldDecorator('level', {
                        initialValue: data.level
                    })(
                        <Select>
                            <Option value={1}>1</Option>
                            <Option value={2}>2</Option>
                            <Option value={3}>3</Option>
                            <Option value={4}>4</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: '100%' }}>
                        修改
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    handleSubmit(e) {
        e.preventDefault()
        let values = this.props.form.getFieldsValue();
        values.id=this.props.data.id
        this.props.dispatch(teachUpdAction(values))
    }
}

const WrappedNormalLoginForm = Form.create()(FormCom);

const mapStateToProps = (state) => ({
    data: state.teach.modifyData
})

export default connect(mapStateToProps)(WrappedNormalLoginForm)