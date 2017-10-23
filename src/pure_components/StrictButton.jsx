import React from 'react'
import PropTypes from 'prop-types'
// import './StartButton.css'

const StrictButton = (props) => {

    return (
        <div onClick={props.onClick}>StrictButton</div>
    )
}

StrictButton.propTypes = {
    onClick: PropTypes.func
} 

export default StrictButton