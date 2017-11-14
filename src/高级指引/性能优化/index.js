// 性能优化
import React from 'react';
/*一些优化React应用性能的办法*/
// Chrome浏览器内： 1 在项目地址栏内添加查询字符串 ?react_perf（例如，
// http://localhost:3000/?react_perf）。 2 打开Chrome开发工具Timeline 按tab键然后选Record. 3
// 执行你想要分析的动作。不要记录超过20s，不然Chrome可能会挂起。 4 停止记录。 5 React事件将会被归类在 User Timing标签下。

/*案例*/
class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.color)
        if (this.props.color !== nextProps.color) {
            return true;
        }
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <button
                color={this.props.color}
                onClick={() => this.setState(state => ({
                count: state.count + 1
            }))}>
                Count：{this.state.count}
            </button>
        )
    }
}
export default CounterButton;