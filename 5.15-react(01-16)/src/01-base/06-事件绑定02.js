import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    render () {
        return (
            <div>
                <input type="text" />
                <button onClick={   /* 点击按钮，执行内部函数 */
                    () => { console.log('click1', this.a); }
                }>add1</button>

                <button onClick={this.clickHandler2.bind(this)}>add2</button>   {/* this 指向问题不推荐使用 */}

                <button onClick={this.clickHandler3}>add3</button>

                <button onClick={() => { this.clickHandler4() }}>add4</button>   {/* 能传参 */}
            </div>
        )
    }


    /* call  改变this指向，自动执行函数
       apply 改变this指向，自动执行函数
       bind  改变this指向 不自动执行函数
        */
    clickHandler2 () {
        console.log('click2', this.a);
    }

    clickHandler3 = () => {
        console.log('click3', this.a); //箭头函数根本不管谁调用，和外部作用域保持一致 指向App 组件的实例对象
    }

    clickHandler4 = () => {   //箭头函数没有this 
        console.log('click4');
    }
}

/* React 不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式 */