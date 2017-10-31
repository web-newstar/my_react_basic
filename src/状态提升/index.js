import React from "react";
/* 使用react经常遇到几个组件公用状态数据的情况，这种情况下，我们组好将这部分共享的状态提升至
它们最近的父组件当中进行管理*/

/* 创建一个温度计来计算水是否会在给定的温度的下烧开*/
// 1 BoilingVerdict 
function BoilingVerdict(props){
    if(props.celsius>=100){
        return <p>水会烧开</p>
    }
    return <p>水不会烧开</p>
}
// 2 Calculator组件 ：渲染一个<input>来接受一个用户输入
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temperature:''
        }
    }
    handleChange(e){
        this.setState({temperature:e.target.value})
    }
    render(){
        const temperature=this.state.temperature;
        return (
            <fieldset>
                <legend>输入一个摄氏温度</legend>
                <input
                value={temperature}
                onChange={this.handleChange.bind(this)} />
                <BoilingVerdict
                celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}
// 添加第二个输入框
// 新的需求：在提供摄氏温度输入的基础上，再提供一个华氏温度输入，并且它们保持同步
// 从Calculator中抽离出一个TemperatureInput组件，给它添加一个值为 c 或 f 的表示温度单位的 scale 属性。
const scaleNames={
    c:"Celsius",
    f:'Fahrenheit'
}
class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        
    }
}
export default Calculator;