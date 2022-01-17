import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, Icon, Typography, Grid, TextField, Box } from '@material-ui/core'

import { setInputName, setInputDescription, setInputComment, addComment, increaseId, clearInputs } from '../actions'
import { ApplicationState } from '../reducer'
import {Comment} from '../CommentInterface'

interface Props {
  id:number,
  inputName: string,
  inputDescription: string,
  inputComment: string,
  dispatch: Dispatch
}

const CommentForm = ({ id, inputName, inputDescription, inputComment, dispatch }: Props) => {
  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    dispatch(setInputName(val))
  }

  const descriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    dispatch(setInputDescription(val))
  }

  const commentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    dispatch(setInputComment(val))
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment: Comment = {
      id: id,
      name: inputName,
      description: inputDescription,
      comment: inputComment
    }
    dispatch(addComment(comment))
    dispatch(increaseId())
  }

  const clear = () => {
    dispatch(clearInputs())
  }

  return (
    <>
      <Box mt={5} mb={5}>
        <form onSubmit={submitHandler}>
          <Grid container spacing={3} className="inputForm">
              <Grid item xs={12} sm={3} className="iptContainer">
                <Box mr={2}>
                  <Typography component="div" className="formLabel">
                      Name
                  </Typography>
                </Box>
                <TextField variant="outlined" size="small" fullWidth className="ipt" value={inputName} onChange={nameChange}/>
              </Grid>
              <Grid item xs={12} sm={9} className="iptContainer">
                <Box mr={2}>
                  <Typography component="div" className="formLabel">
                      Description
                  </Typography>
                </Box>
                <TextField variant="outlined" size="small" fullWidth className="ipt" value={inputDescription} onChange={descriptionChange}/>
              </Grid>
              <Grid item xs={12} className="iptContainer">
                <Box mr={2}>
                  <Typography component="div" className="formLabel">
                      Comment
                  </Typography>
                </Box>
                <TextField variant="outlined" size="small" fullWidth className="ipt" value={inputComment} onChange={commentChange}/>
              </Grid> 
              <Grid item xs={12} className="iptContainer" justify="flex-end">
                <Box mr={2}>
                  <Button className="main" onClick={clear}>
                    Clear
                  </Button>
                </Box>
                <Button className="main" type="submit">
                  Add
                </Button>
              </Grid> 
          </Grid>
        </form>
      </Box> 
    </>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  id: state.id,
  inputName: state.inputName,
  inputDescription: state.inputDescription,
  inputComment: state.inputComment
})

export default connect(mapStateToProps)(CommentForm)
