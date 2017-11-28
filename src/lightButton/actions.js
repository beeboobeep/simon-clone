import {buttonSound, errorSound} from '../gameLogic/sounds.js'

export const startLightButton = (id) => {
    return dispatch => {
        dispatch(startLight(id))
        buttonSound.startSound(id)
    }
}

const startLight = id => {
    return {
        type: 'START_BUTTON_LIGHT',
        value: id
    }
}

export const endLightButton = (id) => {
    return dispatch => {
        dispatch(endLight(id))
        buttonSound.stopSound()
    }
}

const endLight = id => {
    return {
        type: 'END_BUTTON_LIGHT',
        value: id
    }
}

export const cpuButtonPress = id => {
    return dispatch => {
        return new Promise((res, rej) => {
            dispatch(startLightButton(id))
            setTimeout(()=>{dispatch(endLightButton(id))},500)
            setTimeout(()=>res(),1000)
        })  
    }
}


// function startDelay(id){
//     return dispatch => {
//         return new Promise((res, rej) => {
//             dispatch(startLightButton(id))
//             setTimeout(()=>{res(dispatch(endLightButton(id)))},500)
//         })    
//     }
// }

// function endDelay(id){
//     return dispatch => {
//         return new Promise((res, rej) => {
//             setTimeout(()=>{res(dispatch(endLightButton(id)))},500)
//         })        
//     }
// }