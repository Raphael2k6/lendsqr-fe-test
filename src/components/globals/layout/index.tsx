import React, { ReactNode } from "react";
import styles from "./layout.module.scss";
import Sidebar from "../sideBar/SideBar";
import NavBar from "../navBar/NavBar";

const Layout = (props: { sidebar: any; children: ReactNode }) => {
  return (
    <>
      {props.sidebar && (
        <>
          <div className={styles.layoutConatiner}>
            <Sidebar />
            <div className={styles.layoutMain}>
              <NavBar />
            </div>
          </div>
          {props.children}
        </>
      )}
    </>
  );
};

export default Layout;
