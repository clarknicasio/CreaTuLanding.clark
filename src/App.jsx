import React from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import ListItemContainer from './components/ListItemContainer/ListItemContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import 'rsuite/dist/rsuite.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

          
  return (
    <>
      <div>
        <BrowserRouter>
          <Menu/>
          {
            <Routes>
            <Route path='/' element={<ListItemContainer title={'Bienvenidos'}/>}/>
            <Route path='/category/:categoryId' element={<ListItemContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h4>404 - NOT FOUND</h4>} />
            </Routes>
          }
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
