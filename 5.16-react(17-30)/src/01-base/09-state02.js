import React, { Component } from 'react'

export default class App extends Component {   //继承

    constructor() {
        super()   //继承
        this.state = {
            text: '收藏',
            condition: true,
            myname: 'Vue'
        }
    }

    render () {
        return (
            <div>
                <h1>欢迎来到{this.state.myname}开发</h1>
                <button onClick={() => {
                    this.setState({   //x修改状态 只能使用 唯一的使用 setState()方法
                        condition: !this.state.condition,
                        myname: 'React'
                    })
                }}>{this.state.condition ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }
}
