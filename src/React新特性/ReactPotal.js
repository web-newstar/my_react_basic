import React from "react";
import ReactDOM from 'react-dom';
import './ReactPotal.css';
class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.container = document.createElement('div');
        document
            .body
            .appendChild(this.container)
        console.log(this.props)
    }
    render() {
        return ReactDOM.createPortal(
            <div className="overlay">
            <span className="overlay__close" onClick={this.props.onClose}>
                &times;
            </span>
            {this.props.children}
        </div>, this.container);
    }
    componentWillUnmount() {
        document
            .body
            .removeChild(this.container);
    }
}
class ReactReactPotal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            overlayActive:true
        }
    }
    closeOverlay(e){
        this.setState({overlayActive:false})
        }
        render() {
        return (
            <div>
                <h1>Dashboard</h1>
                {this.state.overlayActive && <Overlay onClose={this.closeOverlay.bind(this)}>overlay content</Overlay>}
            </div>
        )
    }
}
export default ReactReactPotal;