export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
   // token:'BQDvAavb7vt0Hi7lqpqr37zVnKi0YMoypKXSDdORlnAg3tHzzIkRUD0nQT8kDd6UP-Bpv7mkV03Ra9ecyCttuklx_0IWs9_P1kOpuSMrYvGa34fuM_QNqJyRL4LqWg2S6-p5DM1BDxtGQdSYzzu1VmjMT6iwxzwo2wa_CrpmoiAp3ihwNsOZJg7o87S-0yASzpIlAdFwlNWkxTzO',
};

const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
        return {
            ...state, 
            user: action.user
        };
        case 'SET_TOKEN':
        return {
            ...state, 
            token: action.token
        };

        case 'SET_PLAYLISTS':
            return {
                ...state, 
                playlists: action.playlists,
            };

            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state, 
                    discover_weekly: action.discover_weekly,
                };
        
        default:
        return state;
}
}

export default reducer;