import { useState } from "react";
import shortid from "shortid";

import Column from "../Column/Column";
import ColumnForm from "../ColumnForm/ColumnForm";
import styles from "./List.module.scss";

const List = () => {
    const [columns, setColumns] = useState([
        {
            id: 1,
            title: "Książki",
            icon: "book",
            cards: [
                { id: 1, title: "Programuj tak, aby nie naprawiać Planowanie projektów i systemów"},
                { id: 2, title: "Star Wars. Kolekcja Legend. Eskadra Łotrów. Cykl X-wingi. "}
            ]
        },
        {
            id: 2,
            title: "Filmy",
            icon: "film",
            cards: [
                { id: 1, title: "Wilk z Wall Street"},
                { id: 2, title: "Elizjum"}
            ]
        },
        {
            id: 3,
            title: "Gry",
            icon: "gamepad",
            cards: [
                { id: 1, title: "Starfield"},
                { id: 2, title: "Company of Heroes 3"}
            ]
        }
    ]);

    const addColumn = newColumn => {
        setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
    };

    const addCard = (newCard, columnId) => {
        const columnsUpdated = columns.map(column => {
            if(column.id === columnId)
                return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
            else
                return column
        })
        setColumns(columnsUpdated);

    };

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Rzeczy do zrobienia<span>wkrótce</span></h2>
            </header>
            <p className={styles.description}>Ciekawe rzeczy, które chcę sprawdzić</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} id={column.id} title={column.title} icon={column.icon} cards={column.cards} action={addCard} />)}
            </section>
            <ColumnForm action={addColumn} />
        </div>
    );
};

export default List;

