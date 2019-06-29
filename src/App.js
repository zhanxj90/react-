import React, { Fragment } from 'react';
import { pageRoute } from './routers'
import { Route, Redirect, Switch } from 'react-router-dom'
import LayoutCom from 'layout'

class App extends React.Component {
  render() {
    let users = JSON.parse(window.sessionStorage.getItem('use'))
    return (
      <div>
        <Switch>
          {
            users == null ? <Redirect from='/admin' to='/login' /> :
              <Fragment>
                <LayoutCom>
                  {
                    pageRoute.map((item, index) => (
                      <Route key={index} path={item.pathname} component={item.component} />
                    ))
                  }
                </LayoutCom>
                <Redirect from='/admin' to='/admin/home' exact />
              </Fragment>
          }
          <Redirect from='**' to='/404' />
        </Switch>
      </div>
    );
  }
}

export default App;
