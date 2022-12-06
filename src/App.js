import React, { useState, useEffect, useContext, createContext } from "react";
import logo from './logo.svg';
import './App.css';
import Landing from "./Landing/Landing";

export const HobbyContext = createContext();

function App() {
	
	const [hobbies, setHobbies] = useState([
		{name : "Climbing", icon: "map"}
	]);

	useEffect(()=>{
		console.log("HOLA")
	    setHobbies([
  		  {name : "Climbing", icon: "map"},
 		  {name : "Hiking", icon: "hiking"},
  		  {name : "Traveling", icon: "backpack"}
	  	])
	}, [])
	
	return (
		<HobbyContext.Provider
        value={{hobbies,setHobbies}}> 
      	<Landing />
      	</HobbyContext.Provider> 	
  );
}

export default App;
