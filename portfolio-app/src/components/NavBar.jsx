import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/academic'>
                <button>Academic</button>
            </Link>
            <Link to='/experience'>
                <button>Experience</button>
            </Link>
            <Link to='/projects'>
                <button>Projects</button>
            </Link>
        </>
    );
}

export default Navbar;
