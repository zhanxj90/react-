import React from 'react'
import {postAccess} from 'api/oauth'
import {fetch as fetchPro} from 'whatwg-fetch'
 
export default class Oauth extends React.Component{
    render() {
        return (
            <div>
               第三方登录页
            </div>
        )
    }
    componentDidMount() {
        //第三方登录，数据获取到
        let {history,location} = this.props
        let code = location.search.split('=')[1]
        postAccess(code).then(res=>{
            fetchPro('/user', {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    Authorization: `token ${res.access_token}`
                },
            })
            .then((res) => res.json())
            .then(res => {
                window.sessionStorage.setItem('use',JSON.stringify(res))
                history.push('/admin/home')
            })
        })
    }
}