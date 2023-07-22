import './Home.css';
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home_container">
            <div className="home_title--container">
                <h1 className='home_title' >Manage all your users in one place</h1>
            </div>
            <p className='home_subtitle' >the application to keep all your users in order.</p>
            <Link className='call_to_action' to="/dashboard" >let's start</Link>
        </div>
    )
}
export default Home