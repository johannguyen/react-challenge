import reducer from "./reducer";

test('Should add comment to empty list', () => {
    const previousState = {
        id:1,
        inputName: '',
        inputDescription:'',
        inputComment:'',
        commentList:[]
      };

    const action = {
        type: 'commentList-add',
        payload:{
            id:1,
            name: "a",
            description: "a",
            comment: "a"
          }
    }

    expect(reducer(previousState, action)).toEqual(
        {
            id:1,
            inputName: '',
            inputDescription:'',
            inputComment:'',
            commentList:[{
                id:1,
                name: "a",
                description: "a",
                comment: "a"
              }]
          }
    )
  })

  test('Should increaseId', () => {
    const previousState = {
        id:1,
        inputName: '',
        inputDescription:'',
        inputComment:'',
        commentList:[]
      };

    const action = {
        type: 'id-increase',
        payload:null
    }

    expect(reducer(previousState, action)).toEqual(
        {
            id:2,
            inputName: '',
            inputDescription:'',
            inputComment:'',
            commentList:[]
          }
    )
  })

  test('Should remove comment', () => {
    const previousState = {
        id:1,
        inputName: '',
        inputDescription:'',
        inputComment:'',
        commentList:[{
            id:1,
            name: "a",
            description: "a",
            comment: "a"
          }]
      };

    const action = {
        type: 'commentList-remove',
        payload:1
    }

    expect(reducer(previousState, action)).toEqual(
        {
            id:1,
            inputName: '',
            inputDescription:'',
            inputComment:'',
            commentList:[]
          }
    )
  })

  test('Should set input name', () => {
    const previousState = {
        id:1,
        inputName: '',
        inputDescription:'',
        inputComment:'',
        commentList:[]
      };

    const action = {
        type: 'inputName-set',
        payload:'a'
    }

    expect(reducer(previousState, action)).toEqual(
        {
            id:1,
            inputName: 'a',
            inputDescription:'',
            inputComment:'',
            commentList:[]
          }
    )
  })

  test('Should set input description', () => {
    const previousState = {
        id:1,
        inputName: '',
        inputDescription:'',
        inputComment:'',
        commentList:[]
      };

    const action = {
        type: 'inputDescription-set',
        payload:'a'
    }

    expect(reducer(previousState, action)).toEqual(
        {
            id:1,
            inputName: '',
            inputDescription:'a',
            inputComment:'',
            commentList:[]
          }
    )
  })

  test('Should set input comment', () => {
    const previousState = {
        id:1,
        inputName: '',
        inputDescription:'',
        inputComment:'',
        commentList:[]
      };

    const action = {
        type: 'inputComment-set',
        payload:'a'
    }

    expect(reducer(previousState, action)).toEqual(
        {
            id:1,
            inputName: '',
            inputDescription:'',
            inputComment:'a',
            commentList:[]
          }
    )
  })

  test('Should clear all inputs', () => {
    const previousState = {
        id:1,
        inputName: 'a',
        inputDescription:'a',
        inputComment:'a',
        commentList:[]
      };

    const action = {
        type: 'input-clear',
        payload:null
    }

    expect(reducer(previousState, action)).toEqual(
        {
            id:1,
            inputName: '',
            inputDescription:'',
            inputComment:'',
            commentList:[]
          }
    )
  })