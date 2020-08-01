export default function (state={},action){
switch(action.type){
case "ADD_STUDENTS":
    return {
...state,
students:[...state.students,action.payload]
    }
    case "REMOVE_STUDENTS":
    return{    
    ...state,
students: state.students.filter(x=>x!==action.payload)
    }
default: return state    
}
}