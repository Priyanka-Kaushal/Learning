
import './App.css';
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";

// import CardList from "./roboApp/Cardlist";
// import {robots} from './roboApp/robots';
// import Search from "./roboApp/searchBoxComponent";
// import React, {useState} from "react";
// import MainPageItems from "./practices/mainPageForProducts.js"
// import StateUse from "./hooks/useStatePractice";




// import MatLogin from "./components/MatLogin";
// import MainFunction from "./practices/mainFunction";

function App(){
    return (
           <BrowserRouter>
             <Routes >
               <Route exact index path="/" element={<Login />}/>   
               <Route exact path="/dashboard" element={<Protected><Dashboard /></Protected>}/>  
                </Routes>
           </BrowserRouter>
        // <Login/>
        // <MatLogin/>
        // <MainFunction />
        // <MainPageItems />

        // <StateUse />
        

    );
}

// -----------------------------------------------

// function App (){  
//   return (
//     <div className="tc">
//     <h1> Robo freinds website</h1>
//     <Search  />
//     {/* <CardList robots = {robots}/> */}
//     </div>
//   );

// }

export default App; 
// ------------------------------------------------------