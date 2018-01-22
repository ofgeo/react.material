import React from 'react';
import ReactDOM from 'react-dom';
import {Route, StaticRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <StaticRouter><Route path="/" component={App}/></StaticRouter>
    , document.getElementById('root'));
registerServiceWorker();
