import initialState from './initialState.js'

const gameLogic = (state = initialState, action) => {
    switch (action.type) {
        case 'START_GAME':
            return {
                ...state,
                isGameRunning: state.isOn
            }

        case 'POWER_ON':
            return {
                ...state,
                isOn: true
            }

        case 'POWER_OFF':
            return {
                ...state,
                isOn: false,
                isGameRunning: false,
                currentSequence: [],
                isStrict: false
            }

        case 'SWITCH_STRICT_MODE':
            return {
                ...state,
                isStrict: (state.isOn && !state.isGameRunning)? !state.isStrict : state.isStrict
            }

        case 'CREATE_NEXT_SEQUENCE':
            return {
                ...state,
                currentSequence: [...state.currentSequence, action.value],
                playerCurrentIndex: 0,
                isPlayerTurn: false
            }

        case 'END_CPU_TURN':
            return {
                ...state,
                isPlayerTurn: true
            }

        case 'END_PLAYER_TURN':
            return {
                ...state,
                isPlayerTurn: false
            }

        case 'GAME_OVER':
            return {
                ...state,
                isGameRunning: false,
                isPlayerTurn: false,
                currentSequence: []
            }

        case 'INCORRECT_BUTTON_PRESSED':
            return {
                ...state,
                playerCurrentIndex: 0
            }

        case 'CORRECT_BUTTON_PRESSED':
            return {
                ...state,
                playerCurrentIndex: state.playerCurrentIndex + 1
            }

        default:
            return state
    }
}

export default gameLogic