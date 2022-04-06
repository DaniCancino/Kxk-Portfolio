///  THIS ACTIONS IS FOR THE MANAGEMENT OF HEADER COLOR AND BURGER MENU BARS COLOR

export function Dark (){
    return{
        type: 'DARK',
        payload: true
    }
}

export function Light (){
    return{
        type: 'LIGHT',
        payload: false
    }
}