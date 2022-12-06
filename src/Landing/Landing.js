import "./Landing.css"; // Importing our CSS
import {useState, useEffect, useContext} from 'react';
import { HobbyContext } from "../App"; // Importing the Context we created in the Parent


const Landing = () => {
	
	const {hobbies, setHobbies} = useContext(HobbyContext);
	
  return (
    <>
	  <h1>Benjamin Fell</h1>
	  <a>
	  	<img src="https://funginstitute.berkeley.edu/wp-content/uploads/2022/07/BenjaminFell-300x300.jpg" alt="That's me"/>
	  </a>
	  <br />
	  <div>
		<h3><i className="material-icons">person</i> Experience</h3>
		<p>Benjamin is a second-year student at the School of Information pursuing a <span style={{fontWeight:'bold'}}>Master of Information Management and Systems</span>, following the Data Science track. Before joining Berkeley, he worked as an eCommerce Manager at an airline based in South America. He has a bachelor’s in <span style={{fontWeight:'bold'}}>Industrial Engineering and Computer Science</span> from the Pontifical Catholic University of Chile.</p>	
	  </div>
<div>
	<h3><i className="material-icons">computer</i> Hobbies</h3>
	<p>Outside of work, Benjamin enjoys the following activities:</p>
	<ul>
	  {hobbies.map((hobby) => {
		        return (
		          <li><i className="material-icons">{hobby.icon}</i>{hobby.name} </li>
		        );
	  })}
	</ul>
</div>
<br />
<div>
  	<a href="https://www.linkedin.com/in/benjaminfell/">LinkedIn</a>
</div>
<div>
	<br />
	<p>If you want to leave a message for Benjamin, please complete the following form:</p>
	<br />
	<form name="messageForm" id="messageForm">
    	<label htmlFor="fname">Name</label>
    	<input type="text" name="name" id="name"/>
		<br/>
		<br/>
      	<input type="radio" id="feedback" name="messageType" value="feedback" />
     	<label htmlFor="fname">Feedback</label><br />
      	<input type="radio" id="request" name="messageType" value="request" />
      	<label htmlFor="undergrad">Request</label><br />
      	<input type="radio" id="question" name="messageType" value="question" />
      	<label htmlFor="grad">Question</label><br /><br />
		<label htmlFor="message">Message</label><br />
    	<textarea id="message" name="message" rows="4" cols="50" id="message"></textarea>
		<br />
		<br />
		<div id="loadingGif" style={{display:'none'}}>
			<img src="loading.gif" height="20" width="20" />
		</div>
          <input id="submit" type="submit" value="Submit"/> 	    
	</form>
</div>
  	<script src="lab4.js"></script>
    </>
  );
};

export default Landing;