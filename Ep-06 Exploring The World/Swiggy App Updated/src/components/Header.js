import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
// Functional Component with the arrow function
const Header = () => {

    const [btnname, setbtnname] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                <button 
                 className="login" 
                    onClick={() => {
                        btnname === "Login"  ?
                        setbtnname("LogOut") :
                        setbtnname("Login");

                    }}
                >
                    {btnname}
                </button>
            </ul>
        </div>
    </div>
    );
};
//always export first then import people forget this
export default Header;