'use client'

import { createContext, useContext, useReducer } from 'react';

import { reducer, initialState, SavedDetailsState } from '@/app/reducers/savedDetails';

export interface SavedDetailsContextType {
    state: SavedDetailsState,
    dispatch: React.Dispatch<any>
}

const SavedDetailsContext = createContext<SavedDetailsContextType | null>(null);

export const SavedDetailsContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SavedDetailsContext.Provider value={{ state, dispatch }}>
            {children}
        </SavedDetailsContext.Provider>
    )
}

export const useSavedDetailsContext = () => {
    const context = useContext(SavedDetailsContext);

    if (context === null) {
        throw new Error('SavedDetailsContext does not have a valid value.');
    }

    return context;
};