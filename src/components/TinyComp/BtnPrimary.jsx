import React from 'react'
import { Link } from 'react-router-dom'
import classes from './BtnPrimary.module.css'

function BtnPrimary({ children, To }) {
  return (
    <Link to={To} className={ classes.btnPrimaryCon }>{children}</Link>
  )
}

export default BtnPrimary;