import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {persistor, store} from './store'
import {BrowserRouter as Router} from "react-router-dom";
import {PersistGate} from 'redux-persist/es/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null}
                     persistor={persistor}>
            <Router>

                <App/>

            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
