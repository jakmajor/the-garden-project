import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import styles from './index.module.css'

function LoginPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div className="container-fluid login-page">
        <div className="row justify-content-center">
          <div className="col-md-6" style={{backgroundColor:'#88876B', padding:'200px 100px',display:'flex'}}>
            <div style={{ height: "100vh", width: "100%", position: "relative", alignSelf:'center'}}>
              <p className={`${styles.home_txt} ${styles.txt_1}`}>Connecting humans to their roots</p>
              <div style={{backgroundImage:`url('https://i.pinimg.com/564x/fd/4b/d1/fd4bd1ffaf222467baaf7fac2e2c4145.jpg')`,height: '400px', width:'100%', backgroundSize:'cover',backgroundPosition:'center', position:'relative'}}></div>
              <p className={`${styles.home_txt} ${styles.txt_2}`}>to plant a garden is to believe in tomorrow</p>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ height: "100vh", width: "100%", position: "relative", display:'flex' }}>
              <div style={{ height: "70px", width: "50%", alignSelf:'center', margin:'0px auto'}}>
                {showLogin ? (
                  <>
                    <LoginForm setUser={setUser} />
                    <p className="login-box-switch text-center">
                      Don't have an account? &nbsp;
                      <button className="login-button-switch signout-button" onClick={() => setShowLogin(false)}>
                        Sign Up
                      </button>
                    </p>
                  </>
                ) : (
                  <>
                    <SignUpForm setUser={setUser} />
                    <p className="login-box-switch text-center">
                      Already have an account? &nbsp;
                      <button className="login-button-switch signout-button" onClick={() => setShowLogin(true)}>
                        Log In
                      </button>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
