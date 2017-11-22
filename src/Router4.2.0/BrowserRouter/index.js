import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Link} from "react-router-dom"

const getConfirmation=()=>{
    console.log('这是测试BrowserRouter')
}
const A =()=>(
    <BrowserRouter basename="/nihao" forceRefresh={false} getUserConfirmation={getConfirmation()} keyLength={12}>
        <div>
                        
            {<Link to="/">Home</Link>}
            <Route exact path="/" component={Home}/>            
        </div>
    </BrowserRouter>
)
const Home=(props)=>{
    return (
        <h1>这是首页</h1>
    )
}
export default A;   