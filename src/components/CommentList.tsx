import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, Icon, Typography, Grid, TextField, Box } from '@material-ui/core'

import { ApplicationState } from '../reducer'
import {Comment} from '../CommentInterface'
import CommentRow from './CommentRow'

interface Props {
  commentList: Array<Comment>,
  dispatch: Dispatch
}

const CommentList = ({ commentList, dispatch }: Props) => {
    return (
    <>
        <Grid container className="commentHeader">
            <Grid item xs={12} sm={3} className="iptContainer">
              <Typography component="div" className="listLabel">
                  Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9} className="iptContainer">
              <Typography component="div" className="listLabel">
                Description
              </Typography>
            </Grid>
        </Grid>
        {commentList.map((c)=>(
            <CommentRow key={c.id} comment={c}/>
        ))}
    </>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
    commentList: state.commentList
})

export default connect(mapStateToProps)(CommentList)
