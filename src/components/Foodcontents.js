import React, { Component } from "react";
import foodimg from "../images/foods_test.jpg"
import "../styles/foodcontents.css"

class Foodcontent extends Component {
    render() {
        return (
            <div className="contents_list">
                <div className="contents">
                    <img className="food_image" src={foodimg} alt="음식사진"></img>
                    <div className="food_textbox">
                        <span className="restaurant_name">라멘집</span>
                        <span className="restaurant_detail">용선생</span>
                    </div>
                </div>
                <div className="contents">
                    <img className="food_image" src={foodimg} alt="음식사진"></img>
                    <div className="food_textbox">
                        <span className="restaurant_name">라멘집</span>
                        <span className="restaurant_detail">용선생</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Foodcontent