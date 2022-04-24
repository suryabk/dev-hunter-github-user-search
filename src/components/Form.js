import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Form = (props) => {
  return (
    <form className="search">
      <FontAwesomeIcon className="icon" icon={faSearch} />
      <input
        type="text"
        placeholder="Enter GitHub username . . ."
        name="search"
        value={props.value}
        onChange={props.keyword}
        autoComplete="off"
      />
      <Button type="submit" name="search" onClick={props.searchBtn}>
        Search
      </Button>
    </form>
  );
};

export default Form;
