import React from "react";

const SearchBar = (props) => {
  return (
    <div className="form-group">
      <form className="ui form" onSubmit={(e) => props.onSubmit(e)}>
        <div className="input-group-prepend">
          <input
            className="prompt"
            type="text"
            placeholder="City/Station Name"
          />
          <button className="btn btn-primary" type="submit">
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
