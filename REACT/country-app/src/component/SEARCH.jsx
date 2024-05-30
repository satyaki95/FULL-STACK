import React, { useEffect, useState } from "react";

const SEARCH = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
    
  }
  useEffect(() => {
    props.onSearch(searchText);
  },[searchText]);
  return (
    <div>
      <input type="text" placeholder="Search Country" 
      value={searchText}
      onChange={handleChange} />
    </div>
  );
};

export default SEARCH;
