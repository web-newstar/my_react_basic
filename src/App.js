import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 引入ruler
// import Ruler from './ruler';


// Reac新特性
// 1 用errorboundary处理错误
import ReactErrorBoundary from "./React新特性/ErrorBoundary"
// 2 在 render 中返回没有容器元素的多个元素
import ReactMultiElementRender from "./React新特性/MultiElementRender";
// 3 用 Text Only Component 减少 DOM 层级
import ReactTextOnlyComponent from "./React新特性/TextOnlyComponent";
// 4 用 createPortal 把组件渲染到当前组件树之外
import ReactReactPotal from "./React新特性/ReactPotal";
// 5 更加自由的dom属性
import ReactDomAttributes from "./React新特性/DomAttributes"
// 6 在 setState 时用 null 避免不必要的渲染
import ReactAvoidUpdate from "./React新特性/AvoidUpdate"
class App extends Component {                                                                     
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactErrorBoundary/>
        <ReactMultiElementRender/>
        <ReactTextOnlyComponent/>
        <ReactReactPotal/>
        <ReactDomAttributes/>
        <ReactAvoidUpdate/>
      </div>
    );
  }
}

export default App;
