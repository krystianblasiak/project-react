import { useState } from "react";
import { useDispatch } from "react-redux";

import { addList } from "../../redux/subreducery/listsRedux";

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

import styles from "./ListForm.module.scss";

const ListForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description}));
        setTitle("");
        setDescription("");
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label className={styles.label}>Tytuł: </label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>Opis: </label>
            <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Dodaj listę</Button>
        </form>
    );
};

export default ListForm;