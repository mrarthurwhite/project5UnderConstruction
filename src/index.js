import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

console.log("inside index.js")

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Container className="p-3">

        <App />
        </Container>
    </Router>
    </Provider>,
document.getElementById('root')
);
