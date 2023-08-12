import React from "react";
import searchLogo from "../../assets/images/search.svg";
import locationLogo from "../../assets/images/map-pin.svg";
import background from "../../assets/images/background.jpg";

function Search() {
  console.log("searching");
  return (
    <form className="search--bar">
      <div>
        <img src={locationLogo} alt="location logo" />
        <input id="input--city" type="text" placeholder="Type a city name" name="city" />
      </div>
      <button className="search--btn">
        <img src={searchLogo} alt="" />
      </button>
    </form>
  );
}

export default Search;
