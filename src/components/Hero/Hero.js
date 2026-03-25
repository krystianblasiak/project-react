import PageTitle from "../PageTitle/PageTitle";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <PageTitle>Moja pierwsza aplikacja React</PageTitle>
            <p className={styles.subtitle}>Prosta aplikacja do zadań z listami, kolumnami i kartami</p>
        </div>
    );
};

export default Hero;