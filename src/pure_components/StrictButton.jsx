import React from 'react'
import PropTypes from 'prop-types'
import './StrictButton.css'

const StrictButton = (props) => {

    return (
        <div className='flex-center-col'>
            <div id='strict' onClick={props.onClick} />
            <span>Strict</span>
        </div>
    )
}

StrictButton.propTypes = {
    onClick: PropTypes.func
} 

export default StrictButton