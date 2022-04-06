const initialState={
    dark: false
}


export default function rootReducer (state= initialState, action){
    switch(action.type){
        case 'DARK':
            return{
                ...state,
                    dark: action.payload
            };
        case 'LIGHT':
            return{
                ...state,
                    dark: action.payload
            };
        default:
            return{
                state
            }
    }
}