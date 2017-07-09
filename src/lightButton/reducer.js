import initialState from './initialState.js'

const lightButtons = (state = initialState, action) => {
    switch (action.type) {

        case 'START_BUTTON_LIGHT':
            return {
                ...state,
                [action.value]: {
                    ...state[action.value],
                    isLit: true
                }
            }   

        case 'END_BUTTON_LIGHT':
            return {
                ...state,
                [action.value]: {
                    ...state[action.value],
                    isLit: false
                }
            }  

        default:
            return state
    }
}

export default lightButtons