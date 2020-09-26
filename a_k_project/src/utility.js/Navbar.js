import React from 'react';
import CustomLink from './../custom'


const Navbar = () => {
    return (<ul className="nav">
        <li>
             <CustomLink path="/" label='Home'></CustomLink>
        </li>

        <li>
        <CustomLink path="/X_Ogame" label='Game '></CustomLink>
        </li>

        <li>
        <CustomLink path="/DateOTime" label='Date and Time'></CustomLink>
        </li>


   </ul>  );
}
 
export default Navbar;






