import React from "react";
/*有时候我们需要通过函数来判断组件状态更新是否触发重新渲染，
在 React 16 中，我们可以通过调用 setState 时传入 null 来避免组件重新渲染，
这也就意味着，我们可以在 setState 方法内部决定我们的状态是否需要更新，
本节会实例演示如何利用该特性解决城市地图应用中重复城市选择导致的重复渲染问题。*/
const API_BASE = 'http://47.94.77.75/api/v3';
class CityMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }

        setTimeout(() => {
            this.setState({loading: false});
        }, 1000);
    }
    componentWillReceiveProps(props,state) {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      }
    
    render() {
        if (this.state.loading) {
            return <div>loading ...</div>
        }
        const map = `${API_BASE}/google/maps/staticmap?maptype=roadmap&size=400x200&center=${this.props.city}&zoom=12`;
        return (
            <div>
                <img src={map} alt="" width={400} height={200}/>
            </div>
        );
    }
}
class ReactAvoidUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            city:"london"
        }
    }
    selectCity(e){  
        const city=e.target.value;
        this.setState((state)=>{
            if(state.city===city){
                return null
            }
            return {city:city}
        })    
    }
    render(){
        return(
            <div>
                <button value="London" onClick={this.selectCity.bind(this)}>London</button>
                <button value="New York"  onClick={this.selectCity.bind(this)}>New York</button>
                <CityMap city={this.state.city}/>
            </div>
        )
    }
}
export default ReactAvoidUpdate