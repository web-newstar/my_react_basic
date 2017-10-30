import React from "react";
const Fruits = () => [
    <li key="1">苹果</li>,
    <li key="2">栗子</li>,
  ];
class ReactMultiElementRender extends React.Component{
    render(){
        return [
            <ul>
                <li key="3">桃子</li>
                <li key="4">西瓜</li>
                <Fruits/>
            </ul>,
            <div>这是一个div</div>
        ] 
    }
}
export default ReactMultiElementRender