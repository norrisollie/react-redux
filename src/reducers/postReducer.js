import { FETCH_POST, NEW_POST } from "../actions/types"

const initialState = {
    items: [],
    item: {}

}

export default function(state = initialState, action) {
    switch(action.type) {
        // case "FETCH_POST":

        // break;

        // case "NEW_POST":

        // break;
        
        default:
        return state
        break;
    }
}