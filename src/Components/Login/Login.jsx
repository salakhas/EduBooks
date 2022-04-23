import "./Login.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";


// Firebase
import { app } from './../../firebase.config';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';




//

export const Login = () => {
    //
    const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();

   
  const provider = new GoogleAuthProvider();

  const addData = () => {
    signInWithPopup(auth, provider)
    
    //signInWithEmailAndPassword(auth, data.email, data.password)
  }
  const signout =()=>{
    auth.signOut()
    alert("singout")
    // navigate("/dd")
    
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user){
        console.log(user.displayName)
        auth.signOut()
        navigate("/");}
  
  }, [user, loading]);


  //
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
                    <Button onClick = {addData} variant="contained" style={{backgroundColor:"#12D7B9",color:"white"}}><span><GoogleIcon/>&nbsp;&nbsp;</span>Sign in with Google</Button>
                    <Button onClick = {signout} variant="contained" style={{backgroundColor:"#12D7B9",color:"white"}}><span><GoogleIcon/>&nbsp;&nbsp;</span>Sign out</Button>
                </div>
            </div>
        </div>
    )
}