//  src/index.js  是js的入口文件
//引入 ReactDOM
import ReactDOM from 'react-dom/client'

//引入App组件
import App from './App'



//获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'))

//将APP渲染
root.render(<App />)

