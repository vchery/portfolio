import { React } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'

function Home() {
    return (
        <div>
            <h2>This is the home page</h2>
            <div className="sections">
                <Navbar/>
            </div>
        </div>
    );
}

export default Home;