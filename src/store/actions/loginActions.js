export const LOGIN_SYSTEM = "LOGIN_SYSTEM";
export const LOGOUT_SYSTEM = "LOGOUT_SYSTEM";

export function loginSystem(user) {
    return {
        type: LOGIN_SYSTEM,
        payload: user
    }
}

export function logoutSystem() {
    return {
        type: LOGOUT_SYSTEM,
        payload: {}
    }
}