let data = localStorage.getItem("todo");
data = data === null ? [] : JSON.parse(data);
export let todoInitialState = {
    inputTask:"",
    todoList:data,
    error:"",
}
export let todoReducer = (state,action) => {
    let  {type,payload}= action;

    switch(type){
        case 'INPUT_CHANGE':
                 let _state= {...state, inputTask:payload};
                 return _state;
            
        case 'SAVE_TODO_LIST':
                 let _saveListState = {...state,todoList:payload,inputTask:""};
                 return _saveListState;

       case 'DELETE_TASK'  :
                 let _updatedListState = {...state,todoList:payload};
                 return _updatedListState;

       case 'SET_ERROR':
                 let _errorState = {...state,error: payload};
                 return _errorState;
       default:
                return state;  
    }
    
}