import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/dragons")
      .then((response) => response.json())
      .then((data) => {
        setDragons(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dragons SpaceX</h1>
      </header>
      <div>
        {dragons.map((dragon) => {
          return (
            <div className="post-card" key={dragon.id}>
              <h2 className="post-title">{dragon.name}</h2>
              <p className="post-body">{dragon.wikipedia}</p>
              <p className="post-body">{dragon.description}</p>
              <div>
                {dragon.flickr_images.map((dragonImage) => {
                  return <img src={dragonImage} alt="dragon image" />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
