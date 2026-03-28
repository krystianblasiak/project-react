import { useDispatch } from "react-redux";
import styles from "./Card.module.scss";
import { toggleCardFavorite } from "../../redux/subreducery/cardsRedux";
import clsx from "clsx";


const Card = props => {
    const dispatch = useDispatch();
    const cardId = props.cardId;

    const handlerClick = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(cardId));
    };

    return (
        <li className={styles.card}>{props.title}
            <button className={"fa fa-star-o " + styles.btnStar + " " + clsx(props.isFavorite === true && styles.active)} onClick={handlerClick}></button>

        </li>
    );
};

export default Card;