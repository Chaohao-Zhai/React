import React from "react"
import ReactDOM from "react-dom/client"
import App from "./01-base/10-循环渲染"

//组件引入  当成一个标签
//ReactDOM.render(<App />, document.getElementById('root'))   


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
/* JSX ==JS+XML */