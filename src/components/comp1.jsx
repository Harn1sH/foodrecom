/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Comp1 = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getResponse();
  }, [query]);

  const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ea07a3ce0dmsh91aa7114a8b5b68p10e36djsn03fa0e7ff797",
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    },
  };

  const getResponse = async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    setRecipes(result.hits);
    console.log(result.hits);
  };

  return (
    <div className="text-4xl font-semibold  text-black h-screen w-screen">
      <div className="justify-center w-full flex  items-center mt-7 space-x-4 ">
        <input
          type="text"
          name="se"
          id="se"
          className="border-2 border-black px-2 py-1"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg items-center text-xl px-2 font-normal"
          onClick={() => {
            setQuery(search);
          }}
        >
          search
        </button>
      </div>
      <div className=" w-full flex justify-center items-center font-normal text-base">
        <div className="grid grid-cols-4 space-x-4 mt-10  mx-4 space-y-6">
          {recipes.map((recipe) => {
            return (
              <div
                key={recipe.recipe.label}
                className="h-full w-full shadow-lg m-5"
              >
                <img src={recipe.recipe.image} alt="" />
                {recipe.recipe.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comp1;
