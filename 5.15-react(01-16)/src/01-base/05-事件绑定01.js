import React, { Component } from 'react'

export default class App extends Component {
    render () {
        return (
            <div>
                <input type="text" />
                <button onClick={   /* 点击按钮，执行内部函数 */
                    () => { console.log('click1'); }
                }>add1</button>

                <button onClick={this.clickHandler2}>add2</button>

                <button onClick={this.clickHandler3}>add3</button>

                <button onClick={() => { this.clickHandler4() }}>add4</button>
            </div>
        )
    }

    clickHandler2 () {
        console.log('click2');
    }

    clickHandler3 = () => {
        console.log('click3');
    }

    clickHandler4 = () => {
        console.log('click4');
    }
}
