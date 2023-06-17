import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Spinner from './Spinner';

const Beer = () => {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const selectBeer = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeer(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    selectBeer();
  }, [beerId]);

  return (
    <div>
      <Navbar />
      {isLoading && <Spinner />}
      {beer && (
        <>
          <img src={beer.image_url} height={'300px'} alt="" />
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
          <p>{beer.description}</p>
          <p>ABV: {beer.abv}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </>
      )}
    </div>
  );
};

export default Beer;
