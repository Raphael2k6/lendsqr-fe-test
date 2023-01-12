import React from "react";
import Icon from "../../../assets/icons/icons";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navLeft}>
        <Icon name="logo" />
        <div>
          <div className={styles.inputContainer}>
            <input type="search" placeholder="Search for anything" />
            <div className={styles.iconContainer}>
            <Icon name="search" />
          </div>
          </div>
        </div>
      </div>
      <nav className={styles.navRight}>
        <a>Docs</a>
        <a>
          <Icon name="bell" />
        </a>
        <a>
          <Icon name="avatar" /> 
        </a>
        <a>Adedeji</a>
        <a>
          <Icon name="caretDown" />
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
