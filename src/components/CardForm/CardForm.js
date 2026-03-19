import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./CardForm.module.scss";

const CardForm = props => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const columnId = props.columnId;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_CARD", playload: { columnId, title }});
        setTitle("");
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Dodaj kartę</Button>
        </form>
    );
};

export default CardForm;