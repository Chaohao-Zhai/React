import React from 'react'
import { useState } from "react";
import "./App.css"

const App = () => {
    /* 
    * 点击+ 数字增大
    * 点击- 数字减小
     */

    /*
    * 在react 中，当组件渲染完毕后，再修改组件的变量，不会使组件重新渲染
    
      要使得组件可以受到变量的影响，必须在变量修改后对组件重新渲染

      这里需要一个特殊变量，当这个变量修改使时，组件自动重新渲染

      state 相当于 一个变量
        ** 这个变量在React中进行了注册
        ** React会监控这个变量的变化，当state发生变化时，会自动触发组件的重新渲染，使修改后在页面重新呈现
    */

    /* 在函数组件中，通过钩子函数，获取state 
    
        ***使用钩子 useState() 创建 state
        ***是要引入一个包 import {useState} from 'react'
       
       他需要一个值作为参数，这个值就是state的初始值
           ****该函数会返回一个数组   [  ]
           ****数组中的第一个元素 是初始值  
                    初始值只是用来显示数据，直接修改不会触发组件的重新渲染
           ****数组中的第二个元素 是函数   通常会命名为 setxxx
                    这个函数用来修改state,调用其修改state后 会触发组件的重新渲染，并且使用函数的值作为新的state值

    */

    const resulet = useState(1);
    const [counter, setCounter] = resulet;

    const addHandler = () => {
        //点击后数字加1
        setCounter(counter + 1)
    };
    const lessHandler = () => {
        setCounter(counter - 1)
    }

    return <div className={'app'}>
        <div>{counter}</div>
        <button onClick={addHandler}>1</button>

    </div>
}

//导出App
export default App;

