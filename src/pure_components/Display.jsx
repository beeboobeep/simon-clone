import React from 'react'
import './Display.css'

let digits = ''

const Display = (props) => {

    digits = props.isOn? '--' : ' '
    if(props.isGameRunning && props.isPlayerTurn) {
        digits = props.currentSequence.length
        if(digits < 9) digits = '0' + digits
    }

    return (
        <div className='display'>{digits}</div>
    )
}

export default Display