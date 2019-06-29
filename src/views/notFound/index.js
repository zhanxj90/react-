import React, { Component } from 'react'
import './index.css'

export default class notFound extends Component {
    render() {
        return (
            <div className="bg-404">
                <div className="main">
                    <div className="aiya">哎呀！页面走丢啦！</div>
                    <button className="back" onClick={this.back.bind(this)}>返回首页</button>
                </div>
            </div>
        )
    }
    back() {
        window.history.back()
    }
}