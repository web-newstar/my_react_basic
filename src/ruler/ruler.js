import React from "react";
import "./ruler.css"
class Ruler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offsetX: 0,
            moveX: 0,
            moveBefore: 0,
            unit: 0.64
        }
    }
    rulerTouch(node) {
        var node = node;
        node.addEventListener('touchstart', (event) => {
            console.log(this);
            //手指按下时的坐标
            this.setState(function(){
                console.log(this)
            })
            // this.setState({offsetX: event.touches[0].clientX})
            // console.log(self.state.offsetX) console.log(this.state.offsetX) 初始化第一次滑动的距离为0
            // moveBefore = 0;
        });
        node.addEventListener("touchmove", () => {
            console.log(this)
            node=null;
        })
    }
    render() {
        return (
            <div>
                <span>刻度：
                    <span id="num">0.00</span>
                </span>
                <div className="ruler-container">
                    <div className="triangle"></div>
                    <div
                        className="ruler"
                        data-offset="0"
                        ref={node => {
                        this.rulerTouch(node)
                    }}>
                        <ul className="ruler-ul">
                            <li>
                                <span>10</span>
                            </li>
                            <li>
                                <span>20</span>
                            </li>
                            <li>
                                <span>30</span>
                            </li>
                            <li>
                                <span>40</span>
                            </li>
                            <li>
                                <span>50</span>
                            </li>
                            <li>
                                <span>60</span>
                            </li>
                            <li>
                                <span>70</span>
                            </li>
                            <li>
                                <span>80</span>
                            </li>
                            <li>
                                <span>90</span>
                            </li>
                            <li>
                                <span>100</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
    componentDidMount() {}
}
export default Ruler;