type NumberInputType = number | '';

export interface SavedDetailsType {
    ownerName: string,
    contact: string,
    location: string,
    price: NumberInputType,
    deposit: NumberInputType,
    deliveryDate: string,
    measurements: string,
    leg: NumberInputType,
    neck: NumberInputType,
    waist: NumberInputType,
    shoulder: NumberInputType,
    arm: NumberInputType,
    chest: NumberInputType,
    bicep: number | '',
    wrist: NumberInputType,
    back: NumberInputType,
    stomach: NumberInputType,
    hip: NumberInputType,
    thigh: NumberInputType,
    clothImages: File | null
}

export interface SavedDetailsState {
    savedDetails: SavedDetailsType[],
    searchInputValue: string
}

interface SavedDetailsActions {
    type: 'SET_CUSTOMER_DETAILS',
    payload: {
        savedDetails: SavedDetailsType[]
    }
}

export const initialState: SavedDetailsState = {
    savedDetails: [],
    searchInputValue: ''
}

export const reducer = (state: SavedDetailsState, action: SavedDetailsActions): SavedDetailsState => {
    switch (action.type) {
        case 'SET_CUSTOMER_DETAILS': {
            return {
                ...state,
                savedDetails: action.payload.savedDetails
            }
        }

        default: {
            return state;
        }
    }
}