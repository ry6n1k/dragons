import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dragon, setDragon] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f")
      .then((response) => response.json())
      .then((data) => {
        setDragon(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div className="App">
      <div>
        <div className="card" key={dragon.id}>
          <h2>{dragon.name}</h2>
          <img src={dragon.flickr_images} />
          <p>{dragon.description}</p>
          <p>year: {dragon.first_flight}</p>
          <p>massa: {dragon.dry_mass_kg}</p>
          <a href={dragon.wikipedia}>wikipedia</a>
        </div>
      </div>
    </div>
  );
}

export default App;
