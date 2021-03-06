import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import Provider from "react-redux/lib/components/Provider";
import thunk from "redux-thunk";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase";
import {getFirestore, reduxFirestore} from "redux-firestore";
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true ,attachAuthIsReady: true}), // redux binding for firebase
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
);
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
