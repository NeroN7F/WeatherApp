const initialState = {
    userLocation: null,
};

const userLocationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USER_LOCATION':
            return {
                ...state,
                userLocation: action.payload,
            };
        default:
            return state;
    }
};

export default userLocationReducer;
