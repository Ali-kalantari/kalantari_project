import React from 'react';
import {Route, Link} from 'react-router-dom';
import './scss/custom.scss'

 const CustomLink = props => {
    
    const {path, label} = props;
    return (
        <Route
            path={path}
            exact
            children={p => {
                return (
                    <li className="ali">
                        <Link className={p.match ? 'active' : ''} to={path} children={label}/>
                    </li>
                )
            }}
        />
    )
}
export default CustomLink;