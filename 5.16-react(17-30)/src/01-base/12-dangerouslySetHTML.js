import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myhtml: `app`
    }
    render () {
        return (
            <div>
                {/* 富文本 展示 */}
                <div dangerouslySetInnerHTML={
                    { __html: this.state.myhtml }
                }>
                </div>
            </div >
        )
    }
}
