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

export function Show (){
    return{
        type: 'SHOW',
        payload: true
    }
}

export function Close (){
    return{
        type: 'CLOSE',
        payload: false
    }
}

export function Name (e){
    return{
        type: 'NAME',
        payload: e
    }
}