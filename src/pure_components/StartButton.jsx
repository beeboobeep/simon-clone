import React from 'react'
import PropTypes from 'prop-types'
import './StartButton.css'

const StartButton = (props) => {

    return (
        <div className='flex-center-col'>
            <div id='start' onClick={props.onClick} />
            <span>Start</span>
        </div>
    )
}

StartButton.propTypes = {
    onClick: PropTypes.func
} 

export default StartButton