import React from "react"
import SliderNav from "common/sliderNav"
import TopNav from "common/topNav"
import "./index.css";
import { Layout } from 'antd';

const { Content } = Layout;
export default class LayoutCom extends React.Component{
    render(){
        return (
            <Layout className='layout'>
            <TopNav/>
            <Layout>
              <SliderNav/>
              <Layout style={{ padding: '24px' }}>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                  }}
                >
                  {this.props.children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}