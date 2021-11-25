/*
1. expo init projName
2. cd projName
3. yarn add redux react-redux
 */

import React from 'react'


import { Provider } from 'react-redux'

import  store from './src/store'

import { default as MyApp } from './src'

export default () => {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  )
}




//cuando importamos store recibimos en el store el estado de nuestra aplicacion, ya que el estore al momento de ser creado le pasamos la combinacion de nuestros reducers functions las cuales se encuentran en todos.js
//Cada reducer combinado por la funcion combineReducers y pasado store, tiene sus propiedades y dentro de las propiedades estan las funciones que actualizan nuestro estado.