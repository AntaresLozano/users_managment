import { Route, Routes } from "react-router-dom"
import { Navbar } from ".."
import { Dashboard, Home, NotFound } from "../../pages"
import './AppContent.css'
import { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";

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