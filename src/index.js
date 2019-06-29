import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {mainRoute} from './routers'
import store from 'store'
import Oauth from 'views/oauth'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
                <Route path='/oauth/redirect' render={({location,history})=><Oauth location={location} history={history} />}/>
                <Route path='/admin' render={() => 
                    <App/>
                }/>
                {
                    mainRoute.map((item, index) => 
                        <Route key={index} path={item.pathname} exact component={item.component} />
                    )
                }
                <Redirect from='/' to='/admin' exact />
                <Redirect from='**' to={mainRoute[1].pathname} />
            </Switch>
        </Provider>
    </Router>,
     
    document.getElementById('root')
);
