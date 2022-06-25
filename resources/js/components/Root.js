import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers'
import App from "./App";
import '../i18n'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

function Root(){
    return <Provider store={store}>
            <App />
    </Provider>
}

store.subscribe(() => {
    var str = store.getState();
    console.log(str)
});

if (document.getElementById('app')) {
    ReactDOM.render(<Root />, document.getElementById('app'));
}

