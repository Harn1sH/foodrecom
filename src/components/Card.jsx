/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Detailed from "./Detailed";
import { Link } from "react-router-dom";
import { Card, CardActionArea } from "@mui/material";

const Cards = (recipe) => {
  return (
    <Card className="hover:scale-105 duration-200 ease-out shadow-lg hover:shadow-xl transition-all border border-zinc-300">
      <a href={recipe.recipe.url} rel="noreferrer" target="_blank">
        <CardActionArea className=" ">
          <div>
            <div className="w-full h-full">
              <div className="flex justify-center items-center">
                <img src={recipe.recipe.image} className="hover:scale-100" />
              </div>
              <span className="font-semibold font-mono ml-1">
                {recipe.recipe.label}
              </span>
            </div>
          </div>
        </CardActionArea>
      </a>
    </Card>
  );
};

export default Cards;
