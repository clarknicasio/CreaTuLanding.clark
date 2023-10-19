import React from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import ListItemContainer from './components/ListItemContainer/ListItemContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import 'rsuite/dist/rsuite.min.css'

function App() {

          
  return (
    <>
      <div>
        <Menu/>
        <ListItemContainer title={'Bienvenidos'} />
        <ItemDetailContainer />
      </div>
    </>
  )
}

export default App
