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
            temperature:'',
            scale:'c'
        }
    }
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
        console.log(this.state.scale);
        console.log(this.state.temperature)
      }
    
      handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
      }
    
    render(){
        const temperature=this.state.temperature;
        const scale =this.state.scale;
        const celsius=scale==="f"?tryConvert(temperature,toCelsius):temperature;
        const fahrenheit=scale==="c"?tryConvert(temperature,toFahrenheit):temperature    
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange.bind(this)}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange.bind(this)}/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}
// 添加第二个输入框
// 新的需求：在提供摄氏温度输入的基础上，再提供一个华氏温度输入，并且它们保持同步
// 从Calculator中抽离出一个TemperatureInput组件，给它添加一个值为 c 或 f 的表示温度单位的 scale 属性。
const scaleNames={
    c:"摄氏度",
    f:'华氏温度'
}
class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temperature:''
        }
    }
    handleChange(e){
        /*this.setState({
            temperature:e.target.value
        })*/
        this.props.onTemperatureChange(e.target.value)
        /*需要指出的是，
        我们现在定义的 temperature 和 onTemperatureChange
        这些prop属性的命名没有特殊含义，我们也可以起个其他任何的名字，
        像是value和onChange这些只是命名习惯罢了*/

        /* onTemperatureChange 和 temperature 两个 props 属性
        均由父组件 Calculator 提供。父组件可以通过自身的方法来响应状态数据的改变，
        从而使用新的值来重新渲染两个输入框组件*/
    }
    render(){
        // const temperature=this.state.temperature;
        const temperature=this.props.temperature;
        const scale=this.props.scale
        /* 知道props是只读的 这么一个事实。
        而之前temperature变量是被保存在其自身的 state 中的，
        TemperatureInput 组件只需要调用 this.setState() 就能改变它。
        但现在，temperature 是作为 prop 从父组件传递下来的，TemperatureInput 组件是没有控制权的*/


        /*在React中，这个问题通常是通过让组件“受控”来解决。
        就像 <input> 能够接受 value 和 onChange 这两个prop属性值，
        自定义组件 TemperatureInput 也能接受来自 Calculator 父组件的
         temperature 变量和 onTemperatureChange 方法作为props属性值。*/

        /*做完这些，当 TemperatureInput 组件更新它的温度数值时，
        就会调用 this.props.onTemperatureChange 方法*/
        return(
            <fieldset>
            <legend>请输入 {scaleNames[scale]}:</legend>
            <input value={temperature}
                   onChange={this.handleChange.bind(this)} />
          </fieldset>
        )
    }
}
// 转换函数
// 写两个可以将摄氏度和华氏度互相转换的函数。
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
/*需要另外一个函数，它接受两个参数，第一个接受字符串 temperature 变量，
第二个参数则是上面编写的单位转换函数。最后会返回一个字符串。
我们会使用它来根据一个输入框的输入计算出另一个输入框的值*/
function tryConvert(temperature,convert){
    const input=parseFloat(temperature);
    if(Number.isNaN(input)){
        return ''
    }
    const output=convert(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();
}
/**********************************************************************/
// 状态提升
// Calculator重点两个TemperatureInput组件都在自己的state中独立保存数据，但是我们希望两个输入能够保持同步
/* 在React中，状态分享是通过将state提升至离需要这些数据的组件最近的父组件来完成的，这就是所谓的状态提升，
   需要将TemperatureInput组件保存的state移到Calculator*/

export default Calculator;