import React from 'react'
import PropTypes from 'prop-types'
// import Tone from 'tone'
import './LightButton.css'

// let osc = new Tone.Oscillator(440, 'square').toMaster();

const LightButton = (props) => {

    let isLit = props.isLit? 'lit' : ''
    let cssclass = `light-button ${isLit}`
    let id = `${props.color}`

    // props.isLit? osc.start() : osc.stop()
    // props.isLit? console.log(props.note + 'trigger isLit') : console.log(props.note + ' trigger notLit')

    if (window.matchMedia("(hover: hover)").matches) {
        return (
            <div
                id={id}
                className={cssclass}
                onMouseDown={props.onClickStart}
                onMouseUp={props.onClickEnd}
                
            />
        )
    } else {
        return (
            <div
                id={id}
                className={cssclass}
                onTouchStart={props.onClickStart}
                onTouchEnd={props.onClickEnd}
            />
        )
    }
    
}

LightButton.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    isLit: PropTypes.bool,
    note: PropTypes.string
}

export default LightButton