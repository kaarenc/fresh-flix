// Nav
// copied from michaels example

import { NavLink } from 'react-router-dom';

const Nav = () => {

    function blur(e){
        e.target.blur();
    }
    
    return (
        <nav className="main-nav" onClick={blur}>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );

};

export default Nav;