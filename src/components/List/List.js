import styles from "./List.module.scss";

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Rzeczy do zrobienia<span>wkrótce</span></h2>
            </header>
            <p className={styles.description}>Ciekawe rzeczy, które chcę sprawdzić</p>
            <section className={styles.columns}>
                <article>
                    <h2>Książki</h2>
                </article>
                <article>
                    <h2>Filmy</h2>
                </article>
                <article>
                    <h2>Gry</h2>
                </article>
            </section>
        </div>
    );
};

export default List;