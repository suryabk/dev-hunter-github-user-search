import React, { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";

function DevFinder() {
  const [userInput, setUserInput] = useState("");

  const [searchUser, setSearchUser] = useState({
    name: "The Octocat",
    username: "octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    github: "https://github.com/octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    bio: null,
    twitter: null,
    repos: 8,
    followers: 5624,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
    updated_at: "2022-03-22T14:07:15Z",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput !== "") {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userInput}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setSearchUser({
            name: data.name,
            username: data.login,
            avatar_url: data.avatar_url,
            github: data.html_url,
            company: data.company,
            blog: data.blog,
            location: data.location,
            bio: data.bio,
            twitter: data.twitter_username,
            repo: data.public_repos,
            followers: data.followers,
            following: data.following,
            created_at: data.created_at,
            updated_at: data.updated_at,
          });
        }
      } catch (error) {
        console.log("User Not Found");
      }
    }
  };
  return (
    <div className="container">
      <Form
        value={userInput}
        keyword={(e) => setUserInput(e.target.value)}
        searchBtn={(e) => handleSubmit(e)}
      />
      <div className="card">
        <img src={searchUser.avatar_url} alt="" />
        <h1>{searchUser.name}</h1>
      </div>
    </div>
  );
}

export default DevFinder;
