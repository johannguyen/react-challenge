import {Comment} from './CommentInterface'

export interface Action { type: string, payload:any }

export const increaseId = () =>({
  type: 'id-increase'
})

export const clearInputs = () => ({
  type: 'input-clear'
})

export const setInputName = (payload: string) => ({
  type: 'inputName-set',
  payload
})

export const setInputDescription = (payload: string) => ({
  type: 'inputDescription-set',
  payload
})

export const setInputComment = (payload: string) => ({
  type: 'inputComment-set',
  payload
})

export const addComment = (payload: Comment) => ({
  type: 'commentList-add',
  payload
}) 

export const removeComment = (payload: number) => ({
  type: 'commentList-remove',
  payload
})
