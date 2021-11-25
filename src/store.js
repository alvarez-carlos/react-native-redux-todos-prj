import { combineReducers, createStore } from 'redux'
import * as reducers from './reducers'

const store = createStore(combineReducers({
    ...reducers
}))
// Cada reducer exportado en todos.js tiene retorna un objeto con prropieades las cuales tienen funciones que al ejecutarse ehjecutan el estado.Estos reducer son todos importados en este file bajo el nombre de reducersTodoFunctions y luego combinados con la funcion combineRReducers(...reducersTodoFunctions)

export default store