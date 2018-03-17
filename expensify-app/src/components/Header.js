import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expanse</NavLink>
        </div>
    </header>
);

export default Header;