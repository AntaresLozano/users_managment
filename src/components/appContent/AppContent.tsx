import { Dashboard, Home, NotFound } from "../../pages"
import { ThemeContext } from "../../context/ThemeContext";
import { Route, Routes } from "react-router-dom"
import { useContext } from 'react';
import { Navbar } from ".."
import './AppContent.css'

const AppContent = () => {

    const { darkTheme } = useContext(ThemeContext)
    
    return (
        <div className={darkTheme ? 'dark' : 'light'}>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}
export default AppContent