import React from "react";
import "./Characters.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const result = await axios.get("https://rickandmortyapi.com/api/character");
    const data = await result.data.results;
    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="characters">
      {characters.map((value) => {
        return (
          <div key={value.id} className="list--characters">
            <img src={value.image} alt={value.name} />
            <div className="otherData">
                <h2> { value.name }  </h2>
                <p> { value.species} </p>
                <p> { value.gender } </p>
                <p>{ value.origin.name } </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
