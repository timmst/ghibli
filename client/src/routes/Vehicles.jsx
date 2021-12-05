import React from "react";
import { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

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
      <React.Fragment>
        <Grid container spacing={2}>
          {vehicles.map((vehicle) => (
            <Grid item key={vehicle.id} xs={8} sm={6} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {vehicle.vehicle_class}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {vehicle.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {vehicle.pilot} Pilot
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} variant="body2">
                    {vehicle.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {vehicle.length} {"length"}
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

export default Vehicles;
