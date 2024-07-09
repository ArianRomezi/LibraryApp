import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://google.com">Book Project</a>|With ReactJS
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Chaos</p>
      </footer>
    </>
  );
};

export default Layout;
