import { useState, useEffect } from "react";

const Vehicles = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setVehicles(result);
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
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.name} {vehicle.age}
          </li>
        ))}
      </ul>
    );
  }
};

export default Vehicles;
