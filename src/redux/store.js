import { createStore } from "redux";

import initialState from "./initialState";
import shortid from "shortid";
import strContains from "../utils/strContains";

//selectors
export const getAllColumns = ({ columns }) => columns;
export const getAllLists = ({ lists }) => lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getFilteredCards = ({ cards, searchCard }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchCard));


// action creators
export const addColumn = payload => ({ type: "ADD_COLUMN", payload });
export const addCard = payload => ({ type: "ADD_CARD", payload });
export const addList = payload => ({ type: "ADD_LIST", payload});
export const updateSearchCard = payload => ({ type: "UPDATE_SEARCHCARD", payload});

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_COLUMN":
            return { ...state, columns: [ ...state.columns, { id: shortid(), ...action.payload }]};
        case "ADD_CARD":
            return { ...state, cards: [ ...state.cards, { id: shortid(), ...action.payload }]};
        case "ADD_LIST":
            return { ...state, lists: [ ...state.lists, { id: shortid(), ...action.payload }]};
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