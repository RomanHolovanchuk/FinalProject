import React from 'react'
import { Link } from 'react-router-dom';
import './Burget.scss'

const Burger = ({header, items, active, setMenuActive}) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setMenuActive(false)}>
      <div className="blur"/>
        <div className='menu_content'>
            <div className='menu__header'>{header}</div>
            <ul>
                {items.map(item =>
                    <li>
                       <a href={item.href} key={item.id}/> {item.value}  <a/>
                    </li>
                        )}
            </ul>
        </div>
    </div>
  );
}

export default Burger