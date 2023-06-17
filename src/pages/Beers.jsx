import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Beers = () => {
  // const [beers, setBeers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchBeers = async () => {
  //     const response = await axios.get(
  //       'https://ih-beers-api2.herokuapp.com/beers'
  //     );

  //     setBeers(response.data);
  //     setIsLoading(false);

  //     try {
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchBeers();
  // }, []);

  const { data: beers, isLoading } = useFetch(
    "https://ih-beers-api2.herokuapp.com/beers"
  );

  return (
    <div className="container">
      <Navbar />
      {isLoading && <Spinner />}
      <h1>All Beers</h1>
      {beers &&
        beers.map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} height={"250px"} alt="" />
              <h1> {beer.name} </h1>
            </Link>
            <p>
              <i>{beer.tagline} </i>
            </p>
            <p>
              {" "}
              <strong>Created by: </strong>
              {beer.contributed_by}{" "}
            </p>
            <br />
            <hr />
            <br />
          </div>
        ))}
    </div>
  );
};

export default Beers;
