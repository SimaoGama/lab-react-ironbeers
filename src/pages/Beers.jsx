import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Beers = () => {
  const [query, setQuery] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);

  const { data: beers, isLoading } = useFetch(
    "https://ih-beers-api2.herokuapp.com/beers"
  );

  useEffect(() => {
    if (beers) {
      const search = beers.filter((beer) => {
        return beer.name.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredBeers(search);
    }
  }, [beers, query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container">
      <Navbar />
      {isLoading && <Spinner />}
      <br />
      <input onChange={handleSearch} type="text" placeholder="Search beer..." />

      <br />
      <h1>All Beers</h1>
      {filteredBeers.length > 0 ? (
        filteredBeers.map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} height={"250px"} alt="" />
              <h1> {beer.name} </h1>
            </Link>
            <p>
              <i>{beer.tagline} </i>
            </p>
            <p>
              <strong>Created by: </strong>
              {beer.contributed_by}
            </p>
            <br />
            <hr />
            <br />
          </div>
        ))
      ) : (
        <p>No beers found.</p>
      )}
    </div>
  );
};

export default Beers;
