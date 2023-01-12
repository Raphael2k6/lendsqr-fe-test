import React, { useState, ReactNode } from "react";
import styles from "./layout.module.scss";
import Sidebar from "../sideBar/SideBar";
import NavBar from "../navBar/NavBar";
// import NavBar from "../NavBar";
// import {
//   LayoutContainer,
//   LayoutMain,
//   NavBarContainer,
// } from "./Layout.elements";
// import Sidebar from "./Sidebar";
// import MobileNav from "../MobileNav";
// import MobileSideBar from "../MobileSidebar";

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
            {/* {isOpen && <MobileSideBar hideMobileSidebar={hideMobileSidebar} />} */}
          </div>
          {props.children}
        </>
      )}
    </>
  );
};

export default Layout;
