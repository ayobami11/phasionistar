'use client'

import { createContext, useContext, useReducer } from 'react';

import { reducer, initialState, type AppState } from '@/app/reducers/app';

export interface AppContextType {
    state: AppState,
    dispatch: React.Dispatch<any>
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === null) {
        throw new Error('AppContext does not have a valid value.');
    }

    return context;
};