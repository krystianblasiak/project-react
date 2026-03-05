import { useState, useEffect } from "react";

import Column from "../Column/Column";
import styles from "./List.module.scss";

const List = () => {
    const [columns, setColumns] = useState([
        { id: 1, title: "Książki", icon: "book" },
        { id: 2, title: "Filmy", icon: "film" },
        { id: 3, title: "Gry", icon: "gamepad" }
    ]);

    useEffect(() => {
        setTimeout(() => {
            setColumns([...columns, {id: 4, title: "Test column"}]);
        }, 2000);
    }, []);
    
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Rzeczy do zrobienia<span>wkrótce</span></h2>
            </header>
            <p className={styles.description}>Ciekawe rzeczy, które chcę sprawdzić</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
            </section>
        </div>
    );
};

export default List;