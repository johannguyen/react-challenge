import { Action } from './actions'
import {Comment} from './CommentInterface'

export interface ApplicationState {
  id:number,
  inputName: string,
  inputDescription: string,
  inputComment: string,
  commentList: Array<Comment>,
  selectedComment?: Comment
}

const dummyData = [{
  id:1,
  name: "a",
  description: "a",
  comment: "a"
},{
  id:2,
  name: "b",
  description: "b",
  comment: "b"
},{
  id:3,
  name: "c",
  description: "c",
  comment: "c"
},{
  id:4,
  name: "d",
  description: "There are many separate articles on how to use TypeScript with Redux, Redux Form, and how to test Redux apps. This article combines all the knowledge into a single location to prevent you from needing to search for them all individually.Today we will combine all the major topics of React into a single application so that users can learn everything together in one place.",
  comment: "d"
}]

const getDefaultState = () => ({
  id:1,
  inputName: '',
  inputDescription:'',
  inputComment:'',
  commentList:[]
})

export default function reducer (
  state: ApplicationState = getDefaultState(),
  action: Action
): ApplicationState {
  switch (action.type) {
    case 'id-increase':
      return {...state, id: state.id+1}
    case 'input-clear':
      return {...state, inputName:'', inputDescription: '', inputComment: ''}  
    case 'inputName-set':
      return { ...state, inputName: action.payload }
    case 'inputDescription-set':
      return { ...state, inputDescription: action.payload }
    case 'inputComment-set':
      return { ...state, inputComment: action.payload }
    case 'commentList-set':
      return { ...state, commentList: action.payload }
    case 'commentList-add':
      return { ...state, commentList: [...state.commentList, action.payload], inputName:'', inputDescription: '', inputComment: ''}
    case 'commentList-remove':
      return {...state, commentList: state.commentList.filter(item => item.id !== action.payload)}
    case 'selectComment':
      return {...state, selectedComment: action.payload}
    default:
      return state
  }
}
