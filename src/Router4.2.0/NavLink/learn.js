// <Navlink>总结
// 这是<Link>的特殊版，顾名思义就是为页面导航准备的，因为导航要有激活状态

/* 1 activeClassName:string*/
// 导航选中激活的时候的样式名，默认样式名为：active
<NavLink to="/about" activeClassName="selected"></NavLink>

/* 2 activeStyle: object (如果不想使用样式名就直接写style)*/
<NavLink to="/contacty" activeStyle={{color:'green',fontWeight:"bold"}}></NavLink>
    // exact: bool
    // 若为 true，只有当访问地址严格匹配时激活样式才会应用

    // strict: bool
    // 若为 true，只有当访问地址后缀斜杠严格匹配（有或无）时激活样式才会应用

    // isActive: func
    // 决定导航是否激活，或者在导航激活时候做点别的事情。不管怎样，它不能决定对应页面是否可以渲染
/* 3 */