import React from 'react'
import useStyles from './styles'
function BackDrop(props) {
    const classes = useStyles()
    return (
       props.show&&<div className={classes.backdrop} onClick={props.clicked}></div>
    )
}

export default BackDrop