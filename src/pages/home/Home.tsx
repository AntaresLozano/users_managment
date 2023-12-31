import { ThemeContext } from '../../context';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './Home.css';
function Home() {

    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className="home_container" >
            <div className="home_title--container">
                <h1 className='home_title' >Manage all your users in one place</h1>
            </div>
            <div className="home_subtitle--container">
                <p id={darkTheme ? 'dark' : 'light'} className='home_subtitle' >the application to keep all your users in order.</p>
            </div>
            <Link className='call_to_action' to="/dashboard" >let's start</Link>
        </div>
    )
}
export default Home