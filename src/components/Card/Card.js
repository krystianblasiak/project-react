import { useDispatch } from "react-redux";

import { toggleCardFavorite, removeCard } from "../../redux/subreducery/cardsRedux";

import clsx from "clsx";
import styles from "./Card.module.scss";


const Card = props => {
    const dispatch = useDispatch();
    const cardId = props.cardId;

    const handlerStar = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(cardId));
    };

    const handlerTrash = e => {
        e.preventDefault();
        dispatch(removeCard(cardId));
    };

    return (
        <li className={styles.card}>{props.title}
            <div className={styles.div}>
                <button className={"fa fa-star-o " + styles.btnStar + " " + clsx(props.isFavorite === true && styles.active)} onClick={handlerStar} />
                <button className={"fa fa-trash " + styles.btnTrash} onClick={handlerTrash} />
            </div>
        </li>
    );
};

export default Card;