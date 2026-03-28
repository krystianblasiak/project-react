import { createStore, combineReducers } from "redux";

import listsReducer from "./subreducery/listsRedux";
import columnsReducer from "./subreducery/columnsRedux";
import cardsReducer from "./subreducery/cardsRedux";
import searchCardReducer from "./subreducery/searchCardRedux";

import initialState from "./initialState";

const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchCard: searchCardReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;