// 组件和props
import React from "react";
import ReactDOM from "react-dom";
// 函数定义组件和类定义组件
function Welcome(props) {
    return <h1>hello,{props.name}</h1>
}
// 可以使用es6 class来定义一个组件
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
// 组件渲染
const element = <div/>;
const element2 = <Welcome name="sara"/>;
ReactDOM.render(element, document.getElementById('root'))

// 组合组件
function App() {
    return (
        <div>
            <Welcome name="sara"/>
            <Welcome name="sara2"/>
            <Welcome name="sara3"/>
        </div>
    )
}
ReactDOM.render(
    <App/>, document.getElementById('root'));

// props的只读性

