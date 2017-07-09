import {combineReducers} from 'redux'
import {reducer as gameLogic} from './gameLogic'
import {reducer as lightButton} from './lightButton'

export default combineReducers({
    gameLogic,
    lightButton
})