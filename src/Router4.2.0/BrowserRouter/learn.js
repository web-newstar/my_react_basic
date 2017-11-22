import React from 'react';
import {Router, Route,hashHistory } from 'react-router';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Index from "./First";
import About from "./About";
import Contact from "./Contact";
/*
    React Router 4.0 （以下简称 RR4） 已经正式发布，它遵循React的设计理念，即万物皆组件。所以 RR4 只是一堆 提供了导航功能的组件（还有若干对象和方法），具有声明式，可组合性的特点。
*/
// RR4 本次采用单代码仓库模型架构（monorepo），这意味者这个仓库里面有若干相互独立的包，分别是：
// 1 react-router(React Router核心)
// 2 react-route-dom(用于DOM绑定的React Router)
// 3 react-router-redux(React Router 和 Redux 的集成)
// 4 react-router-native(用于React Native的React Router)
// 5 react-router-config (静态路由配置的小助手)

/* 1 引用 */
// react-router 还是 react-router-dom
// 他们两个只要引用一个就行了，不同之处就是后者比前者多出了 <Link> <BrowserRouter> 这样的 DOM 类组件。 
// 因此我们只需引用 react-router-dom 这个包就行了。当然，如果搭配 redux ，你还需要使用 react-router-redux

/* 2 组件 <BrowserRouter>*/
// 一个使用了 HTML5 history API 的高阶路由组件，保证你的 UI 界面和 URL 保持同步。此组件拥有以下属性：

//// (1) basename:string
// 作用：为所有位置添加一个基准URL
// 使用场景：假如你需要把页面部署到服务器的二级目录，你可以使用 basename 设置到此目录
<BrowserRouter basename="/nihao" />
<Link to="/react"/>  //最终渲染为 <a href="/nihao/react">
//// (2) getUserConfirmation:fun
// 作用：导航到此页面前执行的函数，默认使用 window.confirm
// 使用场景：当需要用户进入页面前执行什么操作时可用，不过一般用到的不多。
const getConfirmation=function(message,callback){
    const allowTransition=window.confirm(message);
    callback(allowTransition)
}
<BrowserRouter getUserConfirmation={getConfirmation("are you ok?",callback)}/>
//// (3) forceRefrash:bool
// 作用：当浏览器不支持 HTML5 的 history API 时强制刷新页面。
// 使用场景：同上。
//// (4) keyLength: number
//作用：设置它里面路由的 location.key 的长度。默认是6。（key的作用：点击同一个链接时，每次该路由下的 location.key都会改变，可以通过 key 的变化来刷新页面。）
//使用场景：按需设置。
<BrowserRouter keyLength={12} />
const supportsHistory = 'pushState' in window.history
<BrowserRouter forceRefresh={!supportsHistory} />

//// (5)children: node
// 作用：渲染唯一子元素。
// 使用场景：作为一个 Reac t组件，天生自带 children 属性。
