import React, { useEffect, useState } from "react";
import axios from "axios";

const GitRepo = ({ username }) => {
 
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchGitRepo = async () => {
      try {
        const client_id = process.env.clientId ;
        const client_secret = process.env.clientSecretId;
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?client_id=${client_id}&client_secret=${client_secret}&sort=created`
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error Getting repositories:", error);
      }
    };

    if (username) {
      fetchGitRepo();
    }
  }, [ username ]);

  if (repos.length === 0) {
    return <div>No repositories found!</div>;
  }

  return (
    <div>
      <h2>User Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitRepo;
