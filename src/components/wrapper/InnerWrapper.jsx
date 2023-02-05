import React from 'react'
import classes from './Wrapper.module.css'

function InnerWrapper({ children }) {
    return (
        <div className={ classes.wrapperInner }>
            {children}
        </div>
    )
}

export default InnerWrapper