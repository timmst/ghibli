import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useFetch } from "../utils/useFetch";

const People = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setPeople] = useState([]);
  const { data, err, loading } = useFetch(
    "https://ghibliapi.herokuapp.com/films"
  );

  // console.log({ data, err, loading });
  //https://ghibliapi.herokuapp.com/films
  // const films = data.filter(film => film === people.)

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
      <React.Fragment>
        <Grid container spacing={2}>
          {people.map((person) => (
            <Grid item key={person.id} xs={8} sm={6} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {person.original_title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {person.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {person.gender} Species {person.species}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} variant="body2">
                    Appears in {person.films}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.eye_color} {"eyes"} {"•"} {person.hair_color} hair
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
};

export default People;
