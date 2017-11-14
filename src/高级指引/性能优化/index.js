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

class ListOfWords extends React.PureComponent {
    constructor(props){
        super(props)
    }
    render() {
        return <div>{this
                .props
                .words
                .join(',')}</div>;
    }
}
/*大部分情况下，你可以使用React.PureComponent而不必写你自己的shouldComponentUpdate，它只做一个浅比较。但是由于浅比较会忽略属性或状态突变的情况，此时你不能使用它。*/
class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick() {
        // This section is bad style and causes a bug

        // const words = this.state.words;
        // words.push('marklar');
        // this.setState({words: words});

        //  解决状态和属性的突变
        this.setState((prevState)=>{
            console.log(prevState);
            //return {words:prevState.words.concat(["hello"])}

            // ES6的写法
            return {words:[...prevState.words,'hello']}
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>添加</button>
                <ListOfWords words={this.state.words}/>
            </div>
        );
    }
}

// 不会突变的数据力量
// 避免此类问题最简单的方式是避免使用值可能会突变的属性或状态。例如，上面例子中的handleClick应该用concat重写成：

export default WordAdder;