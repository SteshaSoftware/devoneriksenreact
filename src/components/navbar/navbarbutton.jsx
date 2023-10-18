import React, { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import "./navbarbutton.css"


const NavBarButton = ({ menuname }) => {
    const url = menuname === "Home" ? "/" : `/${menuname.toLowerCase()}`;
    return (
        <>


            <Link className="navbarbutton" to={url}>
                
                    {menuname}
                
            </Link>
         
        </>
    )
}

export default NavBarButton