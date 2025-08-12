import React from 'react'
import "./Login.scss"
const Login = () => {
  return (
    <>
     <div className="login-parent parent">
        <div className="login-container container">
          <form className="login-form">
            <h2>LOGIN</h2>
            <input
              type="text"
              placeholder="Username"
            //   value="username"
              
            />
            <input
              type="password"
              placeholder="Password"
            //   value="password"
             
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
