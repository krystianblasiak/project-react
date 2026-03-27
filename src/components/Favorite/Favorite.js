import { useSelector } from "react-redux";
import { getFilteredCardsIsFavorite } from "../../redux/store";
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss";
import Card from "../Card/Card";

const Favorite = () => {
    const cards = useSelector(getFilteredCardsIsFavorite);
    
    if(cards.length < 1){
        return (
            <Container>
                <PageTitle>Favorite</PageTitle>
                <h3 className={styles.subtitle}>Brak Kard</h3>
            </Container>
        );
    }
    return (
        <Container>
            <PageTitle>Favorite</PageTitle>
            <div className={styles.div}>
                <article className={styles.column}>
                    <ul className={styles.cards}>
                        {cards.map(card => <Card key={card.id} title={card.title} cardId={card.id} isFavorite={card.isFavorite} />)}
                    </ul>
                </article>
            </div>
        </Container>
    );
};

export default Favorite;