import React from "react";
import './index.css'
// 条件渲染
/*在react中，可以创建各种不同的组件来封装你需要的各种行为，然后根据应用的状态变化渲染其中的一部分*/
/*React中的条件渲染和javascript中的一致，使用javascript操作符if或者条件运算符来创建表示当前
状态的元素，然后让react根据它们来更新UI*/
// 1 先创建两个组件
function  UserGreeting(props){
    return <h1 className="index">Welcome Back</h1>
}
function  GuestGreeting(props){
    return <h1 className="index">Please Sign Up</h1>
}
// 2 创建一个Greenting组件，它会根据用户是否登录来显示其中之一
function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}
// 3 元素变量
// 可以使用变量来存储元素，这样可以有条件的渲染组件的一部分，而输出的其他部分不会更改
function LoginButton(props){
    return (
        <button onClick={props.onClick}>
        Login
      </button>
    )
}
function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
// 4 创建一个名为 LoginControl 的有状态的组件。
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        }
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button=null;
        {isLoggedIn?button=<LogoutButton onClick={this.handleLogoutClick.bind(this)}/>:button=<LoginButton  onClick={this.handleLoginClick.bind(this)}/>}
        return (
            <div>
              <Greeting isLoggedIn={isLoggedIn} />
              {button}
              /* 加入5的练习*/
              <Mailbox unreadMessages={messages}/>
              /* 加入6的练习*/
              <Page/>
            </div>
          );
    }    
}

// 5 与运算符 &&
/*通过用花括号包裹代码在 JSX 中嵌入任何表达式 ，也包括 JavaScript 的逻辑与 &&，它可以方便地条件渲染一个元素。*/
function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h2>你们好</h2>
            {unreadMessages.length > 0 &&
                <h3>
                你有 {unreadMessages.length} 未读的信息
                </h3>
            }
        </div>
    )
}
const messages = ['React', 'Re: React', 'Re:Re: React'];
// 6 阻止组件的渲染
// 在少数情况下，希望隐藏组件，即使它被其他组件渲染。让render方法返回null，而不是它的渲染结果即可实现
// 在下面的例子中，<WarningBanner /> 根据属性 warn 的值条件渲染。如果 warn 的值是 false，则组件不会渲染：
function WarningBanner(props){
    if(!props.warn){
        return null
    }
    return (
        <div className="warning">
            Warings!
        </div>
    )
}
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={showWarning:true}
    }
    handleToggleClick(){
        this.setState((preState)=>({
            showWarning:!preState.showWarning
        }))
        /*setState更新状态的两种方式
            1 setState({showWarning:'value'})
            2 setState(function(preState){
                return {showWarning:'valu'e'}
            })
        */
    }
    render(){
        const warn=this.state.showWarning;
        console.log(warn)
        return (
            <div>
                <WarningBanner warn={warn}/>
                <button onClick={this.handleToggleClick.bind(this)}> 
                    {warn?'Hide':'Show'}
                </button>
            </div>
        )
    }
}
export default LoginControl;