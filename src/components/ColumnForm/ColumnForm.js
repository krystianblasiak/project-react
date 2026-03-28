import { useState } from "react";
import { useDispatch } from "react-redux";
import { addColumn } from "../../redux/subreducery/columnsRedux";

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./ColumnForm.module.scss";

const ColumnForm = props => {
    const [title, setTitle] = useState("");
    const [icon, setIcon ] = useState("");
    const listId = props.listId;

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ listId, title, icon}));
        setTitle("");
        setIcon("");
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label className={styles.label}> Tytuł: </label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}> Ikona: </label>
            <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Dodaj kolumnę</Button>
        </form>
    );
};

export default ColumnForm;