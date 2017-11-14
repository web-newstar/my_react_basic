/*非受控组件*/
import React from "react";
/*在大多数情况下，我们推荐使用 受控组件 来实现表单。 在受控组件中，表单数据由 React 组件处理。如果让表单数据由 DOM 处理时，替代方案为使用非受控组件。*/
// 要写一个非受控组件，而非为每个状态编写事件处理程序，可以使用ref从DOM获取表单值 1 下面的代码在非受控组件中接受单个属性
class NameForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(event) {
        alert(this.input.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this
                .handleSubmit
                .bind(this)}>
                <label>
                    Name:
                    <input type="text" defaultValue="ltao" ref={(input) => this.input = input}/>
                </label>
                <input type="submit" value="Submit"/>
                <input type ="checkbox" defaultChecked="true"/>
                <input type="radio"/>   
                <select defaultValue="zt">
                    <option>lt</option>
                    <option>zt</option>
                    <option>zjf</option>                    
                </select>
                <textarea defaultValue="NIHAO">
                </textarea>
            </form>
        )
    }
}
// 1 默认值
/*在 React 的生命周期中，表单元素上的 value 属性将会覆盖 DOM 中的值。使用非受控组件时，通常你希望 React 可以为其指定初始值，但不再控制后续更新。要解决这个问题，你可以指定一个 defaultValue 属性而不是 value。*/
export default NameForm;