import React, { useState } from "react";

const SearchForm = (props) => {
  return (
    <>
      <label htmlFor="search">Search by task</label>
      <input
        type="text"
        name="search"
        value={props.inputValue}
        onChange={props.itemFilterOnChange}
      />
    </>
  );
};

export default SearchForm;
