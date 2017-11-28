import React from 'react'
import PropTypes from 'prop-types'
import './LightButton.css'

const LightButton = (props) => {

    let isLit = props.isLit? 'lit' : ''
    let cssclass = `light-button ${isLit}`
    let id = `${props.color}`

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