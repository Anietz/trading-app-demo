import React,{FunctionComponent} from "react";
import Button from "../Button";
import "./ButtonPopup.css";


const ButtonPopup:FunctionComponent =  ({children})=>{

    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleButtonPopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

        <div className="button-pop-wrapper">
          <Button style={{    fontSize: "1.2rem"}} isActive={true} onClick={()=>{toggleButtonPopup()}} >
              {children}
          </Button>

            {isOpen && <ul>  
                    <li><Button style={{    fontSize: "1.2rem"}}>Buy</Button> </li>  
                    <li><Button style={{    fontSize: "1.2rem"}}>Sell</Button> </li>
                </ul>
            }
        </div>
        </>
    )
}

export default ButtonPopup;