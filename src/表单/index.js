import React from "react";
// 表单
// 受控组件
/*在HTML当中，像<input>,<textarea>, 和 <select>这类表单元素会维持自身状态，
并根据用户输入进行更新。但在React中，可变的状态通常保存在组件的状态属性中，并且只能用 setState(). 方法进行更新.*/
/*我们通过使react变成一种单一数据源的状态来结合二者.
React负责渲染表单的组件仍然控制用户后续输入时所发生的变化。
相应的，其值由React控制的输入表单元素称为“受控组件”。
*/
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''}
    }
    handleChange(event){
        this.setState({value:event.target.value.toUpperCase()});
    }
    handleSubmit(event){
        event.preventDefault();
        alert('你提交的名字是' + this.state.value);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}
/*使用"受控组件",每个状态的改变都有一个与之相关的处理函数。
这样就可以直接修改或验证用户输入。例如，我们如果想限制输入全部是大写字母，我们可以将handleChange 写为如下：
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()});
}*/

// teatarea标签
/*在html中，textarea通过定义子节点定义它的文本内容:
<textarea>
    这是textarea的内容
</textarea>*/
// 在React中，<textarea>会用value属性来代替。这样的话，表单中的<textarea> 非常类似于使用单行输入的表单：
class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '请在文本框中输入内容'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('你输入的内容是 ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Content:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  class AllForm extends React.Component{
      render(){
          return(
              <div>
                  <NameForm/>
                  <EssayForm/>
                  <FlavorForm/>
                  <Reservation/>
              </div>
          )
      }
  }

  // select标签
  // 在html中，<select>会创建一个下拉列表，
  /*<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>*/
/*请注意，Coconut选项最初由于selected属性是被选中的。
在React中，会在根select标签上而不是在当前的selected属性上使用value属性。*/
class FlavorForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:'西瓜'}
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('你最喜欢的水果是: ' + this.state.value);
        event.preventDefault();
      }
    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    <select value={this.state.value} onChange={this.handleChange.bind(this)}>
                    <option value="香蕉">香蕉</option>
                    <option value="苹果">苹果</option>
                    <option value="桃子">桃子</option>
                    <option value="西瓜">西瓜</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

// 多个输入的解决方法
/* 当需要处理多个受控的input元素时，你可以通过给每个元素添加一个name属性，来让处理函数根据event.target.name的值来选择
    做什么
*/
class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isGoging:true,
            numberOfGuests:2
        }
    }
    handleInputChange(event){
        const target=event.target;
        const value=target.type==="checkbox"?target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value
        })
        // 相当于ES5的语法
        /* var  partialState={}
            partialState[name]=value;
            this.setState(partialState)
        */
    }
    render(){
        return (
            <form>
            <label>
              布尔值是：
              <input name="isGoging" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange.bind(this)}/>
            </label>
            <br/>
            <label>
                Number of Guests:
                <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange.bind(this)}></input>
            </label>
          </form>
        )
    }
}
export default AllForm