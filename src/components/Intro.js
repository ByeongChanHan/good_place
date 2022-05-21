import React, { Component } from "react";
import "../styles/intro.css";

class Intro extends Component {
    render() {
        return (
            <div>
                <h1 className="intro">오늘 뭐먹지?</h1>
                <h2 className="subintro">자신만의 맛집을 추천해주세요</h2>
            </div>
        )
    }
}
export default Intro