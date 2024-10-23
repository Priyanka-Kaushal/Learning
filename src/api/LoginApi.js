import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function Login (){
 
  const [userdata, setdata] = useState([]);

  useEffect(()=> {
      // baseURL: 'http://localhost:3000/
      axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
          // handle success
          console.log(response);
          setdata(response.data);
        })
        // .catch(error => {  
        //   console.error('There was an error fetching the data!', error);  
        // });
  }, [] );


  return (  
    <div>
       {userdata.map((post) => (
          <p key={post.id}>{post.title} </p>
    ))}
    </div> 
);

};

  
    export default Login;
    


