import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeroContext, navItems } from '../utils/constants';

const NavItem = ({ item }) => {
  const { hero } = useContext(HeroContext);

  let url = `${item.route}`;

  if (item == navItems[1]) {
    url = `${item.route}/${hero}`;
  }

  return (
    <li>
      <Link className="nav-item btn btn-danger mx-1" to={url}>
        {item.title}
      </Link>
    </li>
  );
};

export default NavItem;
