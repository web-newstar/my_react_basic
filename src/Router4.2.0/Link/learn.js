// 这是我对link的一些总结
// <Link>为你的应用提供声明式，无障碍导航

// to:string
// 作用：跳转到指定路径
// 使用场景：如果只是单纯的跳转就直接用字符串的形式

// to:Object
// 作用：携带参数跳转到指定路径   
/* 作用场景：比如你点击的这个链接将要跳转的页面需要展示此链接的内容，又比如这是
   支付跳转，需要把商品的价格信息传递过去*/

   <link to={{
       pathname:"/couser",
       search:"?sort=name",
       state:{price:6}
   }}></Link>

// replace:bool
/* 为 true 时，点击链接后将使用新地址替换掉上一次访问的地址，什么意思呢，
比如：你依次访问 '/one' '/two' '/three' ’/four' 这四个地址，如果回退，
将依次回退至 '/three' '/two' '/one' ，这符合我们的预期，
假如我们把链接 '/three' 中的 replace 设为 true 时。
依次点击 one two three four 然后再回退会发生什么呢？会依次退至 '/three' '/one'！
*/