import React from 'react'
import { useState } from "react";
import "./App.css"

const App = () => {

    /* 
     state
        --state 实际是被React管理的变量
                **当我们通过setState()修改变量的值时，会触发组件的自动渲染(重新调用render())
                **只有state值发生变化时，组件才会重新渲染
                **当我们通过setState修改一个state时，并不是修改当前的state
                    修改的是下一次渲染的state值

        
        --setState() 触发组件重新渲染的过程是异步
                所以当调用setState(),需调用state值时，一定要注意
                为避免这种情况，通过为setState 传递回调函数的形式修改state值
    */
    console.log("函数执行，组件创建完毕");
    const resulet = useState(1);
    const [counter, setCounter] = resulet;

    const [user, setUser] = useState({ name: 'ZOOM', age: 18 })  // [user, setUser]就是一个state

    //点击后数字加1
    const addHandler = () => {
        /* setTimeout(() => {   //会出现计算错误
            setCounter(counter + 1)
        }, 1000) */

        //解决方案
        /* 
        **setState中 回调函数的返回值 成为新的state值
                回调函数执行时，React会将最新的state作为参数传递
        */
        setTimeout(() => {
            setCounter((previousValue) => {
                return previousValue + 1
            })
        }, 1000)

    };
    const changeHandler = () => {
        //第一种方法：setUser传入新的对象，替换老的
        //setUser({ name: 'Google', age: 18 })  对象

        //第二种方法 对state进行浅拷贝
        /* const newUser = Object.assign({}, user)
        newUser.name = "猪八戒";   //修改新对象的属性值
        setUser(newUser) */

        //第三种方法 对上式简写
        setUser({ ...user, name: "Google" })
    }

    return <div className={'app'}>
        <div>{counter} --{user.name}--{user.age}</div>
        <button onClick={addHandler}>press1</button>
        <button onClick={changeHandler}>press2</button>

    </div>
}

//导出App
export default App;

