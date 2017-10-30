// 组件和生命周期
import React from "react";
import ReactDOM from "react-dom";
function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props
                    .date
                    .toLocaleTimeString()}.</h2>
        </div>
    )
}
function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>, document.getElementById('root'))
}
setInterval(tick, 1000);
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this
                        .state
                        .date
                        .toLocaleTimeString()}.</h2>
            </div>
        )
    }
    tick() {
        this.setState({date: new Date()});

    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }
}
ReactDOM.render(
    <Clock/>, document.getElementBuId('root');)

// 正确的使用状态 
//1不要直接更新状态 Wrong
this.state.comment = 'Hello'; // 此代码不会渲染组件

// 2状态更新可能是异步的 wrong 例如，此代码可能无法更新计数器
this.setState({
    counter: this.state.counter + this.props.increment
});
// 要修复它，可以使使用setState()来接受一个函数而不是一个对象，该函数 将接受先前的一个状态作为第一个参数，将需要更新的值作为第二个参数
// correct
this.setState((preState, props) => ({
    counter: preState.counter + props.increment
}))
this.setState(function (preState, props) {
    return {
        counter: prevState.counter + props.increment
    }
})

// 状态更新合并

// 例如，你的状态可能包含一些独立的变量：
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
//   你可以调用 setState() 独立地更新它们：

// 数据自顶向下流动

