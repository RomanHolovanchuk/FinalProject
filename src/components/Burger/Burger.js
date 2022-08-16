import React from 'react';
import { Link } from 'react-router-dom';
import './Burger.scss';

const items = [
  { value: 'Home', href: '/', id: 1 },
  { value: 'News', href: '/news', id: 2 },
  { value: 'AllGames', href: '/all', id: 3 },
  { value: 'Giveaways', href: '/Giveaways', id: 4 },
];

const Burger = ({ header, active, setMenuActive }) => {
  return (
    <div
      className={active ? 'menu active' : 'menu'}
      onClick={() => setMenuActive(false)}
    >
      <div className="blur" />
      <div className="menu_contents">
        <div className="menu__header">{header}</div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={item.href} className="burger_links">
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Burger;