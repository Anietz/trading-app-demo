import React, { FunctionComponent } from 'react';
import {LayoutProps} from './types'
import './Layout.css';
import NavBar from '../NavBar';


const Layout: FunctionComponent<LayoutProps> = ({
  children,type
}) => {

  return(   
        <>
           <NavBar />
            <div className={type === "block"? "container-block"  : "container"}>
                {children}
           </div>
        </>

    )
};

export default Layout;