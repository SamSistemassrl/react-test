const initialState = {
    tasks:[]
}

export default (state= initialState, action) =>{
    switch (action.type){
        case 'NEW_TASK':
            state.tasks.push({...action.payload})
            return {...state}
        case 'END_TASK':
            state.tasks.splice(action.payload.index, 1)
            return {...state}
        default:
            return state
    }
}