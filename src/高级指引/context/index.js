import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
console.log(Router)
class Button extends React.Component {
    render() {
        return (
            <button style={{
                background: this.context.color
            }}>
                {this.props.children}
            </button>
        )
    }
}

Button.contextTypes = {
    color: PropTypes.string
};
class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text}
                <Button color={this.props.color}>Delete</Button>
            </div>
        )
    }
}

class MessageList extends React.Component {
    getChildContext() {
        return {color: 'purple'}
    }
    render() {
        // const color = 'purple';
        const children = this
            .props
            .message
            .map((message, index) => {
                return <Message text={message.text} key={index}></Message>
            })
        return (
            <div>
                {children}
                <BasicList/>
            </div>
        )
    }
}
MessageList.childContextTypes = {
    color: PropTypes.string
}

/*父子组件耦合*/
const BasicList = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/topics">主题</Link></li>                
            </ul>
            <hr/>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/topics' component={Topics}/>
            
        </div>
    </Router>
)
function Home(props){
    return (
        <div>首页</div>
    )
}
function About(props){
    return (
        <div>关于</div>
    )
}
function Topics(props){
    return (
        <div>主题</div>
    )
}

/*在生命周期函数中引用Context*/
/* 在无状态函数组件中引用Context*/
// 如果contextTypes作为函数参数被定义的话，无状态函数组件也是可以引用context。以下代码展示了用无状态函数组件写法的Button组件。
const NewButton=({children,context})=>(
    <button style={{background:context.color}}>
        {children}
    </button>
)
NewButton.contextTypes={
    color:PropTypes.string
}
export default MessageList;