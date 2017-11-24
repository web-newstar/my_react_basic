import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {render} from "react-dom"
const Links = () => (
    <nav>
        <Link to="/">首页</Link>
        <Link to="/contact">联系我们</Link>
        <Link replace to="/about">关于</Link>
        <Link to="/nested">Nested</Link>
    </nav>
)
const Nested =()=>(
    <div>
        <Link to="/nested/one" >One</Link>
        <Link to="/nested/two" >Two</Link>
        <Link to="/nested/three" >Three</Link>
        <div>选择一个点击</div>
        <Route path="/nested/:detail?" render={({match})=>(
            <h2>
                URL:{match.params.detail || "detail"}
            </h2>
        )}></Route>      
    </div>
)
const AddressBar=()=>(
    <Route render={({history,location})=>(
        <div className="address-bar">
        <div>
          <button
            className="ab-button"
            onClick={history.goBack}
          >◀︎</button>
        </div>
        <div>
          <button
            className="ab-button"
            onClick={history.goForward}
          >▶</button>
        </div>
        <div className="url">URL: {location.pathname}</div>
      </div>
  
    )}>

    </Route>
)
const LinkStudy = () => (
    <BrowserRouter>
        <div>
            <AddressBar/>
            <Links/>            
            <Route exact path='/' render={()=>(<h1>首页</h1>)}></Route>
            <Route path='/contact' render={()=>(<h1>联系我们</h1>)}></Route>
            <Route path='/about' render={()=>(<h1>关于我们</h1>)}></Route>
            <Route path='/nested' component={Nested}></Route>
            
        </div>
    </BrowserRouter>
)
export default LinkStudy;