import React from 'react'
import PropTypes from 'prop-types'
import './Switch.css'

const Switch = (props) => {

    let switchStatus = props.isOn? 'switch-on' : 'switch-off'
    let cssclass = `switch-button ${switchStatus}`

    return (
        <div onClick={props.onClick} className='switch'>
            <div className={cssclass}/>
        </div>
    )
}

Switch.propTypes = {
    onClick: PropTypes.func,
    isOn: PropTypes.bool
} 

export default Switch