import React from 'react'
import { LightButton } from '../lightButton'
import Switch from '../pure_components/Switch.jsx'
import StartButton from '../pure_components/StartButton.jsx'
import Display from '../pure_components/Display.jsx'
import StrictButton from '../pure_components/StrictButton.jsx'
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
            <Switch onClick={props.switchPower} isOn={props.isOn}/>
            <StartButton onClick={props.startGame}/>
            <StrictButton onClick={props.switchStrict} isStrict={props.isStrict}/>
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
        gameLogic: gameLogic,
        isStrict: gameLogic.isStrict
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
        switchPower: () => {
            dispatch(actions.switchPower())
        },
        handlePlayerButtonPressed: (id) => {
            dispatch(actions.handlePlayerButtonPressed(id))
        },
        switchStrict: () => {
            dispatch(actions.switchStrictMode())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullUI)