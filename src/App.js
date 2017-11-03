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
        <WelcomeDialogS/>
      </div>
    );
  }
}

const numbers = [1, 2, 3, 4];

export default App;
