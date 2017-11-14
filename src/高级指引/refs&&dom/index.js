/*Refs 和 Dom*/
import React from "react";
import PropTypes from "prop-types";
// ref 属性接受一个回调函数，它在组件被加载或卸载时会立即执行。
/*当给 HTML 元素添加 ref 属性时，ref 回调接收了底层的 DOM 元素作为参数。
例如，下面的代码使用 ref 回调来存储 DOM 节点的引用。*/
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this
            .focus
            .bind(this);
    }
    focus() {
        // 直接使用原生 API 使 text 输入框获得焦点
        this
            .textInput
            .focus();
    }
    render() {
        // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React 实例上（比如 this.textInput）
        return (
            <div>
                <div>
                    <input
                        type="text"
                        ref={(input) => {
                        this.textInput = input;
                    }}/>
                </div>
                <input type="button" value="Focus the text input" onClick={this.focus}/>
            </div>
        );
    }
}
// 为类组件添加 Ref
/*当 ref 属性用于使用 class 声明的自定义组件时，ref 的回调接收的是已经加载的 React 实例。例如，如果我们想修改 CustomTextInput 组件，实现它在加载后立即点击的效果：*/
class AutoFocusTextInput extends React.Component {
    componentDidMount() {
        console.log(this)
        this
            .textInput
            .focus();
    }
    render() {
        return (<CustomTextInput
            ref={(input) => {
            this.textInput = input;
        }}/>);
    }
}

// ref与与函数式组件
/*你不能在函数式组件上使用 ref 属性，因为它们没有实例：*/
function MyFunctionalComponent() {
    return <input/>;
}

class Parent extends React.Component {
    render() {
        // 这里 `ref` 无效！
        return (<MyFunctionalComponent
            ref={(input) => {
            this.textInput = input;
        }}/>);
    }
}

// 但是，你可以在函数式组件内部使用 ref，只要它指向一个 DOM 元素或者 class 组件：
function CustomTextInput(props) {
    // 这里必须声明 textInput，这样 ref 回调才可以引用它
    let textInput = null;

    function handleClick() {
        textInput.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={(input) => {
                textInput = input;
            }}/>
            <input type="button" value="Focus the text input" onClick={handleClick}/>
        </div>
    );
}
/*对父组件暴露DOM节点 */
// 在极少数情况下，你可能希望从父组件访问子节点的 DOM 节点 虽然你可以向子组件添加 ref,但这不是一个理想的解决方案，因为你只能获取组件实例而不是
// DOM 节点。并且，它还在函数式组件上无效
/*相反，在这种情况下，我们建议在子节点上暴露一个特殊的属性。子节点将会获得一个函数属性，并将其作为 ref 属性附加到 DOM 节点。这允许父代通过中间件将 ref 回调给子代的 DOM 节点*/
// 适用于类组件和函数式组件 function Cus(props){     return (         <div> <input
// ref={props.inputRef}/>             <h2>对父组件暴露DOM节点</h2>         </div>     )
// } class Parents extends React.Component{     render(){         return ( <Cus
// inputRef={el=>this.inputElement=el}/>         )     } componentDidMount(){
//      console.log(this.inputElement) this.inputElement.focus()     } } //
// export default AutoFocusTextInput;
function Cus(props) {
    console.log(props.inputRef)
    return (
        <div>
            <input ref={props.inputRef}/>
        </div>
    )
}
class Parents extends React.Component {
    render() {
        return (
            <Cus
                inputRef={(input) => {
                this.inputRef = input;
            }}></Cus>
        )
    }
}

/*这种模式的另一个好处是它能作用很深。假如有个 Parent 组件不需要 DOM 节点 A，但是某个渲染 Parent 的组件（我们称之为 Grandparent）需要通过它访问。这时我们可以让 Grandparent 传递 inputRef 给 Parent 组件，然后让 Parent 组件将其转发给 CustomTextInput:*/
function Cuss(props) {
    return (
        <div>
            <input ref={props.inputRef}/>
        </div>
    )
}
function Parentsss(props) {
    return (
        <div>
            My input:
            <Cuss inputRef={props.inputRef}/>
        </div>
    );
}
class Grandparent extends React.Component {
    render() {
        return (<Parentsss inputRef={el => {
            this.inputElement = el}}/>);
    }
    
}
export default Grandparent;
