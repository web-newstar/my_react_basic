/*使用 PropTypes 进行类型检*/
// 随着应用日渐庞大，你可以通过类型检查捕获大量错误 下面是使用不同验证器的例子
import PropTypes from "prop-types";
MyComponent.PropTypes = {
    // 你可以将属性声明为以下 JS 原生类型
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,
    /*ES6 中的 Symbol 也是一种数据类型，但是不是字符串，也不是对象，而是一种新的数据类型：第七种数据类型。*/

    // 任何可被渲染的元素（包括数字、字符串、子元素或数组）。
    optionalNode: PropTypes.node,

    // 一个 React 元素
    optionalElement: PropTypes.element,

    // 你也可以声明属性为某个类的实例，这里使用 JS 的 instanceof 操作符实现。
    optionalMessage: PropTypes.instanceOf(Message),

    // 一个指定属性及其类型的对象
    optionalObjectWithShape: PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),

    // 任意类型的数据
    requiredAny: PropTypes.any.isRequired

    //
}

/*限制单个子代*/
// 使用PropTypes.element可以指定只传递一个子代
import PropTypes from 'prop-types';
class MyComponent extends React.Component {
    render() {
        // This must be exactly one element or it will warn.
        const children = this.props.children;
        return (
            <div>
                {children}
            </div>
        );
    }
}
MyComponent.propTypes = {
    children: PropTypes.element.isRequired
};

/*属性默认值*/
class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}
// 为属性指定默认值：
Greeting.defaultProps = {
    name: "Stranger"
}
// 渲染 "Hello, Stranger":
ReactDOM.render(
    <Greeting/>, document.getElementById('example'));

/*defaultProps 用来确保 this.props.name 在父组件没有特别指定的情况下，
有一个初始值。类型检查发生在 defaultProps 赋值之后，
所以类型检查也会应用在 defaultProps 上面。*/