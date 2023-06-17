import { NavLink } from 'react-router-dom';
const homeImg =
  'https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="selected">
        <img src={homeImg} alt="" />
      </NavLink>
    </nav>
  );
};

export default Navbar;
