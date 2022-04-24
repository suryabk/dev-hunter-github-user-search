import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faGlobe,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import illustrat from "../user-not-found.svg";

const Card = ({ data, result }) => {
  return (
    <div className={result ? "card" : "card-404"}>
      {result ? (
        <>
          <div className="img-container">
            <img src={data.avatar_url} alt="img profile" />
          </div>
          <div className="btn-github">
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <button type="text">
                <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
              </button>
            </a>
          </div>
          <div className="user-info">
            <div className="name">{data.name}</div>
            <div className="date">
              {` Joined ${new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })
                .format(new Date(data.created_at))
                .split(" ")
                .join(" ")}`}
            </div>
            <div className="username">@{data.username}</div>
            <div className={`bio ${data.bio === null ? "disable" : ""}`}>
              {data.bio && data.bio ? data.bio : "This profile has no bio"}
            </div>
          </div>
          <div className="stats">
            <div className="stats-group">
              <div className="stats-item">
                Repo <span>{data.repos}</span>
              </div>
            </div>
            <div className="stats-group">
              <div className="stats-item">
                Followers <span>{data.followers}</span>
              </div>
            </div>
            <div className="stats-group">
              <div className="stats-item">
                Following <span>{data.following}</span>
              </div>
            </div>
          </div>
          <div className="additional-info">
            <div
              className={`additional-info-item ${
                data.location == null ? "disable" : ""
              }`}
            >
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              {data.location && data.location !== null
                ? data.location
                : "Not Available"}
            </div>
            <div
              className={`additional-info-item ${
                data.twitter == null ? "disable" : ""
              }`}
            >
              <FontAwesomeIcon className="icon" icon={faTwitter} />
              <p>
                {data.twitter && data.twitter !== null ? (
                  <a
                    href={`https://twitter.com/${data.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.twitter}
                  </a>
                ) : (
                  "Not Available"
                )}
              </p>
            </div>
            <div
              className={`additional-info-item ${data.blog ? "" : "disable"}`}
            >
              <FontAwesomeIcon className="icon" icon={faGlobe} />
              <p>
                {data.blog && data.blog !== null ? (
                  <a href={data.blog} target="_blank" rel="noopener noreferrer">
                    {data.blog}
                  </a>
                ) : (
                  "Not Available"
                )}
              </p>
            </div>
            <div
              className={`additional-info-item ${
                data.company == null ? "disable" : ""
              }`}
            >
              <FontAwesomeIcon className="icon" icon={faBuilding} />
              <p>
                {data.company && data.company !== null
                  ? data.company
                  : "Not Available"}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <img src={illustrat} alt="" />
          <h1>
            Username <span>Not Found</span>
          </h1>
          <p>You may have mistyped or the username isn't available</p>
        </>
      )}
    </div>
  );
};

export default Card;
