import React, { Component } from 'react'

export default class App extends Component {
    myref = React.createRef()
    state = {
        list: [{
            id: 1,
            mytext: 'aaa'
        },
        {
            id: 2,
            mytext: 'bbb'
        },
        {
            id: 3,
            mytext: 'ccc'
        }]
    }
    render () {
        return (
            <div>
                {/* <input ref="mytext" /> */}
                <input ref={this.myref} />
                <button onClick={
                    this.handClick                 /* 点击按钮，执行内部函数 */
                }>add1</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {item.mytext}

                                {/*  <button onClick={this.delfun.bind(this, 'canshu ')}>-</button> */}  {/* bind()可传参 找到要删除的那个添加事件 */}

                                <button onClick={() => { this.delfun(index) }}>-</button>
                            </li>
                        )
                    }
                </ul>

                {/* 条件 渲染 */}
                {this.state.list.length === 0 ? <div>暂无待办事项</div> : null}
                {this.state.list.length === 0 && <div>暂无待办事项</div>}
            </div >
        )
    }

    //添加
    handClick = () => {
        console.log('click', this.myref.current.value);

        //不要直接修改状态  
        //this.state.list.push(this.myref.current.value)

        //可间接
        let newlist = [...this.state.list];   //   ...  展开 深拷贝深拷贝
        newlist.push({
            id: Math.random() * 1000,
            mytext: this.myref.current.value
        })

        this.setState({
            list: newlist
        })

        //清空输入框
        this.myref.current.value = ''
    }

    //删除
    delfun (index) {
        console.log('del', index);

        //不要直接修改状态，可能造成不可预期的问题
        let newlist = this.state.list.concat()

        newlist.splice(index, 1)

        this.setState({   //将最新的数据设置回去
            list: newlist
        })


    }



}

/* React 不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式 */