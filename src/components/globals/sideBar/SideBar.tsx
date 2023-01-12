import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Customers, Businesses, Settings } from "./sideBarData";
import Icon from "../../../assets/icons/icons";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";

const Sidebar: React.FunctionComponent = () => {
  const [active, setActive] = useState(1);
  const location = useLocation();

  const handleSetActive = (id: number) => {
    setActive(id);
  };

  const customers = Customers.map((item, i) => {
    return (
      <>
        <Link key={item.id} to={item.route}>
          <div
            key={item.id}
            onClick={() => handleSetActive(item.id)}
            //   className={location.pathname === item.route ? "active" : ""}
            className={styles.menuItems}
          >
            <Icon name={item.icon} />
            <p>{item.name}</p>
          </div>
        </Link>
      </>
    );
  });

  const businesses = Businesses.map((item: any, i: number) => {
    console.log(item.name);
    return (
      <>
        <Link key={item.id} to={item.route}>
          <div
            key={item.id}
            onClick={() => handleSetActive(item.id)}
            //   className={location.pathname === item.route ? "active" : ""}
            className={styles.menuItems}
          >
            <Icon name={item.icon} />
            <p>{item.name}</p>
          </div>
        </Link>
      </>
    );
  });

  const settings = Settings.map((item: any, i: number) => {
    return (
      <>
        <Link key={item.id} to={item.route}>
          <div
            key={item.id}
            onClick={() => handleSetActive(item.id)}
            //   className={location.pathname === item.route ? "active" : ""}
            className={styles.menuItems}
          >
            <Icon name={item.icon} />
            <p>{item.name}</p>
          </div>
        </Link>
      </>
    );
  });

  return (
    <div className={styles.sidebar}>
      <div className={styles.orgToggle}>
        <Icon name="briefcase" />
        <span>Switch Organization</span>
        <Icon name={"arrowdown"} />
      </div>
      <div className={styles.menuItems}>
        <Icon name="dashboard" />
        <p>Dashboard</p>
      </div>
      <h5 className={styles.menuHeader}>CUSTOMERS</h5>
      {customers}
      <h5 className={styles.menuHeader}>BUSINESSES</h5>
      {businesses}
      <h5 className={styles.menuHeader}>SETTINGS</h5>
      {settings}
    </div>
  );
};

export default Sidebar;
