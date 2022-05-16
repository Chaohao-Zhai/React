import React from 'react'
export default function Sidebar (props) {  //使用形参 接受父类的属性

    let { bg, position } = props
    console.log(bg, position);   //bg 是父类传过来的变量

    var objleft = {
        left: 0
    }

    var objright = {
        right: 0
    }

    var obj = {
        background: bg,
        width: '200px',
        position: 'fixed'
    }

    var styleobj = position === 'left' ? { ...obj, ...objleft } : { ...obj, ...objright }  //对象合并  让父类的position的right、left控制
    return (
        <div style={styleobj}>
            <ul>
                <li>0000000</li>
                <li>0000000</li>
                <li>0000000</li>
                <li>0000000</li>
                <li>0000000</li>
                <li>0000000</li>
                <li>0000000</li>
                <li>0000000</li>
            </ul>
        </div>
    )
}

/* 相当于父类将属性传递给孩子，孩子的样式可以接受父亲的属性，也可以写自己的属性 */