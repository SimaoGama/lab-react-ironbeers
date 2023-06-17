import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import useFetch from "../pages/useFetch";

const Beer = () => {
  const { beerId } = useParams();

  const {
    data: beer,
    isLoading,
    error,
  } = useFetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);

  return (
    <div>
      <Navbar />
      {isLoading && <Spinner />}
      {beer && (
        <>
          <div className="container">
            <img src={beer.image_url} height={"300px"} alt="" />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>ABV: {beer.abv}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Contributed by: {beer.contributed_by}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Beer;
