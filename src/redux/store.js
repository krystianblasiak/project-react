import { createStore } from "redux";

import initialState from "./initialState";
import shortid from "shortid";

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_COLUMN":
            return { ...state, columns: [ ...state.columns, { id: shortid(), ...action.playload }]};
        case "ADD_CARD":
            return { ...state, cards: [ ...state.cards, { id: shortid(), ...action.playload }]};
        case "UPDATE_SEARCHCARD":
            return { ...state, searchCard: action.playload };
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