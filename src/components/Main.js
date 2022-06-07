import React, { Component } from "react";
import "../styles/main.css";
import Foodcontent from "./Foodcontents.js"

class Main extends Component {
    render() {
        let ArrFilter = ["모두", "한식", "중식", "일식", "양식", "분식", "술집", "고기"];
        return (
            <div>
                <div className="tag_list">
                    {ArrFilter.map((foods, index) => (
                        <FilterButton foods={foods} key={index}></FilterButton>
                    ))}
                </div>
                <Foodcontent></Foodcontent>
            </div>
        )
    }
}

const FilterButton = (props) => {
    return (
        <button className="tagbutton">{props.foods}</button>
    )
}
export default Main