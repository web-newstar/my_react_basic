import React from "react";
import {
    BrowserRouter,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect,
    Prompt
} from 'react-router-dom';
import './index.css';
const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
    </nav>
)
const AddressBar = () => (<Route
    render={({location: {
        pathname
    }, history}) => (
    <div className="address-bar">
        <div>
            <button className="ab-button" onClick={history.goBack}>◀︎</button>
        </div>
        <div>
            <button className="ab-button" onClick={history.goForward}>▶</button>
        </div>
        <div className="url">URL: {pathname}</div>
    </div>
)}/>)

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            dirty:false
        }
        this.onInput=this.onInput.bind(this);
    }
    onInput(e){
        const value=e.target.value
        this.setState({dirty:value})
    }
    render() {
        return (
            <div>
                <input type="text" onInput={this.onInput} />
                <Prompt message="数据尚未保存，要离开吗" when={this.state.dirty}/>
            </div>
        )
    }
}
class PromptStudy extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <AddressBar/>

                    <Links/>

                    <Route exact path="/" render={() => <h1>Home</h1>}/>
                    <Route path="/form" component={Form}/>
                </div>
            </BrowserRouter>

        )
    }
}
export default PromptStudy