import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const btnList = [
    "All",
    "Music",
    "Javascript",
    "Comedy",
    "Bollywood",
    "Live",
    "News",
    "Cooking",
    "Sports",
    "Movies",
    "Hollywood",
    "Rubix",
    "Cubastic_rahul",
  ];

  return (
    <div className="flex overflow-x-auto ">
      {btnList.map((btnName) => {
        return ( 
            <Buttons name={btnName} key={btnName} /> 
        );
      })} 
    </div>
  );
};

export default ButtonList;
