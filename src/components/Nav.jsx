import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link className='option-menu' to={"/"}>Home</Link>
            <Link className='option-menu' to={"contact"}>Contact</Link>
            <Link className='option-menu' to={"about"}>About</Link>
        </nav>
    )
}

export default Nav