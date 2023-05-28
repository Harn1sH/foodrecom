/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detailed = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div>
      <span>{id}</span>
    </div>
  );
};

export default Detailed;
