import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provier} from 'react-reudx'

ReactDOM.render(
    <Router>
        <Provier>
            <App />
        </Provier>
    </Router>,
     
    document.getElementById('root')
);
