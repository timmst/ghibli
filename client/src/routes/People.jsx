import { useState, useEffect } from "react";

const People = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPeople(result);
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
        {people.map((person) => (
          <li key={person.id}>
            {person.name} {person.age}
          </li>
        ))}
      </ul>
    );
  }
};

export default People;
