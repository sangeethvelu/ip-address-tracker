import React from "react";
import Search from "./components/Search";
import ResultCard from "./components/ResultCard";

function App() {
  const [data, setData] = React.useState({});

  function collectData(data) {
    setData(data);
  }

  return (
    <div className="main-container">
      <Search gatherData={collectData} />
      <ResultCard
        ip={data.ip}
        location={`${data.city}, ${data.country_name}`}
        timezone={data.utc_offset}
        isp={data.org}
        latitude={data.latitude}
        longitude={data.longitude}
      />
    </div>
  );
}

export default App;
