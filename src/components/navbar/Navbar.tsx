import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'
import { Switch } from '@mui/material'
import { useContext } from 'react'
import './Navbar.css'

function Navbar() {

    const { darkTheme, switchTheme } = useContext(ThemeContext)

    const handleChangeTheme = () => {
        switchTheme();
    }

    return (
        <div>
            <div className="navbar_container">
                <div className="navbar_logo" >
                    <FontAwesomeIcon className='logo' icon={faUser} />
                    <p id={darkTheme ? 'dark' : 'light'}>Users Management</p>
                </div>
                <div className="navbar_links">
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/dashboard" >Dashboard</Link></li>
                    </ul>
                </div>
                <Switch
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                    color="primary"
                    name="themeSwitch"
                    inputProps={{ 'aria-label': 'Toggle dark theme' }}
                />
            </div>
        </div>
    )
}
export default Navbar