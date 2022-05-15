import React, { Component } from 'react'


const Nav = () => {
    return <div> nav</div >
}

const Swiper = () => {
    return <div>swiper0</div>
}

function Tabbar () {
    return <div>tabbar0</div>
}



export default class App extends Component {
    render () {
        return (
            <div>
                <Nav></Nav>   {/*  {'大写表组件'} */}

                <Swiper> </Swiper>

                <Tabbar> </Tabbar>


            </div>
        )
    }
}

