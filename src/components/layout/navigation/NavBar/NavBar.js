import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { MENU_ITEMS } from "../../../../utils/navbar.constants";

const NavBar = () => {
  const menuLinks = MENU_ITEMS.map((link, index) => (
    <li className={styles.navbar__element} key={index}>
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          isActive
            ? styles.active + " " + styles.navbar__link
            : styles.navbar__link
        }
      >
        {link.name}
      </NavLink>
    </li>
  ));
  return (
    <header className={styles.header}>
      <div className={styles.navbar__wrapper}>
        <nav className={styles.navbar}>
          <ul className={styles.navbar__list} v-show="!mobile">
            {menuLinks}
          </ul>
          {/* <div className="icon">
            <i className="fas fa-bars" @click="toggleMobileNav" v-show="mobile"></i>
          </div> */}
          {/* <transition name="mobile-nav">
          <ul
            className="mobile-navigation"
            @click="toggleMobileNav"
            v-show="mobileNav"
          >
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/stazysci">
                Stażyści
              </Link>
            </li>
            <li>
              <Link className="link" to="/umiejetnosci">
                Umiejętności
              </Link>
            </li>
            <li>
              <Link className="link" to="/projekty">
                Projekty
              </Link>
            </li>
          </ul>
          </transition> */}
        </nav>
        {/* <div id="clock"> <Clock /> </div> */}
      </div>
    </header>
  );
};

export default NavBar;
