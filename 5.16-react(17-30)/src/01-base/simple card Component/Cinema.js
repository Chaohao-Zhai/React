import React, { Component } from 'react'
import axios from "axios"
export default class Cinema extends Component {
    /* 请求数据 */
    constructor() {
        super()
        this.state = {
            cinemalist: [],
            bakcinemalist: []
        }

        /* axios 第三方的库 专门请求数据 */
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5609532",
            headers: {  //headers内部的内容 写成 'key' :'value'
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16526710681325482742120449","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data.data.cinemas)   //res.data 是请求的status

            //拿到真数据后 对cinemalist重新设置
            this.setState({
                cinemalist: res.data.data.cinemas,
                bakcinemalist: res.data.data.cinemas
            })
        })

    }
    render () {
        return (
            <div>
                <input onInput={this.handleInput} />
                {
                    this.state.cinemalist.map(item =>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                    )
                }
            </div>
        )
    }
    handleInput = (event) => {   //输入框值改变 该函数执行
        console.log('value change', event.target.value);

        var newlist = this.state.bakcinemalist.filter(item =>
            item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
            item.address.toUpperCase().includes(event.target.value.toUpperCase())
        )  // fliter 不影响原数组
        //console.log(newlist);
        this.setState({
            cinemalist: newlist
        })
    }
}
