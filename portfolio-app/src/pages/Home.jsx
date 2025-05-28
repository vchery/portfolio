import { React } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="main">
            <h2>Home Page</h2>
            <div className="about">
                <p>About me</p>
            </div>
            <div className="sections">
                <Link to='/academic'>
                    <button>Academic</button>
                </Link>
                <Link to='/experience'>
                    <button>Experience</button>
                </Link>
                <Link to='/projects'>
                    <button>Projects</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;