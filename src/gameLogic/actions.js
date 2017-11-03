import { generateNumber } from './engine.js'
import { cpuButtonPress } from '../lightButton'

export const startGame = () => {
    return (dispatch, getState) => {
        let {isOn, isGameRunning} = getState().gameLogic
        if(isOn && !isGameRunning) {
            dispatch(startGameDispatch())
            dispatch(takeCpuTurn())
        }
    }
}

export const switchPower = () => {
    return (dispatch, getState) => {
        getState().gameLogic.isOn? dispatch(powerOff()) : dispatch(powerOn())
    }
}

const powerOn = () => {
    return {
        type: 'POWER_ON'
    }
}

const powerOff = () => {
    return {
        type: 'POWER_OFF'
    }
}

export const switchStrictMode = () => {
    return {
        type: 'SWITCH_STRICT_MODE'
    }
}

export const createNextSequence = () => {
    return {
        type: 'CREATE_NEXT_SEQUENCE',
        value: generateNumber()
    }
}

export const handlePlayerButtonPressed = (id) => {
    return (dispatch, getState) => {
        let {currentSequence, playerCurrentIndex, isStrict} = getState().gameLogic
        if(currentSequence[playerCurrentIndex]===id) {
            if(playerCurrentIndex === currentSequence.length - 1) {
                dispatch(takeCpuTurn())
            }
            else dispatch(correctButtonPressed())
        }
        else isStrict? dispatch(gameOver()) : dispatch(repeatCpuTurn())
    }
}

const incorrectButtonPressed = () => {
    return {
        type: 'INCORRECT_BUTTON_PRESSED'
    }
}

const correctButtonPressed = () => {
    return {
        type: 'CORRECT_BUTTON_PRESSED'
    }
}

export const takeCpuTurn = () => {
    return (dispatch, getState) => {
        dispatch(createNextSequence())
        let state = getState().gameLogic
        let sequence = state.currentSequence
        setTimeout(() =>{
            playSequence(dispatch, sequence)
            .then(()=>{
                dispatch(endCpuTurn())
            })
        },1000)
    }   
}

const repeatCpuTurn = () => {
    return (dispatch, getState) => {
        dispatch(incorrectButtonPressed())
        dispatch(endPlayerTurn())
        let state = getState().gameLogic
        let sequence = state.currentSequence
        setTimeout(() =>{
            playSequence(dispatch, sequence)
            .then(()=>{
                dispatch(endCpuTurn())
            })
        },1000)
    }   
}

async function playSequence(dispatch, sequence) {
    for(const current of sequence) {
        await dispatch(cpuButtonPress(current))
    }
}

const endCpuTurn = () => {
    return {
        type: 'END_CPU_TURN'
    }
}

const endPlayerTurn = () => {
    return {
        type: 'END_PLAYER_TURN'
    }
}

const startGameDispatch = () => {
    return {
        type: 'START_GAME'
    }
}

const gameOver = () => {
    return {
        type: 'GAME_OVER'
    }
}