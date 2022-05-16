import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    myref = React.createRef()
    render () {
        return (
            <div>
                {/* <input ref="mytext" /> */}
                <input ref={this.myref} />
                <button onClick={                     /* 点击按钮，执行内部函数 */
                    () => {
                        //console.log('click1', this.refs.mytext.value);

                        console.log('click', this.myref.current.value);
                    }   //给标签设置ref 获取真实的dom节点


                }>add1</button>
            </div>
        )
    }

}

/* React 不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式 */