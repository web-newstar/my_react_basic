// 对象和方法
// history
/* histoty 是 RR4 的两大重要依赖之一（另一个当然是 React 了），在不同的 javascript 环境中， history 以多种能够行驶实现了对会话（session）历史的管理。*/

history 对象通常具有以下属性和方法：

length: number 浏览历史堆栈中的条目数
action: string 路由跳转到当前页面执行的动作，分为 PUSH, REPLACE, POP
location: object 当前访问地址信息组成的对象，具有如下属性：
pathname: string URL路径
search: string URL中的查询字符串
hash: string URL的 hash 片段
state: string 例如执行 push(path, state) 操作时，location 的 state 将被提供到堆栈信息里，state 只有在 browser 和 memory history 有效。
push(path, [state]) 在历史堆栈信息里加入一个新条目。
replace(path, [state]) 在历史堆栈信息里替换掉当前的条目
go(n) 将 history 堆栈中的指针向前移动 n。
goBack() 等同于 go(-1)
goForward 等同于 go(1)
block(prompt) 阻止跳转


/* history 对象是可变的，因为建议从 <Route> 的 prop 里来获取 location，而不是从 history.location 直接获取。这样可以保证 React 在生命周期中的钩子函数正常执行，例如以下代码：*/

class Comp extends React.Component {
    componentWillReceiveProps(nextProps) {
      // locationChanged
      const locationChanged = nextProps.location !== this.props.location
  
      // 错误方式，locationChanged 永远为 false，因为history 是可变的
      const locationChanged = nextProps.history.location !== this.props.history.location
    }
  }
