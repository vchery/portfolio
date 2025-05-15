import { React } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h2>This is the home page</h2>
            <div className="about">
                <p>This is where my 'about' bio will go</p>
            </div>
            <div className="sections">
                <p>This is where the other sections will go</p>
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