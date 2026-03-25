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
                            <li className={styles.li}><a href="/" className={styles.liA}>Home</a></li>
                            <li className={styles.li}><a href="/favorite" className={styles.liA}>Favorite</a></li>
                            <li className={styles.li}><a href="/about" className={styles.liA}>About</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;