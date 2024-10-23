
// email id and paasword is blank
import { useState } from "react";



function validateUseremail(email){

    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailpattern.test(email);

};

function checkEmail(e){
    const [email, setEmail]  = userState({email: ""});
    const [errors, setErrors] = userState({});

    return (
                if(){
                    alert("Email is valid!");
                } 
                else {
                    alert ("Please enter a valid email address.");
                }

}


export default checkEmail;

//Regular expression used for email id validation


// function ValidateUserinfo(userEmail){

//     const emailIdMatch= 

//     return emailIdMatch.test(email);
// };
//     //  we define the userstate for the email id and password

//     function signUp(){
//         

//         const [password, setpassword ] = userState({password: "" });
//         const [passwordError, setErrorpassword] = userState({});


//     }
    

   

    
   
//     
     
//     );
// }


// export default ValidateUserinfo;

// // email id have not added@

