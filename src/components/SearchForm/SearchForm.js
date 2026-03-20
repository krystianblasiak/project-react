import { useState } from "react";
import { useDispatch } from "react-redux";

import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
        dispatch({ type: "UPDATE_SEARCHCARD", payload: value})
    };

    return (
        <form className={styles.searchForm} onSubmit={onSubmit}>
            <TextInput placeholder="Szukaj..." onChange={e => setValue(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;