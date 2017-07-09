import React from 'react'
import PropTypes from 'prop-types'
// import './StartButton.css'

const StartButton = (props) => {

    return (
        <div onClick={props.onClick}>StartButton</div>
    )
}

StartButton.propTypes = {
    onClick: PropTypes.func
} 

export default StartButton