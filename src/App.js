import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// react新特性
import ReactNewFatures from "./React新特性";
// 事件处理
import EventHandle from "./事件处理";
// 天剑渲染
import Render from "./条件渲染"
class App extends Component {                                                                     
  render() {
    return (
      <div className="App">
        <h1>这是我对react一些总结</h1>     
        {/* <ReactNewFatures/>    */}
        {/* <EventHandle/> */}
        <Render isLoggedIn={false}/>
      </div>
    );
  }
}

export default App;
