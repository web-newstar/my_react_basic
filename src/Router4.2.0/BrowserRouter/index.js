import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Link} from "react-router-dom"
import './index.css';
const { render } = ReactDOM
const getConfirmation=()=>{
    console.log('这是测试BrowserRouter')
}
// 
const A = () => (
    <BrowserRouter
      basename="/minooo"
      forceRefresh={false}
      getUserConfirmation={getConfirmation()}
      keyLength={12}
      >
      <div>
        <AddressBar/>
        
        <Link to="/">Home</Link>
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  )
  
  const Home = (props) => {console.log(props,'home'); return <h1>Home Page</h1>}
  
  /* 为了展示URL的变化的组件 请无视我*/
  const AddressBar = () => (
    <Route render={({location: pathname, history}) => (
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
        <div className="url">URL: {window.location.pathname}</div>
      </div>
  
    )}/>
  )
  
export default A;   