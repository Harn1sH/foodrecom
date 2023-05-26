/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Button, TextField } from "@mui/material";

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
    <div className="text-4xl font-semibold  text-black h-screen w-screen overflow-x-hidden">
      <div className="justify-center w-full flex  items-center  space-x-4 ">
        <div className="w-full flex justify-center gap-x-3 shadow-xl items-center ">
          <TextField
            label="Ingredients"
            className="w-96 my-4"
            variant="outlined"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <Button
            variant="contained"
            disableElevation
            className="font-mono"
            onClick={() => {
              setQuery(search);
            }}
          >
            search
          </Button>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center font-normal text-base mt-7 mb-6">
        <div className="grid grid-cols-4 gap-x-4 gap-y-4">
          {recipes.map((recipe) => {
            return (
              // <div
              //   key={recipe.recipe.label}
              //   className="h-full w-full shadow-lg m-5"
              // >
              //   <img src={recipe.recipe.image} alt="" />
              //   {recipe.recipe.label}
              // </div>
              <Card key={recipe.recipe.label} recipe={recipe.recipe} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comp1;
