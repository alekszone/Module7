import {createStore} from "redux"
import reducers from '../reducers'

const data ={
student:[]
}

export default function configureStore(){
return createStore(
    reducers,data, 
    window.__REDUX__DEVTOOLS_EXTENSION__ && window.__REDUX__DEVTOOLS_EXTENSION__())
}






