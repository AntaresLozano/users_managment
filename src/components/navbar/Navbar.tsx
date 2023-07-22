import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    return (
        <div>
            <div className="navbar_container">
                <div className="navbar_logo">
                    <FontAwesomeIcon className='logo' icon={faUser} />
                    <p>Users Management</p>
                </div>
                <div className="navbar_links">
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/dashboard" >Dashboard</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar