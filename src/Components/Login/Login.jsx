import "./Login.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
    return (
        <div className="divLoginDiv">
            <div className="register">
                <h1>Register</h1><br/>
                <div className="inputFields">
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Username" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <Button variant="contained" style={{backgroundColor:"#12D7B9",color:"white"}}>Register</Button>
                </div>
            </div>
            <div className="login">
                <h1>Login</h1><br/>
                <div className="inputFields">
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <Button variant="contained" style={{backgroundColor:"#12D7B9",color:"white"}}>Log In</Button>
                    <span style={{fontSize:"20px",color:"grey"}}>- OR -</span>
                    <Button variant="contained" style={{backgroundColor:"#12D7B9",color:"white"}}><span><GoogleIcon/>&nbsp;&nbsp;</span>Sign in with Google</Button>
                </div>
            </div>
        </div>
    )
}