import React from "react";
// const Comment = ({text}) => <span>{text.replace(':)', '[smile]')}</span>
const Comment = ({text}) => text.replace(':)', '[smile]')

/*React 16 之前的版本要求只渲染字符串的组件必须把字符串包在无意义的 <span> 或 <div> 中，
而在 React 16 中这种限制已经去掉，也就意味着你可以在组件的 render 方法中直接返回字符串，
创建 Text Only Component，这样会帮我们精简 DOM 层级。*/
class ReactTextOnlyComponent extends React.Component {
    render() {
        return (
            <div>
                <Comment text="这是一个 :)组件"/>
            </div>
        );
    }
}
export default ReactTextOnlyComponent;