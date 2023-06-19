import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const AddNewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contribution, setContribution] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contribution,
    };

    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleTagline = (e) => {
    setTagline(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleFirstBrewed = (e) => {
    setFirstBrewed(e.target.value);
  };
  const handleBrewersTips = (e) => {
    setBrewersTips(e.target.value);
  };
  const handleAttenuationLevel = (e) => {
    setAttenuationLevel(e.target.value);
  };
  const handleContribution = (e) => {
    setContribution(e.target.value);
  };

  return (
    <>
      <Navbar />
      <h1>Add Beer</h1>
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={handleSubmit}>
            <div className="container form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tagline">Tagline:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tagline"
                  value={tagline}
                  onChange={handleTagline}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={handleDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstBrewed">First Brewed:</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstBrewed"
                  value={firstBrewed}
                  onChange={handleFirstBrewed}
                />
              </div>
              <div className="form-group">
                <label htmlFor="brewerTips">Brewer Tips:</label>
                <input
                  type="text"
                  className="form-control"
                  id="brewerTips"
                  value={brewersTips}
                  onChange={handleBrewersTips}
                />
              </div>
              <div className="form-group">
                <label htmlFor="attenuationLevel">Attenuation Level:</label>
                <input
                  type="number"
                  className="form-control"
                  id="attenuationLevel"
                  value={attenuationLevel}
                  onChange={handleAttenuationLevel}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contribution">Contribution:</label>
                <input
                  type="text"
                  className="form-control"
                  id="contribution"
                  value={contribution}
                  onChange={handleContribution}
                />
              </div>
              <br />
              <hr />
              <button type="submit" className="btn btn-primary">
                Add new
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewBeer;
