import { Link } from 'react-router-dom'
import styles from './index.module.css'


function Navbar({user, setUser}) {

    const signOut = () => {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
    }

    return (
        <div className="navbar">
            <div className="container header-container">
                <div className="row">
                    <div className="col my-auto">
                        <Link to="/">
                            <p className="logo">the garden project</p>
                        </Link>
                    </div>
                    {user &&
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'right'}} className="col float-right">
                            <button className={styles.sign_out} onClick={signOut}>Sign out</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )


}

export default Navbar;