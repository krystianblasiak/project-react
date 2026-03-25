import { NavLink } from "react-router-dom";

import Container from "../Container/Container";
import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.navBrand}>
                        <a href="/" className={"fa fa-tasks " + styles.a}><span className={styles.span}>Home</span></a>
                    </div>
                    <div className={styles.navList}>
                        <ul className={styles.ul}>
                            <li className={styles.li}><NavLink to="/" className={({ isActive }) => isActive ? styles.linkActive : undefined }>Home</NavLink></li>
                            <li className={styles.li}><NavLink to="/favorite" className={({ isActive }) => isActive ? styles.linkActive : undefined }>Favorite</NavLink></li>
                            <li className={styles.li}><NavLink to="/about" className={({ isActive }) => isActive ? styles.linkActive : undefined }>About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;