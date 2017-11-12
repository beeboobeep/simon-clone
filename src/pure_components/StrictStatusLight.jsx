import React from 'react'
import PropTypes from 'prop-types'
import './StrictStatusLight.css'

const StrictStatusLight = (props) => {

    let lightStatus = props.isOn? 'on' : 'off'

    return (
        <div className='flex-center-col'>
            <div id='strict-light' className={'strict-light ' + lightStatus}/>
        </div>
    )
}

StrictStatusLight.propTypes = {
    isOn: PropTypes.bool
} 

export default StrictStatusLight