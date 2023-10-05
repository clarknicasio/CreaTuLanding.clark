//import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'rsuite/dist/rsuite.min.css'


function App() {
  return (
    <>
      <div>
        <Menu/>
        <ItemListContainer title={'Bienvenidos'}/>
      </div>
    </>
  )
}

export default App
