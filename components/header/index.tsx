import styles from "./styles.module.css";
import React from "react";

const Header = () => (
  <div className={styles.breadcrumbs}>
    <img src="/icons8-monitor-64.png" className={styles.img} />
    <div className={styles.breadcrumbs__link}>Планирование численности</div>
    <div className={styles.breadcrumbs__link}>Мастер 2020</div>
    <div className={styles.breadcrumbs__link}>Таблица</div>
    <div className={styles.breadcrumbs__link}>Организационный дизайн</div>
    <div className={styles.breadcrumbs__link}>Позиции</div>
    <div className={styles.breadcrumbs__link}>Мои прямые подчиненные</div>
  </div>
);

export default Header;
