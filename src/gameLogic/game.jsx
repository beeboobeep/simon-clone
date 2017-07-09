import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../gameLogic'

const Game = (WrappedComponent, props) => {

    const switchPower = () => {
        props.isOn? props.powerOff() : props.powerOn()
    }

    const startGame = () => {
        if(props.isOn) props.startGame()
    }

    if(props.isGameRunning && !props.isPlayerTurn) props.takeCpuTurn()

    return (
        <WrappedComponent {...props} />
    )

}

const mapStateToProps = state => {
    const { gameLogic } = state
    return {
        isPlayerTurn: gameLogic.isPlayerTurn,
        isGameRunning: gameLogic.isGameRunning,
        isOn: gameLogic.isOn,
        sequence: gameLogic.currentSequence
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startGame: () => {
            dispatch(actions.startGame())
        },
        powerOn: () => {
            dispatch(actions.powerOn())
        },
        powerOff: () => {
            dispatch(actions.powerOff())
        },
        takeCpuTurn: () => {
            dispatch(actions.takeCpuTurn())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)