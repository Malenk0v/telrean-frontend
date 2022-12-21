import React from 'react';

const NavItem = ({title, changePage}) => {
    return (
        <li onClick={() => changePage(title)}className="nav-item btn btn-danger mx-1">{title}</li>
    );
};

export default NavItem;