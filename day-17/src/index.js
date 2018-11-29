import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const config = {
    apiKey: "AIzaSyC7t9StDKPUde8DCoMHhv6NUrJMKxKBC-w",
    authDomain: "info340-auth-85669.firebaseapp.com",
    databaseURL: "https://info340-auth-85669.firebaseio.com",
    projectId: "info340-auth-85669",
    storageBucket: "info340-auth-85669.appspot.com",
    messagingSenderId: "105384638181"
};

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
