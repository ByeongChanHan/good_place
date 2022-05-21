import React, { Component } from "react";
import "../styles/topmenu.css";
import { MenuUnfoldOutlined } from '@ant-design/icons';
class Header extends Component {
    render() {
        return (
            <div className="menudiv">
                <header className="header">
                    <h1 className="h1">맛집메이커</h1>
                    <nav className="navmenu">
                        <MenuUnfoldOutlined className="menuimg" />
                    </nav>
                </header>
            </div>
        )
    }
}
export default Header