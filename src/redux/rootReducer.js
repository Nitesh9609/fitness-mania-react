import { combineReducers } from 'redux'
import { signInReducer } from './signIn/signIn.reducer'

export const rootReducer = combineReducers({
    signIn:signInReducer
})