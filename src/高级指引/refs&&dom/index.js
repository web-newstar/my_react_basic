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
        this.textInput.focus();
      }
    render() {
        // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React 实例上（比如 this.textInput）
        return (
            <div>
                <div>
                <input
                    type="text"
                    ref={(input) => { this.textInput = input; }}
                />
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
            console.log(input)
            console.log(CustomTextInput)
            console.log(input==CustomTextInput)
            this.textInput = input;
            console.log(this.textInput)
        }}/>);
    }
}
export default AutoFocusTextInput;

// ref与与函数式组件
/*你不能在函数式组件上使用 ref 属性，因为它们没有实例：*/
function MyFunctionalComponent() {
    return <input />;
  }
  
  class Parent extends React.Component {
    render() {
      // 这里 `ref` 无效！
      return (
        <MyFunctionalComponent
          ref={(input) => { this.textInput = input; }} />
      );
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
          ref={(input) => { textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );  
  }
// 对父组件暴露DOM节点
