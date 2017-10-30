import React from "react"
import './index.css'
function UserGreeting(props) {
    return <h1 className="index">Welcome back!</h1>;
}
function GuestGreeting(props) {
    return <h1 className="index">Please sign up.</h1>;
}
// 将创建一个 Render 组件，它会根据用户是否登录来显示其中之一：
function Render(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

// 元素变量 作用：使用变量来存储元素，它可以帮助你有条件的渲染组件将的一部分，而输出的其他部分不会更改 再来看两个新组件分别代表注销和登录：
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
export default Render;