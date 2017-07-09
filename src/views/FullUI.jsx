import React from 'react'
import { LightButton } from '../lightButton'
import Switch from '../pure_components/Switch.jsx'
import StartButton from '../pure_components/StartButton.jsx'
import Display from '../pure_components/Display.jsx'
import { connect } from 'react-redux'
import { actions } from '../gameLogic'
import { startLightButton, endLightButton } from '../lightButton'

const FullUI = (props) => {

    const onClickStart = (id) => {
        if(props.isGameRunning && props.isPlayerTurn) props.startButtonPress(id)
    }

    const onClickEnd = (id) => {
        if(props.isGameRunning) {
            props.endButtonPress(id)
            props.handlePlayerButtonPressed(id)
        }
    }

    const switchPower = () => {
        props.isOn? props.powerOff() : props.powerOn()
    }

    const startGame = () => {
        if(props.isOn && !props.isGameRunning) props.startGame()
    }

    return (
        <div className='FullUI'>
            {
                props.buttons.map((button, index) => {
                    return (
                        <LightButton 
                            key={index}
                            onClickStart={()=>onClickStart(index)}
                            onClickEnd={()=>onClickEnd(index)}
                            {...button}
                        />
                    )
                })
            }
            <Switch onClick={()=>switchPower()} isOn={props.isOn}/>
            <StartButton onClick={startGame}/>
            <Display {...props.gameLogic} />
        </div>
    )
}

const mapStateToProps = state => {
    const { lightButton, gameLogic } = state
    return {
        buttons: Object.keys(lightButton).map(key=>lightButton[key]),
        isPlayerTurn: gameLogic.isPlayerTurn,
        isGameRunning: gameLogic.isGameRunning,
        isOn: gameLogic.isOn,
        gameLogic: gameLogic
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startGame: () => {
            dispatch(actions.startGame())
        },
        startButtonPress: (id) => {
            dispatch(startLightButton(id))
        },
        endButtonPress: (id) => {
            dispatch(endLightButton(id))
        },
        powerOn: () => {
            dispatch(actions.powerOn())
        },
        powerOff: () => {
            dispatch(actions.powerOff())
        },
        takeCpuTurn: () => {
            dispatch(actions.takeCpuTurn())
        },
        handlePlayerButtonPressed: (id) => {
            dispatch(actions.handlePlayerButtonPressed(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullUI)