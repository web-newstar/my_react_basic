import React from "react";
/*React 16 对 DOM 组件的属性也做了不少增强，
最让人兴奋的就是对自定义属性的宽容。
本节会用实例演示哪些 DOM 属性会被直接渲染，哪些会被忽略，哪些写法是有效的，哪些写法是无效的，避免在开发过程中踩坑。*/
class ReactDomAttributes extends React.Component {
    render() {
      return (
        <div onClick="alert(1)">Hello</div>
      );
    }
  }
  
  export default ReactDomAttributes;