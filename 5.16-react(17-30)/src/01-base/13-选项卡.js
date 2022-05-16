import React, { Component } from 'react'
import "./css/simple card.css"
import Film from "./simple card Component/Film"
import Cinema from "./simple card Component/Cinema"
import Center from "./simple card Component/Center"

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                text: 'film'
            },
            {
                id: 2,
                text: 'cinema'
            },
            {
                id: 3,
                text: 'my'
            }
        ],
        current: 0
    }

    which () {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>

            default:
                return null
        }
    }
    render () {
        return (
            <div>
                {/* {
                    this.state.current === 0 && <Film></Film>
                }
                {
                    this.state.current === 1 && <Cinema></Cinema>
                }
                {
                    this.state.current === 2 && <Center></Center>
                } */}
                {/* 函数函数控制 */}
                {
                    this.which()  //注意this
                }
                <ul >
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}
                                className={this.state.current === index ? 'active' : ''}
                                onClick={() => this.handleClick(index)}>
                                {item.text}
                            </li>
                        )
                    }
                </ul>
            </div >
        )
    }
    handleClick (index) {
        this.setState({
            current: index
        })
    }
}
