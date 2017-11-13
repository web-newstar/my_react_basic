import React from "react";
/*本质上讲，JSX只是React.createElement(component,props,...children)方法提供的语法糖*/

<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
// 编译为
React.createElement(MyButton,{color:'blue',shadowSize:2},'click me')

// 如果没有子代，你可以使用闭合标签
<div className="sidebar" />
React.createElement(
    'div',
    {className:'siderbar'},
    null
)
/*指定React元素类型*/
// 1 React必须先声明
import React from 'react';
import CustomButton from './CustomButton';
function WarningButton(){
    // 返回 React.createElement(CustomButton,{color:'red'},null)
    return <CustomButton color="red"></CustomButton>
}
// 2 点表示法
// 可是使用JSX中的点表示法来引用React组件。
import React from "react";
const MyComponents={
    DatePicker:function DatePicker(props){
        return <div> this is a {props.color} datepicker </div>
    }
}
function BlueDatePicker(){
    return <MyComponents.DatePicker color="blue"/>
}
// 在运行时选择元素类型
// 你不能使用表达式来作为 React 元素的标签\
// 如果你的确想通过表达式来确定 React 元素的类型，请先将其赋值给大写开头的变量。这种情况一般会在你想通过属性值条件渲染组件时出现
import React from 'react';
import { PhotoStory, VideoStory } from './stories';
const components = {
  photo: PhotoStory,
  video: VideoStory
};
function Story(props) {
  // 错误！JSX 标签名不能为一个表达式。
  return <components[props.storyType] story={props.story} />;
}
function Story(props) {
    // 正确！JSX 标签名可以为大写开头的变量。
    const SpecificStory = components[props.storyType];
    return <SpecificStory story={props.story} />;
  }


/*属性*/
// 在jsx中有几种不同的方式来指定属性
/*if语句和for循环在javascript中不是表达式，因此它们不能直接在jsx中使用，所以你可以 将它们放在周围的代码中*/
function NumberDescriber(props){
    let description;
    if (props.number % 2 == 0) {
        description=<strong>even</strong>
    }else{
        description=<i>odd</i>
    }
    return <div>{props.number} is a {description} number</div>
}
// 字符串常量
<MyComponent message="hello world" />
// 默认为true
<MyTextBox autocomplete />
<MyTextBox autocomplete={true} />
/*一般情况下，我们不建议这样使用，因为它会与 ES6 对象简洁表示法 混淆。比如 {foo} 是 {foo: foo} 的简写，而不是 {foo: true}。这里能这样用，是因为它符合 HTML 的做法*/
// 扩展属性
function App1(){
    return <Greeting firstName="Ben" lastName="Hector" />;
}
function App2() {
    const props = {firstName: 'Ben', lastName: 'Hector'};
    return <Greeting {...props} />;
}


/*子代*/
// 在包含开始和结束标签的JSX表达式中，标签之间的内容作为特殊的参数传递：props.children
// 1