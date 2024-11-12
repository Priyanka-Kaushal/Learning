
import '../styles/Design.css';
import * as React from 'react';
import { Box, TextField,Button, Typography, CardMedia } from '@mui/material';






/**
 * 
 * @returns m just checking button is working or not so i will redirect the another page
 */

function Handleclick(){
  return(
    console.log("Hi this is clicable button")
);
  
}

    function MatLogin(){

      const login = "Login";
      const title = 'Welcome';
      

      
      return(
      <form >
        <Box
        bgcolor= 'white'
        display={'flex'} 
        flexDirection={"column"}
        maxWidth= {400} 
        justifyContent={'center'}
        margin={'auto'}
        marginTop={5}
        padding={5}
        borderRadius={5}
        boxShadow = {"5px 5px 10px #CCCCCC"}
        sx = {{
          ":hover" : {boxShadow:"5px 5px 10px #002D62"}
        }}
        >

          <CardMedia 
          sx={{ height: 140, maxWidth: 140}}
          component="img"
          alt="ShonazLogo"
          image="./decipherZoneLogo.png"
          marginLeft = "auto"
          marginRight = 'auto'
          display = "block"

          />

        <Typography variant= {'h2'} padding={2} textAlign={'center'} paddingBottom={5}> {title} </Typography>


        <Typography variant= {'h5'} padding={2} > Sign In </Typography>

        <TextField 
        label={"Enter your EmailId"} 
        type='mail'
        variant="outlined" /> 

        <TextField 
        label={"Enter your Password"}
         type = "password"
         autoComplete="current-password"
         variant="outlined"
         margin = "normal"
         required />  

        <TextField  margin = "normal" label={"Enter your confirm Password"} 
        type='password'
        variant="outlined"
        required> /</TextField>    
        
        <Button sx={{marginTop :3, borderRadius:3}} className= "button-custome" variant="contained" size = 'large' onClick={Handleclick} fullWidth> {login} </Button>
        </Box>
      </form>
  );

    }
    


// const Handleclick = () => {
//   return (  
//    console.log("Hi this is clickable button")
//   );
// }

// function MatLogin() {

//   const title = 'Welcome';
//   const signIn = 'Sign In';
//   const user_aame = 'Please Enter your Email Id ';
//   const user_password = 'Please Enter your Password';
//   const login='Login';


//     return (

//     <div className = 'LoginMain'>

//   <img className='site-logo-image'src="https://shonaz.in/wp-content/uploads/2023/10/Shonaz-Logo-Dark.png" alt="Shonaz" />

//     <div className='sec-1'>
//       <header className="headerLogin"> {title} </header> 
//     </div>

//     <div className='sec-2'>
//      <h1 className='labdesign signIndesign'>{signIn}</h1>

     


//       {/* form creation though below the code */}


      
//       </form>

//      <form className ='mainSec' action="/action_page.php">
//        <label className ='inputLabel labdesign'> { user_aame }</label>
//        <input className="username labdesign" type = "email"  placeholder="Enter Your Email Id" required/> 

//        <label className ='inputLabel labdesign'> {user_password} </label>
//        <input className="password labdesign" type = "password" placeholder="Enter Your Password" pattern="" maxLength="8" title="In this password should be include one number, one uppercase, lowercase letter and one especial letter, and at least 8 charaecters" required /> 
//        <br />
//        <Button className= "button-custome" variant="contained" size = 'large' onClick={Handleclick} fullWidth> {login} </Button>
//      </form>
//     </div>
     
//     {/* <ForgetPassword /> */}
         
//     </div>


// );

// }



export default MatLogin;





/////////////////
import React, { useState } from 'react';  

const LoginForm = () => {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  

  const validateEmail = (email) => {  
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return regex.test(email);  
  };  

  const validatePassword = (password) => {  
    return password.length >= 6; // Example validation for minimum length  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (!validateEmail(email)) {  
      setError('Invalid email format');  
      return;  
    }  
    if (!validatePassword(password)) {  
      setError('Password must be at least 6 characters');  
      return;  
    }  
    // Proceed with login or other actions  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <input   
        type="email"   
        value={email}   
        onChange={(e) => setEmail(e.target.value)}   
        placeholder="Email"   
      />  
      <input   
        type="password"   
        value={password}   
        onChange={(e) => setPassword(e.target.value)}   
        placeholder="Password"   
      />  
      <button type="submit">Login</button>  
      {error && <p>{error}</p>}  
    </form>  
  );  
};  

export default LoginForm;