import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }
    render () {
        return (
            <div>
                {this.state.count}
                <button onClick={this.addclick1}>同步逻辑+</button>
                <button onClick={this.addclick2}>异步逻辑+</button>
            </div>
        )
    }

    //绑定函数
    addclick1 = () => {

        //同步逻辑  异步更新状态
        this.setState({    //进行三次setState的设置，以为按一次会加 3 可是只加了1 
            count: this.state.count + 1
        }, () => { console.log(this.state.count) })

        this.setState({
            count: this.state.count + 1
        }, () => { console.log(this.state.count) })  //放在第二个参数中，以回调函数反馈 前面的状态更新完毕

        this.setState({
            count: this.state.count + 1
        }, () => { console.log(this.state.count) })
    }

    addclick2 = () => {
        //异步逻辑 同步更新状态
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

}



/* 
setState 处在同步逻辑中 --------异步更新状态  更新dom
setState 处在异步逻辑中 --------同步更新状态  更新dom

setState 接收第二个参数，第二个参数是回调函数，状态和dom 更新完毕后 就会被触发

*/