import React,{FunctionComponent} from 'react';
import './NavBar.css'
import Button  from '../Button';
import { PAGES } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { ButtonTypes } from '../Button/types';
import LoginModal from '../LoginModal';
import { useNavigate,useLocation } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {RootState} from "../../store/reducers";

const NavBar:FunctionComponent = ()=>{
    const loginStatus = useSelector((state:RootState)=>state.login.isLogin);
    const userInfo = useSelector((state:RootState)=>state.login.user);
    const modalStatus = useSelector((state:RootState)=>state.login.modalStatus);
    const dispatch = useDispatch();
    const routeNavigator = useNavigate();
    const router = useLocation();

    const {pathname} = router;
    const currentPath = pathname.split("/")[1];



    const handleLoginModalOpen = ()=>{
        dispatch({type:"SET_MODAL_STATUS",payload:true});
    }

    const handleLoginModalClose = ()=>{
        dispatch({type:"SET_MODAL_STATUS",payload:false});
    }

    const handleGoPage = (page:PAGES)=>{
        routeNavigator(`/${ page === PAGES.HOME ?'':page}`);
    }


    return (
        <>
            <nav className="navbar">
                <span className="navbar-brand">
                    Demo app
                </span>
                <div className="navbar-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Button onClick={()=>{handleGoPage(PAGES.HOME)}} isActive={currentPath === ""}>
                               Home
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button onClick={()=>{handleGoPage(PAGES.TRADE)}} isActive={currentPath === PAGES.TRADE} >
                               Trade 
                            </Button>
                        </li>
                        
                    </ul>
                    <div className="login-btn-container">
                        {
                            !loginStatus && 
                            <Button type={ButtonTypes.primaryOutline} onClick={()=>{handleLoginModalOpen()}} >
                                Login
                            </Button>
                            
                        }
                    </div>

                         { loginStatus &&
                            <div className="user-profile">
                                    <FontAwesomeIcon style={{fontSize:"4rem"}}  icon={faUserCircle}  />                          
                                    <div>
                                        <span className="user-name">Hi, {userInfo.email}</span><br/>
                                        <span style={{cursor:"pointer"}} onClick={()=>{
                                            dispatch({type:"SET_LOGOUT"});
                                        }} className="user-name">Logout</span>
                                    </div>
                            </div>
                           
                     }
                </div>

            </nav>
            <LoginModal handleClose={handleLoginModalClose} isOpen={modalStatus} />
        </>

    );
}

export default NavBar;