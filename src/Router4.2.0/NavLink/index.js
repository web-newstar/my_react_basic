import React from "react";
import {render} from "react-dom";
import {BrowserRouter,Route,Link,NavLink} from "react-router-dom";
import './index.css'
const isActiveFun=(match,location)=>{
    return match;
}
const Links =()=>(
    <nav>
        <NavLink exact activeClassName="active" to="/">首页</NavLink>
        <NavLink activeStyle={{color:"green"}} to="/about">关于</NavLink>
        <NavLink isActive={isActiveFun} to="/contact">联系</NavLink>
    </nav>
)
const NavLinkStudy =()=>(
    <BrowserRouter>
        <div>
            <Links/>
            <Route exact path="/" render={()=>{ return <h1>这是首页 </h1>}}></Route>
            <Route path="/about" render={() => <h1>关于</h1>} />
            <Route path="/contact" render={() => <h1>联系我们</h1>} />
        </div>
    </BrowserRouter>
)
export default NavLinkStudy;