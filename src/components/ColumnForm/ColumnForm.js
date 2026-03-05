import { useState } from "react";

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./ColumnForm.module.scss";

const ColumnForm = props => {
    const [title, setTitle] = useState("");
    const [icon, setIcon ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon});
        setTitle("");
        setIcon("");
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label className={styles.label}> Tytuł: </label>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}> Ikona: </label>
            <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Dodaj kolumnę</Button>
        </form>
    );
};

export default ColumnForm;