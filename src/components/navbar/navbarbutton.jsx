import React, { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import "./navbarbutton.css"


const NavBarButton = ({ menuname, droplist }) => {
    const url = menuname === "Home" ? "/" : `/${menuname.toLowerCase()}`;
    if (droplist) {
        // Render a dropdown
        return (
           
            <Link to={url} style={{ marginRight: '10px', position: 'relative'}}>
                <span className="navbarbutton rounded inline-flex items-center">
                    {menuname} <BsChevronDown />
                </span>
            
                <span className="droplist-text dropdown">
                    {droplist}
                </span>          
            </Link>

        );
    } else {
        // Render a single link
        return (
            <Link className="navbarbutton" to={url}>
                <span className="navbarbutton rounded inline-flex items-center">
                    {menuname}
                </span>
            </Link>
        );
    }
};
export default NavBarButton