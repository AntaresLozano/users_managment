import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Home, NotFound } from './pages';
import { Navbar } from './components';
import { UsersContextProvider } from './context/usersContext';

function App() {

  return (
    <>
      <UsersContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UsersContextProvider>
    </>
  )
}

export default App
