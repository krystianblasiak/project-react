// actions
const createActionName = actionName => `app/searchCard/${actionName}`;
const UPDATE_SEARCHCARD = createActionName("UPDATE_SEARCHCARD");

// actions creators
export const updateSearchCard = payload => ({ type: UPDATE_SEARCHCARD, payload});

const searchCardReducer = (statePart = '', action) => {
    switch(action.type) {
        case UPDATE_SEARCHCARD:
            return action.payload
        default:
            return statePart;
    }
}

export default searchCardReducer;