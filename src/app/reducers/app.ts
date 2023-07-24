export interface AppState {
    test: string
}

export interface AppAction {
    type: string
}

export const initialState = {
    test: ''
}

export const reducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}