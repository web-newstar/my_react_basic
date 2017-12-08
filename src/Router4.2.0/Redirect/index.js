import React from 'react';
import {BrowserRouter, Route, Link,Redirect,Switch} from "react-router-dom";
import {render} from "react-dom"
import './index.css'
const Links=()=>(
    <nav>
        <Link to="/">首页</Link>
        <Link to="/old/123">旧的</Link>
        <Link to="/new/456">新的</Link>
        <Link to="/redirect/789">重定向</Link>     
        <Link to="/protected">登录</Link>  
    </nav>
)
const AddressBar = () => (
    <Route render={({ location:{pathname}, history}) => (
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
        <div className="url">URL: {pathname}</div>
      </div>
  
    )}/>
  )
const logined=true;
class RedirectStudy extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Links/>
                    <AddressBar/>
                    <Route exact path="/" render={()=>{return <h1>这是首页</h1>}}/>
                    <Route path="/protected" render={()=>{return logined?<h1>欢迎来到登录页面</h1>:<Redirect to="/new/login" />}}/>
                    {/* 适用于需要传参数的重定向需求 */}
                    <Route path="/redirect/:str" render={({match})=>{return <Redirect push to={`/new/${match.params.str}`}></Redirect>}} />
                    {/* 需要被重定向的路径，可以结合switch，这是适用于不需要传参数的重定向需求*/}
                    <Switch>
                        <Route path="/new/:str" render={({match})=>{return <h1>New:{match.params.str}</h1>}}></Route>
                        <Redirect from="/old/:str" to="/new/12342323232"/>
                    </Switch>

                </div>
            </BrowserRouter>    
        )
    }
}
export default RedirectStudy;