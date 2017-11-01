import React from "react";
// React 具有强大的组合模型，我们建议使用组合而不是继承来复用组件之间的代码 

// 1 包含关系 一些组件不能提前知道它们的子组件是什么,建议这些组件使用
// children 属性将子元素直接传递到输出。
function FancyBorder(props) {
    console.log(props)
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
function WelcomeDialog() {
    return (
        <FancyBorder color="red">
            <h1 className="Dialog-title">
                欢迎
            </h1>
            <p className="Dialog-message">
                感谢您的支持
            </p>
        </FancyBorder>
    );
}
// 有时你可能在组件中有多个入口，这种情况下你可以使用自己约定的属性而不是children
function SplitPane(props){
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}
function MoreEntry(){
    return (
        <SplitPane left={<Contacts />} right={
        <Chat />}></SplitPane>
    )
}
function Contacts(){
    return <div>这是Contact</div>
}
function Chat(){
    return <div>这是Chat</div>
}

// 特殊实例
// 在react中，通过配置属性用较特殊的属性渲染较通用的组件
function DialogS(props){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder > 
    )
}
function WelcomeDialogS(){
    return (
        <DialogS title="欢迎你" message="感谢你的到来"/>
    )
}
// export default WelcomeDialog
// export default MoreEntry
export default WelcomeDialogS;