import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: ['00', '11', '22']
    }
    render () {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item =>
                            <li key={item}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}


/* 原生JS  map */
/* var list1 = ['aa', 'bb', 'cc']
var newlist = list1.map(item => `zoom`)   //每个元素都映射为 'zoom'
console.log(newlist); */