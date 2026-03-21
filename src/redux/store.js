import { createStore } from "redux";

import initialState from "./initialState";
import shortid from "shortid";
import strContains from "../utils/strContains";

//selectors
export const getFilteredCards = ({ cards, searchCard }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchCard));

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_COLUMN":
            return { ...state, columns: [ ...state.columns, { id: shortid(), ...action.payload }]};
        case "ADD_CARD":
            return { ...state, cards: [ ...state.cards, { id: shortid(), ...action.payload }]};
        case "UPDATE_SEARCHCARD":
            return { ...state, searchCard: action.payload };
        default:
            return state;
    }
    
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;