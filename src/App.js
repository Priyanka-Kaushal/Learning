import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";

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
