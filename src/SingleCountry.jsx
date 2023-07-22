import React from "react";

const SingleCountry = ({ country }) => {
  let { flags, name, capital, population } = country;
  return (
    <div className="yes">
      <div className=" no">
        <div className="items">
          <div className="country">
            <img src={flags.png} alt="" />
            <h2>Name :{name.common}</h2>
            <h3>Capital :{capital}</h3>
            <h4>Population :{population} </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
