import React from "react";
/*高阶组件*/
/*高阶组件是react中对组件逻辑进行重用的技术。但高阶组件本身并不是React的API.
它只是一种模式，这种模式是由react本身的组合性质必然产生的*/
/* 具体而言，高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件*/
const EnhancedComponent=heightOrderComponent(WrappedComponent);
/* 1对比组件将props转化成UI,高阶组件则是一个组件转换成另一个新组件*/
/* 2高阶组件在React第三方库中很常见，比如Redux的connect方法和Relay的createContainer.*/

/* 使用高阶组件解决交叉问题*/
// 在React中组件是代码复用的主要单元。但是一些模式不适用传统的组件
// 例如，假设你有一个CommentList组件，该组件从外部数据源订阅数据并渲染评论列表：
class CommentList extends React.Component{
    constructor(){
        super();
        this.handleChange=this.handleChange.bind(this);
        this.state={
            // "DataSource" 就是全局的数据源
            comments:DataSource.getComments(),
        }
    }
    componentWillUnmount() {
        // 清除事件处理函数
        DataSource.removeChangeListener(this.handleChange);
    }
    componentDidMount() {
        // 添加事件处理函数订阅数据
        DataSource.addChangeListener(this.handleChange);
    }
    handleChange() {
        // 任何时候数据发生改变就更新组件
        this.setState({
          comments: DataSource.getComments()
        });
    }
    render(){
        return (
            <div>
              {this.state.comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </div>
        );
    }
}
// 然后，又写了一个订阅单个博客文章的组件，该组件遵循类似的模式：
class BlogPost extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        blogPost: DataSource.getBlogPost(props.id)
      };
    }
  
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      this.setState({
        blogPost: DataSource.getBlogPost(this.props.id)
      });
    }
  
    render() {
      return <TextBlock text={this.state.blogPost} />;
    }
  }
  /* CommentList和BlogPost组件并不相同---它们调用了DataSource的不同方法获取数据，并且渲染的输出结果不同，
  但是，他们的大部分实现逻辑是一样的 */
  // 1 挂载组件时，向DataSource添加一个监听函数
  // 2 在监听函数内，每当数据源发生变化，都是调用setState函数设置新数据
  // 3 挂载组件时，移除监听函数
   
