import React, { useState } from "react";
import searchLogo from "../../assets/images/search.svg";
import locationLogo from "../../assets/images/map-pin.svg";
import background from "../../assets/images/background.jpg";

function Search({ handleSubmit }) {
  const [searchCity, setsearchCity] = useState("");

  function handleChange(event) {
    setsearchCity(event.target.value);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event,searchCity)} className="search--bar">
      <div>
        <img src={locationLogo} alt="location logo" />
        <input
          id="input--city"
          type="text"
          placeholder="Type a city name"
          name="city"
          onChange={handleChange}
          value={searchCity}
        />
      </div>
      <button className="search--btn">
        <img src={searchLogo} alt="" />
      </button>
    </form>
  );
}

export default Search;
