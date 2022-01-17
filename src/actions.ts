import {Comment} from './CommentInterface'

export interface Action { type: string, id:number, inputName: string, inputDescription: string, inputComment: string, commentList: Array<Comment>, newComment:Comment, removeId:number, selectedComment:Comment }

export const increaseId = () =>({
  type: 'id-increase'
})

export const clearInputs = () => ({
  type: 'input-clear'
})

export const setInputName = (inputName: string) => ({
  type: 'inputName-set',
  inputName
})

export const setInputDescription = (inputDescription: string) => ({
  type: 'inputDescription-set',
  inputDescription
})

export const setInputComment = (inputComment: string) => ({
  type: 'inputComment-set',
  inputComment
})

export const addComment = (newComment: Comment) => ({
  type: 'commentList-add',
  newComment
}) 

export const removeComment = (removeId: number) => ({
  type: 'commentList-remove',
  removeId
})
