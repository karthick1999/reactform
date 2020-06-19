import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <div class="form-group">
    <h1> Login form </h1>
        <form> 
        <label >User name  :</label>
    
            <input type="text" placeholder="Enter name" name="username"   class="form-control"  id="name"></input> 
            <br></br>
        <label> Password :</label>
            <input type="password" placeholder="password" name="password"  class="form-control mb-3" id="password"></input>  
            <br></br>
            <button type="submit" class="btn btn-primary" onClick="val()"> submit</button>
        </form> 
 </div> 
 function val() { 
   var a=document.getElementById("name").value; 
   alert(a);  
 }
  );
}

export default App;
