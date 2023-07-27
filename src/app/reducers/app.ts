export interface AppState {
    isMenuOpen: boolean
}

export interface AppAction {
    type: 'OPEN_MENU' | 'CLOSE_MENU'
}

export const initialState = {
    isMenuOpen: false
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

        default: {
            return state;
        }
    }
}