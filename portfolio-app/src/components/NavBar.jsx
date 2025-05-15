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
        </>
    );
}

export default Navbar;
