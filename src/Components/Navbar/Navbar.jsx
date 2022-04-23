import "./Navbar.css";
import React from "react";
import imageLogo from "./images/logo.png"
import {useState} from "react"
import CancelIcon from '@mui/icons-material/Cancel';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Navber = () => {
    const [img,setImg] = useState('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60');
    const [loggedInName,setLoggedInName] = useState('Barry Tech');

    const [first, setfirst] = useState({
        pro: false,
        reso: false,
        logM: false,
        mMenu: false,
      });
      const [userLog, setuserLog] = useState(true);
      const isAuthenticated=false;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 navigationBorder">
            <div className="container-fluid">
            <img style={{width:"45px", height:"45px"}} src={imageLogo} className="img-fluid rounded-normal" alt=""/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setfirst({ mMenu: true })}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active homeHead" style={{color: "#12D7B9"}} aria-current="page" href="/">EduBooks</a>
            </li>
            
            </ul>
            <ul className="navbar-nav me-auto" style={{justifyContent:"space-between",textDecoration:"none",marginLeft:"30%"}}>
                <li className="nav-item">
                    <form className="d-flex mt-2" style={{marginLeft:"150px"}}>
                        <input className="form-control me-2 searchBarInp" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn ml-2"  style={{backgroundColor: "#12D7B9",color: "white",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}  type="submit">Search</button>
                    </form>
                </li>
               
            </ul>
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"  style={{marginLeft:"6%"}}>
            <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
            <li className="nav-item mt-1" {...bindTrigger(popupState)}>
                <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src={img} alt="" />
            </li>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link to="/login">{isAuthenticated? "Logout" : "Login"}</Link></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
                
               { isAuthenticated ? (
                    <li className="nav-item mt-3 ml-2">
                        <p>{loggedInName}</p>
                    </li>
                ) : <li className="nav-item mt-3">
                        <p></p>
                    </li>}
            </ul>   
            </div>
            </div>
            </nav>
            {first.mMenu && (
        <div className="mMenuMainBox">
          <div className="mMenuSubBox">
            <div className="upperMmenu">
              <div style={{ textAlign: "right" }}>
                <CancelIcon style={{color: "white"}}
                  onClick={() => setfirst({ mMenu: false })}
                />
              </div>
              <img
                src={img}
                style={{width:"70px",height:"70px",borderRadius:"50%"}}
                alt="avatar"
                className="sc-hGoxap etsBcu"
              />
              <div className="sc-bdVaJa sc-bwzfXH fimnwF">
                <div className="sc-bdVaJa sc-bwzfXH sc-fjmCvl dcfRXK">
                  <div className="sc-bdVaJa sc-bwzfXH iUAJNl">
                    <p className="sc-dymIpo sc-TFwJa MIYAO"></p>
                    <p className="sc-dymIpo sc-bHwgHz gYIMCp" style={{fontSize: "18px"}}>{loggedInName}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lowwerMmenu">
              
              
              
              <div className="lowBoxD3">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active homeHead" style={{color: "#12D7B9"}} aria-current="page" href="/">EduBooks</a>
            </li>
            
            </ul>
              <form className="d-flex mt-2">
                        <input className="form-control me-2 searchBarInp" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn ml-2"  style={{backgroundColor: "#12D7B9",color: "white",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}  type="submit">Search</button>
                </form>
                
              </div>
              <div className="lowBoxD4">
                
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
        
    );
}