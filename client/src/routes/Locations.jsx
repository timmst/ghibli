import { useState, useEffect } from "react";

const Locations = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLocations(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            {location.name} {location.terrain}
          </li>
        ))}
      </ul>
    );
  }
};

export default Locations;
