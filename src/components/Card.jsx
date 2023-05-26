/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Card, CardActionArea } from "@mui/material";

const Cards = (recipe) => {
  return (
    <Card className="hover:scale-105 duration-200 shadow-lg hover:shadow-xl transition-all border border-zinc-300">
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
    </Card>
  );
};

export default Cards;
