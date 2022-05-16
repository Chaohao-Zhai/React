import React, { Component } from 'react'
import "./css/01-index.css"
export default class App extends Component {
    render () {
        var myname = 'jack'
        var obj = {
            background: '#ff6700',
            fonSize: '20px'
        }
        return (
            <div style={obj}>
                App---
                {10 + 20}---myname
                {myname}---
                {10 > 20 ? 'aaa' : 'bbb'}
                <div style={{ backgroundColor: 'pink' }}>00000</div>
                <div className='active'> hello !!</div>
            </div>
        )
    }
}
