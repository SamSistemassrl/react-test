export const newTask = (dispatch, name, effort) =>{
    dispatch({
        type: "NEW_TASK",
        payload:{
            'name':name,
            'effort':effort
        }
    });
};

export const endTask = (dispatch, index) =>{
    dispatch({
        type: "END_TASK",
        payload: {
            'index':index
        }
    })
}