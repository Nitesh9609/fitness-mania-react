import { signInActionType } from "./signIn.type";

export const displayUser = (userList) =>({
    type: signInActionType.SHOW_USER,
    payload: userList
})