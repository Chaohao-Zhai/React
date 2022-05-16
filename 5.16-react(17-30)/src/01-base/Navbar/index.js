import React, { Component } from 'react'
import ZOOM from "prop-types"
export default class Navbar extends Component {

    //属性检查
    static propTypes = {
        title: ZOOM.string,
        leftshow: ZOOM.bool
    }
    static defaultProps = {   //给默认属性，如果父类传来 leftshow属性  覆盖此属性
        leftshow: true
    }

    render () {
        /* 属性是父组件传来的 this.props */
        console.log(this.props);
        let { title, leftshow } = this.props
        return (

            <div>
                {leftshow && <button>返回</button>}
                navbar-{title}
                <button>home</button>
            </div>
        )
    }
}



