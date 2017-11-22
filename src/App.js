import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// react新特性
import ReactNewFatures from "./React新特性";
// 事件处理
import EventHandle from "./事件处理";
// 条件渲染
import LoginControl from "./条件渲染"
// 列表&keys
import NumberList from "./列表&keys"
// 表单
import AllForm from "./表单"
// 状态提升
import Calculator from "./状态提升"
// 组合vs继承
import WelcomeDialogS from "./组合vs继承"
// React理念
import FilterableProductTable from "./React理念"
// 高级指引/refs&dom
import Grandparent from "./高级指引/refs&&dom"
// 高级指引/非受控组件
import NameForm from "./高级指引/非受控组件"
// 高级指引/性能优化
import WordAdder from "./高级指引/性能优化";
// 高级指引/context
import MessageList from "./高级指引/context"
// 高级指引/webComponent
import HelloMessage from "./高级指引/webComponent";

/*react路由*/
import A from "./Router4.2.0/BrowserRouter";

class App extends Component {                                                                     
  render() {
    return (
      <div className="App">
        <h1>这是我对react一些总结</h1>     
        {/* <ReactNewFatures/>    */}
        {/* <EventHandle/> */}
        {/* <LoginControl isLoggedIn={false}/> */}
        {/* <NumberList numbers={numbers}/> */}
        {/* <AllForm/> */}
        {/* <Calculator/> */}
        {/* <WelcomeDialogS/> */}
        {/* <FilterableProductTable/> */}
        {/* <Grandparent/> */}
        {/* <NameForm/> */}
        {/* <WordAdder/> */}
        {/* <MessageList message={message}/> */}
        {/* <HelloMessage/> */}
        <A/>
      </div>
    );
  }
}
const message=[
  {text:'1'},
  {text:'2'},    
  {text:'3'},    
  {text:'4'},    
  
]
const numbers = [1, 2, 3, 4];

export default App;
