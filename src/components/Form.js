import React from "react";
import Button from "./Button";

const Form = (props) => {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Enter Github username . . ."
        name="search"
        value={props.value}
        onChange={props.keyword}
      />
      <Button type="submit" name="search" onClick={props.searchBtn}>
        Search
      </Button>
    </form>
  );
};

export default Form;
