import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expanse</NavLink>
            <button onClick={startLogout}>Logout</button>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);