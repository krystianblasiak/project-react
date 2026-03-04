import Column from "../Column/Column";
import styles from "./List.module.scss";

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Rzeczy do zrobienia<span>wkrótce</span></h2>
            </header>
            <p className={styles.description}>Ciekawe rzeczy, które chcę sprawdzić</p>
            <section className={styles.columns}>
                <Column title="Książki" icon="book" />
                <Column title="Filmy" icon="film" />
                <Column title="Gry" icon="gamepad" />
            </section>
        </div>
    );
};

export default List;