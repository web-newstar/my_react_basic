/* Web Component*/
// React和WEB组件用以解决不同的问题
/*React 和 web组件 被用以解决不同问题。
Web组件为可重用组件提供了强大的封装能力，而React则是提供了保持DOM和数据同步的声明式库。
二者目标互补。作为开发者，你可以随意地在Web组件里使用React，或者在React里使用Web组件，或都有。*/
/*大部分使用React的开发者并不使用Web组件，但你可能想要，尤其若你正在使用那些用Web组件编写的第三方UI组件。*/
import React from "react";
class HelloMessage extends React.Component {
    render() {
      return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
    }
  }
export default HelloMessage;