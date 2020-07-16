import * as React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar: React.FC<NavBarProps> = (props) => {

    return (
        <>
            <section className="row my-2 mobile-nav">
                <div className="col-12">
                    <nav className="nav justify-content-around p-3 border-bottom border-secondary">
                        <NavLink exact to="/" activeClassName="text-warning"> Home </NavLink>
                        <NavLink exact to="/news" activeClassName="text-warning"> News API  </NavLink>
                        <NavLink exact to="/nytimes" activeClassName="text-warning"> NY Times </NavLink>
                        <NavLink exact to="/guardian" activeClassName="text-warning"> Guardian </NavLink>
                        <NavLink exact to="/google" activeClassName="text-warning"> Google News </NavLink>
                        <NavLink exact to="/wsj" activeClassName="text-warning">  Wall Street Journal  </NavLink>
                    </nav>
                </div>
            </section>
        </>
    )
}

interface NavBarProps { }

export default NavBar;