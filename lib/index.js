import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/App/Routes.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

const router = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
              <Routes />
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('app'));
