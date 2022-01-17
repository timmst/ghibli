import React from "react";
import { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
// import { useFetch } from "../utils/useFetch";

const Locations = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [locations, setLocations] = useState([]);

  // const movie = useFetch(props.row.films[0]);

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
      <React.Fragment>
        <Grid container spacing={2}>
          {locations.map((location) => (
            <Grid item key={location.id} xs={8} sm={6} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {location.original_title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {location.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {location.climate} climate
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} variant="body2">
                    Appears in {location.films}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {location.terrain} {"terrain"} {"•"}{" "}
                    {location.surface_water} surface water
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

export default Locations;
