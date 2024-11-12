import React, {useState} from "react";
import { robots} from "./robots";
import CardList from "./Cardlist";


const Search = () => {
    const [searchInput, setSearchInput] = useState("");

    const onSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Filter robots based on search input in either name or email
    const filteredRobots = robots.filter(robot =>
        robot.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    
    return (
        <div className="tc pa2 ">
            <input
                className="ba b--green bg-lightest-grey pa3"
                type="search"
                placeholder="Search robots by Name"
                value={searchInput}
                onChange={onSearchChange}
            />

           <CardList robots = {filteredRobots}/>
            {/* <div>
                {filteredRobots.map(robot => (
                    <div key={robot.id} className="pa3 ma2 ba b--light-silver">
                        <h2>{robot.name}</h2>
                        <p>{robot.email}</p>
                    </div>
                ))}
            </div> */}
        </div>
        
    );
};

export default Search;


// const Search = () => {
//     const [searchInput, setSearchInput] = useState(" ");

//     const onSearchChange = (event) => {
//         setSearchInput(event.target.value);
//         console.log(event);
//       }

//     return (
//         <div className="tc pa2">
//          <input className= "ba b--green bg-ligtest-blue pa3 " 
//          type="search"  
//          placeholder = "search robots" 
//          value={searchInput}
//         onChange = {onSearchChange}
        
//         />
//         </div>
//     );
// }

// export default Search;




