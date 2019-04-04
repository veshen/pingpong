import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ping } from '../actions'
let App = ({isPinging , ping})=> (
    <div>
        <h1>isPinging:{ isPinging.toString() }</h1>
        <button onClick={ping}>start ping</button>
    </div>
)
App = connect(
    ({isPinging}) => ({isPinging}),
    { ping }
)(App);
export default App;
