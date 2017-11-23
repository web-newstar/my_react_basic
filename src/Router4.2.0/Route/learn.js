// <Route>是RR4中最重要的组件了， 它的职责是当页面访问与path匹配时，就渲染出对应的UI界面
// <Route> 自带三个 render method 和三个 props 。
// render method 分别是：<Route component>、 <Route render>、<Route children>
/* 每种 render method 都有不同的应用场景，同一个<Route> 应该只使用一种 render method ，
大部分情况下你将使用 component 。*/

// props 分别是：

// match
// location
// history
// 所有的 render method 无一例外都将被传入这些 props。

// component
<Route path="/user/:username" component={User} />
const User = ({ match, location, history }) => {
    console.log(match)
    console.log(location)
    console.log(history)    
  return <h1>Hello {match.params.username}!</h1>
}

// render:fun
// 此方法适用于内联渲染，而且不会产生上文说的重复装载问题
// 内联渲染
<Route path="/home" render={()=>(<h1>这是首页</h1>)}/>
// 包装 组合
const FadingRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      <FadeIn>
        <Component {...props} />
      </FadeIn>
    )} />
  )