import { signInActionType } from "./signIn.type";

const INITIAL_STATE = {
    users : []
}

export const signInReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case signInActionType.SHOW_USER:
            return{
                
                users: action.payload
            }
    
        default:
            return state
    }
}