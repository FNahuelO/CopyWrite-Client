import { REVERSE_TEXT } from '../action/index'

const initialState = {
    texts: []
}

const rootReduce = (state = initialState, action) => {
    switch (action.type){
        case REVERSE_TEXT:
            return {
                ...state,
                texts: [...state.texts, action.payload]
            }
        default:
            return state
    }
}

export default rootReduce;