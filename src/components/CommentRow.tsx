import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, Icon, Typography, Grid, TextField, Box, Modal, makeStyles } from '@material-ui/core'
import { removeComment } from '../actions'
import { ApplicationState } from '../reducer'
import {Comment} from '../CommentInterface'
import { purple, red } from '@material-ui/core/colors'

interface Props {
  comment: Comment,
  selectedComment?: Comment,
  dispatch: Dispatch
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 4, 3),
    top:'30%',
    left:'30%'
  },

  closeIcon:{
    position:'absolute',
    top: '10px',
    right:'10px'
  },

  modalButton:{
    backgroundColor: '#ffffff',
    minWidth:'20px',
    minHeight:'20px',
    lineHeight: 1
  }
  
}));

const CommentRow = ({ comment, dispatch }: Props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const remove = () => {
    dispatch(removeComment(comment.id))
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
        <Grid container className="commentRow">
            <Grid item xs={12} sm={3}  >
              <Typography component="div" className="rowField">
                  {comment.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} >
              <Typography component="div" className="rowField">
                {comment.description}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}  justify="flex-end">
              <Box className="iptContainer">
                <Button className="main" onClick={remove}>
                  Delete
                </Button>
                <Button className="main" onClick={handleOpen}>
                  Details
                </Button>
              </Box>
            </Grid> 
        </Grid>
        <Modal open={open} onClose={handleClose}>
          <Box className={classes.paper}>
            <Box className={classes.closeIcon}>
              <Button onClick={handleClose} className={classes.modalButton}>X</Button>
            </Box>
            <Grid container className="commentHeader">
              <Grid item xs={2} sm={2} className="iptContainer">
                <Typography component="div" className="listLabel">
                    Name
                </Typography>
              </Grid>
              <Grid item xs={5} sm={5} className="iptContainer">
                <Typography component="div" className="listLabel">
                  Description
                </Typography>
              </Grid>
              <Grid item xs={5} sm={5} className="iptContainer">
                <Typography component="div" className="listLabel">
                  Comment
                </Typography>
              </Grid>
            </Grid>
            <Grid container className="commentRow">
              <Grid item xs={2} sm={2}  >
                <Typography component="div" className="rowField">
                    {comment.name}
                </Typography>
              </Grid>
              <Grid item xs={5} sm={5} >
                <Typography component="div" className="rowField">
                  {comment.description}
                </Typography>
              </Grid>
              <Grid item xs={5} sm={5} >
                <Typography component="div" className="rowField">
                  {comment.comment}
                </Typography>
              </Grid>
            </Grid> 
          </Box>
        </Modal>
    </>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  selectedComment: state.selectedComment
})

export default connect(mapStateToProps)(CommentRow)
