const initialState= {
    list: []
};

const todo = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_TODO'){
        return {...state, list: action.payload}
    }
    //payload object(todo) will get added in list
    if(action.type === 'ADD_TODO'){
        return {...state,  list : [...state.list, action.payload]}
    }

    if(action.type === 'DELETE_TODO'){
        return {...state, list: state.list.filter(t=>t.id !== action.payload) }
    }

    return state;
};

export default todo; 
