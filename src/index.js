import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { ListItem } from './components'


// Connectamos nuestro componente con Connect
import { connect } from 'react-redux'


import { completeActionCreatorFn, addTodoActionCreatorFn  } from './reducers'


// Form
import { Input } from './components'


// const data = [
//     {id: 1, desc: 'todo3', completed: false},
//     {id: 2, desc: 'todo4', completed: false},
// ]


// Conectar el componente MyApp con redux. 
// Buscamos dentro del estado a nuestros reducerTodoFn
// Creamos un par de funciones en nuestro reducer todo.js file para que podamos despacchar acciones desde nuestros componentes. 

const MyApp = ({ todos, updateTodoCompletedProp, addTodoToState}) => {
    const [text, setText] = useState('')
    const handleChange = (value) => { 
        console.log(value)
        setText(value)
    }

    const handleOnSubmitEditing = () => {
        addTodoToState(text)
        setText('')
    }
    return (
      <View style={styles.container}>

        <Input 
            onChange={handleChange}
            value={text}
            onSubmit={() => handleOnSubmitEditing()}
        />

        <FlatList 
            style={styles.list}
            data={todos}
            keyExtractor={x => String(x.id)}
            renderItem={({ item }) => (
                <ListItem 
                    onPress={() => updateTodoCompletedProp(item.id)}
                    desc={item.desc}
                    completed={item.completed}
                />
            )}
        />
      </View>
    )
}
  


const mapStateToProps = state => {
    console.log('State', state)
    return state
}


const mapDispatchToProps = dispatch => {
    return (
        {
           updateTodoCompletedProp: (id) => dispatch(completeActionCreatorFn(id)),
           addTodoToState: (text) => dispatch(addTodoActionCreatorFn(text))
        }
    )   
    // completeActionCreatorFn : esta funcion nos prepara y retorna el objeto o action con su type y payload y luego dispatch dependiento del type de la action o del objecto depachara alguna de las acciones en los case del swith. El payload toma valores dependiento de el llamado que se hacer y el tipo de accion  que se pasa en el objeto. Para el complete, payload es el id del todo al cual se le actualizara su propiedad complete de false a true.
}

// utilizamos la funcion connect para poder conectar nuestro componente MyApp con nuestra aplicacion de redux y asi poder acceder el estado.
export default connect(mapStateToProps, mapDispatchToProps)(MyApp)
// En el segundo parentesis nosotros le pasamos nuestro ccomponente.
// En el primer parenthesis connect va a recibir como primera argumento a una funcion que recibe el estado y en base al estado, nosotros podemos indicar que es lo que queremos retornar y lo que retorne dicha funcion lo va a recibir como argumento nuestro componente que le pasamos en el segundo parenthesis que en esta caso es MyApp. 
//El segundo argumento que recibe connect en el primer parenthesis es otra funcion. pero esta funcion recibe la built-in funcion dispatch. Este es el metodo que nosotros utilizamos para poder despachar las acciones dentro de nuestra funcion. Pero estos llamdos se van a ejecutar de manera tardia. Osea que no se van a ejecutar hasta que nosotros las llamemos dentro de nuestro componente.
//La definicion o cuerpo de ambas funciones es declarado por nosotros segun lo que necesitemos realizar pero por combencion se nombran: 
// mapStateToProps (state)
// 


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    list:{
        alignSelf: 'stretch'
    }
})