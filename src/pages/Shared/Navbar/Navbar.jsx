import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider"


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navOptions = <>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link>CONTACT US </Link></li>
        <li><Link>DASHBOARD</Link></li>
        <li><Link to={'/menu'}>OUR MENU </Link></li>
        <li><Link to={'/order/salad'}>ORDER FOOD </Link></li>
        <li>
            <Link>
                <button className="btn btn-ghost">
                    Inbox <div className="badge badge-sm badge-secondary">+99</div>
                </button>
            </Link>
        </li>
        {
            user ? <> <Link onClick={handleLogOut} className="btn btn-ghost"> Logout</Link> </> : <> <li> <Link to={'/login'}> Login</Link></li> </>
        }

    </>
    return (
        <div>
            <div className="navbar fixed z-50 text-white bg-black/30 shadow-sm max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar