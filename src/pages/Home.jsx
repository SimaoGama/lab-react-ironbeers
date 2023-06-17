import { Link } from 'react-router-dom';

import beersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import addBeerImg from '../assets/new-beer.png';

const Home = () => {
  return (
    <div>
      <Link to="/beers">
        <div>
          <h1>All Beers</h1>
          <img src={beersImg} alt="" />
        </div>
      </Link>

      <Link to="/random-beer">
        <div>
          <h1>Random Beer</h1>
          <img src={randomBeerImg} alt="" />
        </div>
      </Link>

      <Link to="/new-beer">
        <div>
          <h1>Add new Beer</h1>
          <img src={addBeerImg} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Home;
