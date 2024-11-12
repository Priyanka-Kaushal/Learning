import React from "react";
import { robots } from "../roboApp/robots";
import CardList from "../roboApp/Cardlist";
import Search from "../roboApp/searchBoxComponent";



function Dashboard (){  
  return (
    <div className="tc">
    <h1> Robo freinds website</h1>
    <Search />
    <CardList robots = {robots}/>
    </div>
  );

}

export default Dashboard; 