import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { pageRoute } from "routers"
import { withRouter } from "react-router-dom"

const { SubMenu } = Menu;
const { Sider } = Layout;

class SliderNav extends Component {
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['/admin/home']}
                    onClick={this.handleTo.bind(this)}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        pageRoute.map((item) => (
                            item.children ?
                                <SubMenu
                                    onTitleClick={this.handleTo.bind(this)}
                                    key={item.pathname}
                                    title={
                                        <span>
                                            <Icon type={item.icon} />
                                            {item.title}   
                                        </span>
                                    }
                                >
                                    {
                                        item.children.map((children) => (
                                            <Menu.Item key={children.pathname}>{children.title}</Menu.Item>
                                        ))
                                    }
                                </SubMenu> : <Menu.Item key={item.pathname}><Icon type={item.icon} />{item.title}</Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
        )
    }
    handleTo({key}){
        this.props.history.push(key);
     }
}

export default withRouter(SliderNav)