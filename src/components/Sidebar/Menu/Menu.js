// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string,
    external?: boolean
  }[]
};

const linkClasses = {
  className: styles['menu__list-item-link'],
  activeClassName: styles['menu__list-item-link--active']
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          {!item.external === true ? <Link
            to={item.path}
            {...linkClasses}
          >
            {item.label}
          </Link> : <a href={item.path} {...linkClasses}>
            {item.label}
          </a>}
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
