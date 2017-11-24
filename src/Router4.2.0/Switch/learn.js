// 这是我对Switch的总结
// <Switch>
// 只渲染出第一个与当前访问地址匹配的<Route>和<Redirect>
<Route path="/about" component={About}/>
<Route path="/:user" component={User}/>
<Route component={NoMatch}/>

/*如果你访问 /about，那么组件 About User Nomatch 都将被渲染出来，
因为他们对应的路由与访问的地址 /about 匹配。这显然不是我们想要的，
我们只想渲染出第一个匹配的路由就可以了，于是 <Switch> 应运而生！*/

// <Switch> 对于转场动画也非常适用，因为被渲染的路由和前一个被渲染的路由处于同一个节点位置！
<Fade>
  <Switch>
    {/* 用了Switch 这里每次只匹配一个路由，所有只有一个节点。 */}
    <Route/>
    <Route/>
  </Switch>
</Fade>

<Fade>
  <Route/>
  <Route/>
  {/* 不用 Switch 这里可能就会匹配多个路由了，即便匹配不到，也会返回一个null，使动画计算增加了一些麻烦。 */}
</Fade>

// children:node
/* <Switch>下的子节点只能是<Route>或<Redirect>元素。只有与当前访问地址匹配的第一个子节点
才会被渲染,*/