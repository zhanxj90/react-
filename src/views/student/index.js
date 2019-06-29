import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { pageRoute } from 'routers'

export default class Student extends Component {
    render() {
        let route = pageRoute[2].children
        return (
            <div>
                <div>
                        12412421
                </div>
                <Switch>
                    
                    {
                        route.map((item, index) => {
                            console.log(item.pathname)
                            return <Route key={index} path={item.pathname} component={item.component} exact />
                        })
                    }
                </Switch>
            </div>
        )
    }
}