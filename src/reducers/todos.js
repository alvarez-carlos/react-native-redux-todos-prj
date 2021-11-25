
const initialState = [
    {id: 1, desc: 'todo1', completed: false},
    {id: 2, desc: 'todo2', completed: false},
    {id: 3, desc: 'todo3', completed: false},
]

const COMPLETE = 'COMPLETE'
const SUBMIT = 'SUBMIT'

export const completeActionCreatorFn = id => {
    return(
        {
            type: COMPLETE,
            payload: id
        }
    )
}


export const addTodoActionCreatorFn = text => {
    return (
        {
            type: SUBMIT,
            payload: {
                id: Math.random().toString(36),
                desc: text,
                completed: false
            }
        }
    )
}

const reducerTodoFn = (state = initialState , action) => {
    console.log(action)
    // return state
   
    switch(action.type){

        case COMPLETE:
            return state.map(x => x.id === action.payload ? ({ ...x, completed: !x.completed }) : x )
        case SUBMIT:
            return [action.payload].concat(state)
        default:
            return state
    }
}

export default reducerTodoFn