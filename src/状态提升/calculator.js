import React from "react";
function BoilingVerdict(props){
    if(props.celsius>=100){
        return <h2> 水会烧开 </h2>
    }
    return <h2> 水还没有烧开 </h2>
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            scale:'c',
            temperature:''
        }
    }
    handleCelsiusChange(temperature){
            this.setState({
            scale:'c',
            temperature
        })
        console.log(this.state.scale);
        console.log(this.state.temperature)
    }
    handleFahrenheitChange(temperature){
        this.setState({
            scale:'f',
            temperature
        })
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
const scaleName={
    c: '摄氏温度',
    f: '华氏温度'
}
class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temperature:''
        }
    }
    handleChange(e){
        // this.setState({
        //     temperature:e.target.value
        // })
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        // const temperature=this.state.temperature;
        const temperature=this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
            <legend>输入{scaleName[scale]}</legend>
            <input
              value={temperature}
              onChange={this.handleChange.bind(this)} />
          </fieldset>
        )
    }
}
// 转化函数
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
function tryConvert(temperature,convert){
    const input=parseFloat(temperature);
    if(Number.isNaN(input)){
        return ''
    }
    const output=convert(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();
}

export default Calculator;