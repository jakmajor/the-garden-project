import { NavLink, Link } from 'react-router-dom'


function Navbar({ showAvatar = true }) {

    return (
        <div className="navbar">
            <div className="container header-container">
                <div className="row">
                    <div className="col my-auto">
                        <Link to="/">
                            <p className="logo">the garden project</p>
                        </Link>
                    </div>
                    <div className="col float-right">
                        {showAvatar &&
                            <div className="links">
                                <NavLink className="nav-link" to="/Profile"><img></img></NavLink>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Navbar;