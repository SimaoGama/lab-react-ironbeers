import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import useFetch from "./useFetch";

const RandomBeer = () => {
  const {
    data: beer,
    isLoading,
    error,
    reFetch,
  } = useFetch("https://ih-beers-api2.herokuapp.com/beers/random");

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
            <p>First brewed: {beer.first_brewed}</p>
            <p>Description: {beer.description}</p>
            <p>by: {beer.contributed_by}</p>
          </div>
          <button className="btn btn-primary" onClick={reFetch}>
            Random Beer
          </button>
        </>
      )}
    </div>
  );
};

export default RandomBeer;
