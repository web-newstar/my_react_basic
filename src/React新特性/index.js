import React, {Component} from 'react';
// Reac新特性
// 1 用errorboundary处理错误
import ReactErrorBoundary from "./ErrorBoundary"
// 2 在 render 中返回没有容器元素的多个元素
import ReactMultiElementRender from "./MultiElementRender";
// 3 用 Text Only Component 减少 DOM 层级
import ReactTextOnlyComponent from "./TextOnlyComponent";
// 4 用 createPortal 把组件渲染到当前组件树之外
import ReactReactPotal from "./ReactPotal";
// 5 更加自由的dom属性
import ReactDomAttributes from "./DomAttributes"
// 6 在 setState 时用 null 避免不必要的渲染
import ReactAvoidUpdate from "./AvoidUpdate"
class ReactNewFatures extends React.Component {
    render() {
        return (
            <div>
                <ReactErrorBoundary/>
                <ReactMultiElementRender/>
                <ReactTextOnlyComponent/>
                <ReactReactPotal/>
                <ReactDomAttributes/>
                <ReactAvoidUpdate/>
            </div>
        )
    }
}
export default ReactNewFatures