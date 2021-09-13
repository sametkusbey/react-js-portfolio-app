import { LOGIN_SYSTEM, LOGOUT_SYSTEM } from "../actions/loginActions";
import { loginValues } from "../initialValues/loginValues";

const initialState = {
    loginValues: loginValues
}

export default function loginReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN_SYSTEM:
            return {
                ...state,
                loginValues: { name: payload.name, username: payload.username, usermail: payload.usermail }
            }

        case LOGOUT_SYSTEM:
            return {
                ...state,
                loginValues: { name: "", username: "", usermail: "" }
            }
        default:
            return state;
    }
}