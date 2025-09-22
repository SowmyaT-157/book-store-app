import './login.css'
export const Login = () => {
   return(
    <div className='login-page'>
        <form>
            <h3>Login Here</h3>
            <label>Username:</label>
            <input type="text" placeholder="Email or phone" id="username"/>
            
            <label>Password:</label>
            <input type="password" placeholder="password" id="password" />
            <button className='button-position'>Login</button>
            <div className='new-account'>
               <p>Create new account</p>
               <button>Register</button>
            </div>
            
        </form>
    </div>
   )
}
export default Login;