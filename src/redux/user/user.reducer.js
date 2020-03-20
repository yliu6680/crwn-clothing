/*
every reducer is a function that accepts two parameters: the previous state (initial state), and the action.


action:
{
    type: type of the action
    payload: could be anything, it's the object we need to update our state or redux store
}


*/
const INITIAL_STATE = {
    currentUser: null
}

// use the default parameter value in the function
// we need to consider how to update the state (redux store) in this function based on the action
const UserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;