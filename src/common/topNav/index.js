import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import {withRouter} from 'react-router-dom'
import logo from 'static/logo.png'

const { Header } = Layout;
const { SubMenu } = Menu;
class TopNav extends Component {
    render() {
        return (
            <Header className="header">
                <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>
                <Menu mode="horizontal" className="adminInfo" onClick={this.handleTo.bind(this)}>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="setting" />
                                admin
                        </span>
                        }
                    >
                        <Menu.Item key="/login">退出登陆</Menu.Item>
                    </SubMenu>
                </Menu>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">招生系统</Menu.Item>
                    <Menu.Item key="2">教学管理</Menu.Item>
                    <Menu.Item key="3">工单系统</Menu.Item>
                </Menu>

            </Header>
        )
    }
    handleTo({key}){
        this.props.history.push(key);
     }
}
export default withRouter(TopNav)