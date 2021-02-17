import React from 'react';
import './Header.css';
import {Home,FlashOn,LiveTv,VideoLibrary,Search,PersonOutline} from '@material-ui/icons';


const Header=()=>{

    return (
        <>
        <div className="header">
            <div className="header__icons">
            <div className="header__icon header__icon--active">
            <Home />
            <p> Home </p>
                
            </div>
            <div className="header__icon">
            <FlashOn />
            <p> Trending </p>
                
            </div>
            <div className="header__icon">
            <LiveTv />
            <p>Verified </p>
                
            </div>
            <div className="header__icon">
            <VideoLibrary />
            <p>Collection </p>
                
            </div>
            <div className="header__icon">
            <Search />
            <p>search</p>
                
            </div>
            <div className="header__icon">
            <PersonOutline />
            <p>Profile</p>
                
            </div>




            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"  alt="hulu"  />
        </div>


        </>
    )
}


export default Header