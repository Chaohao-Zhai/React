import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text: '收藏',
        condition: true
    }
    render () {
        return (
            <div>
                <h1>欢迎来到React开发</h1>
                <button onClick={() => {
                    this.setState({   //x修改状态 只能使用 唯一的使用 setState()方法
                        condition: !this.state.condition
                    })
                }}>{this.state.condition ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }
}
