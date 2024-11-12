import React from "react";
import Search from "../roboApp/searchBoxComponent";
import 'tachyons';




function Dashboard (){  
  return (
    <div className="tc white">
    <h1> Robo freinds website</h1>
    <Search />
    {/* <CardList robots = {robots}/> */}
    </div>
  );

}

export default Dashboard; 