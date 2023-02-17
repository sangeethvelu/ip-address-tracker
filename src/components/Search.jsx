import React from "react";

function Search(props) {
  const [inputData, setInputData] = React.useState("");
  const [isSearch, setIsSearch] = React.useState(false);

  React.useEffect(() => {
    fetch(`https://ipapi.co/${inputData}/json/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInputData("");
        props.gatherData(data);
      });
  }, [isSearch]);

  function handleChange(event) {
    setInputData(event.target.value);
  }

  function handleSubmit() {
    setIsSearch((prevdata) => !prevdata);
  }

  return (
    <div className="container header-container">
      <h1 className="header-title">IP Address Tracker</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="input-search"
          value={inputData}
          onChange={handleChange}
        />
        <button className="btn-search" onClick={handleSubmit}>
          <img
            src="/images/icons8-search.svg"
            alt="Search Icon"
            className="search-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Search;
