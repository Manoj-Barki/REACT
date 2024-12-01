import React from 'react'
import "./Navbar.css"
import Lib from "./assets/library.png"
import Plus from "./assets/plus.png"
import World from "./assets/world.png"

function Navbar(){
    return (
        <div className="parent">
            <div className='lib'>
                    <img alt='libimg' src={Lib} className='libimg'></img>
                    <h3 className="yourLib">Your Library</h3>
                    <div className='plus'>
                        <img src={Plus} alt="plus" className="sign"/>
                    </div>
            </div> 
            <div className="opt">
                <div className='opt1'>
                    <p className='h3'>Create your first playlist</p>
                    <p className='h4'>It's easy, we will help you</p>
                    <div className="Button">Create playlist</div>
                </div>
                <div className='opt1'>
                    <p className='h3'>Let's find some podcasts to follow</p>
                    <p className='h4'>We will keep you updated on new episodes</p>
                    <div className="Button">Browse podcasts</div>
                </div>
            </div>
            <div className='policy'>
                <p>Legal</p>
                <p>Safety and Privacy center</p>
                <p>Privacy policy</p>
                <p>Cookies</p>
            </div>
            <div className='policy1' >
                <p>About adds</p>
                <p>Accesibility</p>
            </div>
            <div className='cookies'>
                Cookies
            </div>
            <div className='lang'>
                <img src={World} alt="Language"  className='world'/>
                <p className='english'>English</p>
            </div>
        </div>
    )
}

export default Navbar;