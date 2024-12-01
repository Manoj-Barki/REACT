import React from 'react'
import './Genre.css'
import Logo from "./assets/Sleep.png"

function Genre({colour = '#b02897',
                cover = {Logo},
                name = 'Loading',
                appStyle = {
                    backgroundColor: {colour}
                }
            }){
                return(
                    <div className='box' style={appStyle}>
                        <div>
                            <div className='cat'>
                                <p className='name'>{name}</p>
                            </div>
                            <div className='image'>
                                <img alt='cover' src={Logo} className='cover'/>
                            </div>
                        </div>
                    </div>
                )
            }

export default Genre;