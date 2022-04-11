const initialState={
    dark: false,
    modal: false
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
        case 'SHOW':
            return{
                ...state,
                modal: action.payload
            }
        case 'CLOSE':
            return{
                ...state,
                modal: action.payload
            }
        default:
            return{
                state
            }
    }
}