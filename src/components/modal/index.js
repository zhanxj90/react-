import React, { Component } from 'react'
import { Modal } from 'antd';
import FormCom from 'components/formCom'

export default class Model extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: ''
        }
        this.state.visible=this.props.modalStatus
    }
    render() {
        return (
            <Modal
                title="修改讲师信息"
                visible={this.state.visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
            >
                <FormCom/>
            </Modal>
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            visible : nextProps.modalStatus
        })
    }
    handleCancel(){
        this.setState({
            visible: false,
        })
    }
    handleOk(){
        this.setState({
            visible: false,
        });
    }
    
}