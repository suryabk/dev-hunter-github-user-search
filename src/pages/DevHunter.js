import React, { useState } from "react";
import Card from "../components/Card";
import Form from "../components/Form";

function DevHunter() {
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState(true);

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
          setSearchResult(true);
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
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            created_at: data.created_at,
            updated_at: data.updated_at,
          });
        } else {
          setSearchResult(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="container">
      <nav className="logo">devHunter</nav>
      <Form
        value={userInput}
        keyword={(e) => setUserInput(e.target.value)}
        searchBtn={(e) => handleSubmit(e)}
      />
      <Card data={searchUser} result={searchResult} />
    </div>
  );
}

export default DevHunter;
