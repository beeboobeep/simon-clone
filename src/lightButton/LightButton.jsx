import React from 'react'
import PropTypes from 'prop-types'
// import Tone from 'tone'
import './LightButton.css'

// let osc = new Tone.Oscillator(440, 'square').toMaster();

const LightButton = (props) => {

    let isLit = props.isLit? 'lit' : ''
    let cssclass = `light-button ${props.color} ${isLit}`

    // props.isLit? osc.start() : osc.stop()
    // props.isLit? console.log(props.note + 'trigger isLit') : console.log(props.note + ' trigger notLit')


    return (
        <div 
            className={cssclass} 
            onMouseDown={props.onClickStart}
            onMouseUp={props.onClickEnd}
            onTouchStart={props.onClickStart}
            onTouchEnd={props.onClickEnd}
        />
    )
}

LightButton.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    isLit: PropTypes.bool,
    note: PropTypes.string
}

export default LightButton