import * as React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar: React.FC<NavBarProps> = (props) => {

    return (
        <>
            <section className="row my-2">
                <div className="col-12">
                    <nav className="nav justify-content-around p-3 border-bottom border-secondary">
                        <NavLink className="text-secondary" exact to="/" activeClassName="text-warning"> Home </NavLink>
                        <NavLink className="text-secondary" exact to="/news" activeClassName="text-warning"> News API  </NavLink>
                        <NavLink className="text-secondary" exact to="/nytimes" activeClassName="text-warning"> NY Times </NavLink>
                        <NavLink className="text-secondary" exact to="/guardian" activeClassName="text-warning"> Guardian </NavLink>
                        <NavLink className="text-secondary" exact to="/google" activeClassName="text-warning"> Google News </NavLink>
                        <NavLink className="text-secondary" exact to="/wsj" activeClassName="text-warning">  Wall Street Journal  </NavLink>
                    </nav>
                </div>
            </section>
        </>
    )
}

interface NavBarProps { }

export default NavBar;