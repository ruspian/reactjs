import { GlobalContext } from './context '
import { Router } from './routers/routers'
import { RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  // membuat global context agar bisa diakses di semua komponen
  const user = {
    username: 'Ruspian majid'
  }
  return (
    <div className='App'>
        <GlobalContext.Provider value={user}>
          {/* menggunakan router provider untuk menangani routing */}
          <RouterProvider router={Router} />
        </GlobalContext.Provider>
    </div>
  )
}

export default App
