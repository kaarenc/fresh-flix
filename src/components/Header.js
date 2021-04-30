import { useState } from 'react';
import Nav from './NavMenu';

const Header = (  ) => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }
    return (
        <div>
            <header>
                <div className="menu-wrapper">
                    <div className={!nav ? 'hamburger-menu' : 'hamburger-menu animate'}
                        onMouseDown={(e) => { e.preventDefault(); }}
                        onClick={toggleNav}></div>
                </div>
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <div className="search">
                    <div className="container">
                        <input type="text" placeholder="Search . . ." required/>
                    </div>
                </div>
                
            </header>
        <Nav toggleNav={nav}/>
        </div>
    );
}

export default Header;