import React         from 'react'
import Button        from '@material-ui/core/Button'
import Dialog        from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle   from '@material-ui/core/DialogTitle'
import Slide         from '@material-ui/core/Slide'

import './Modal.css'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const modal = (props) => (
    <Dialog
        open={props.visible}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle id="alert-dialog-slide-title">
            {props.title}
        </DialogTitle>
        <DialogContent>
            {props.children}
        </DialogContent>
        <DialogActions>
            <Button onClick={props.btnLeftFunction} color="primary">
                {props.btnLeft}
            </Button>
            <Button onClick={props.btnRightFunction} color="primary">
                {props.btnRight}
            </Button>
        </DialogActions>
    </Dialog>
)


export default modal
