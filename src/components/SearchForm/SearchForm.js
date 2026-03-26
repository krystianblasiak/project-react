import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchCard } from "../../redux/store";

import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    useMemo(()=> dispatch(updateSearchCard(value)), []);

    const onSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchCard(value))
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