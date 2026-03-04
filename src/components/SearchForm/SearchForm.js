import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Szukaj..." />
            <Button text="Szukaj" />
        </form>
    );
};

export default SearchForm;