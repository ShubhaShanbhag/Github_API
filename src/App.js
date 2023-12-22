import React, { useState } from "react";
import GitAccount from "./components/GitAccount";
import GitRepo from "./components/GitRepo";
import "./index.css"
function App() {
  const [username, setUsername] = useState("ShubhaShanbhag");
 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
   const handleSubmit = (e) => {
     e.preventDefault();
   };

  return (
    <div className="container">
      <h1>Github User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter GitHub Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        
        <button type="submit">submit</button>
      </form>
      <GitAccount username={username} />
      <GitRepo username={username}/>
    </div>
  );
}

export default App;