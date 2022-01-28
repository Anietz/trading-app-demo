import React,{FunctionComponent} from 'react';
import './NavBar.css'
import Button  from '../Button';
import { PAGES } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { ButtonTypes } from '../Button/types';
import LoginModal from '../LoginModal';
import { useNavigate,useLocation } from 'react-router-dom';

const NavBar:FunctionComponent = ()=>{
    const [isLoginModalOpen,setIsLoginModalOpen] = React.useState<boolean>(false);
    const routeNavigator = useNavigate();
    const router = useLocation();

    const {pathname} = router;
    const currentPath = pathname.split("/")[1];


    const userInfo = {
        name: 'John Doe',
        isLoggedIn:false
    }


    const handleLoginModalOpen = ()=>{
        setIsLoginModalOpen(true);
    }

    const handleLoginModalClose = ()=>{
        setIsLoginModalOpen(false);
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
                            !userInfo.isLoggedIn && 
                            <Button type={ButtonTypes.primaryOutline} onClick={()=>{handleLoginModalOpen()}} >
                                Login
                            </Button>
                            
                        }
                    </div>

                         { userInfo.isLoggedIn &&
                            <div className="user-profile">
                                    <FontAwesomeIcon style={{fontSize:"4rem"}}  icon={faUserCircle}  />                          
                                    <div>
                                        <span className="user-name">Hi, {userInfo.name}</span><br/>
                                        <span className="user-name">Logout</span>
                                    </div>
                            </div>
                           
                     }
                </div>

            </nav>
            <LoginModal handleClose={handleLoginModalClose} isOpen={isLoginModalOpen} />
        </>

    );
}

export default NavBar;