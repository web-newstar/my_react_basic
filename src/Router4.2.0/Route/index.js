import React from "react";
import {render} from "react-dom"
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./index.css"
class RouteIndex extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/minooo">
                <div>
                    <AddressBar />
                    <Link to="/">首页</Link>
                    <Link to="/about/12?name=minooo">关于</Link>
                    <Link to="/contact">联系我们</Link>
                    <Link to="/other/react/router">关于</Link>
                    <Link to="/query/user?id=123&name=lt">query</Link>
                    <Link to={{pathname:'/query/user',search:'?id=456&name=nini',states: { price: 18 }}}>query2</Link>
                    <Route exact path="/" component={Home}/>
                    <Route 
                        path="/about/:id"
                        render={({history, location, match}) => <h1>{console.log(history, location, match)}
                        About
                        <span
                            onClick={() => {
                            history.push('/', {name: 'mm'})
                        }}>click me</span>
                    </h1>}/>
                    <Route path="/contact" children={({match}) => {
                        return (match && <h1>Contact</h1>) }}/>
                    <Route path="/other/:page?/:subpage?" render={({match})=>(
                        <h1>
                            page:{match.params.page}
                            <hr/>
                            subpage:{match.params.subpage}
                        </h1>
                    )} />
                    <Route path="/query/user" render={({match,location})=>{
                        console.log(location.search)
                        console.log(new URLSearchParams(location.search))
                        return (
                            <div>
                                <p>query</p>
                                <p>match:{JSON.stringify(match)}</p>
                                <p>location:{JSON.stringify(location)}</p>
                                {<p>id:{new URLSearchParams(location.search).get('id')}</p>}
                                <p>name:{new URLSearchParams(location.search).get('name')}</p>
                            </div>
                        )
                    }}></Route>
                </div>

            </BrowserRouter>
        )
    }
}
const Home = (props) => {
    console.log(props, 'home');
    return <h1>这是首页</h1>
}
const AddressBar=()=>{
    return (
        <Route  render={({ location:{pathname}, history})=>{
            console.log(history)
            return (
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
                {<div className="url">URL: {pathname}</div>}
              </div>
            )
        }}>

        </Route>
    )
}
export default RouteIndex