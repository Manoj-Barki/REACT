import React from 'react'
import White from "./assets/white-logo.jpg"
import Home from "./assets/home.jpg"
import browse from "./assets/browse.png"
import Search from "./assets/search icon.png"
import "./Topbar.css"

function Topbar(){
    return (
        <div className="body">
            <div>
                <img alt="white logo" className="white" src={White} ></img>
            </div>
            <div className="search">
                <img alt="home" src={Home} className="home" />
                <div className="searchbar">
                    <img src={Search} className="search-icon"></img>
                    <input type="text" className="ip" placeholder="What do you want to play?"></input>
                    <div className="slash"></div>
                    <img alt="browse" className="browse" src={browse}></img>
                </div>
                <div className="logindiv">
                    <div className="signup">
                        <p>Sign up</p>
                    </div>
                    <div className="login">
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;