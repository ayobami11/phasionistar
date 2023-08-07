export interface AppState {
    isMenuOpen: boolean,
    showLogoutModal: boolean
}

export interface AppAction {
    type: 'OPEN_MENU' | 'CLOSE_MENU' | 'SHOW_LOGOUT_MODAL' | 'HIDE_LOGOUT_MODAL'
}

export const initialState = {
    isMenuOpen: false,
    showLogoutModal: false
}

export const reducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {

        case 'OPEN_MENU': {
            return {
                ...state,
                isMenuOpen: true
            }
        }

        case 'CLOSE_MENU': {
            return {
                ...state,
                isMenuOpen: false
            }
        }

        case 'SHOW_LOGOUT_MODAL': {
            return {
                ...state,
                showLogoutModal: true
            }
        }
        case 'HIDE_LOGOUT_MODAL': {
            return {
                ...state,
                showLogoutModal: false
            }
        }

        default: {
            return state;
        }
    }
}