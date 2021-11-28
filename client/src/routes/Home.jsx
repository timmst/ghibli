import { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFilms(result);
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
      <Grid container spacing={2}>
        {films.map((film) => (
          <Grid item key={film.id} xs={8} sm={6} md={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {film.original_title}
                </Typography>
                <Typography variant="h5" component="div">
                  {film.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {film.release_date} Directed by {film.director}
                </Typography>
                <Typography variant="body2">{film.description}</Typography>
                <Typography variant="body2">
                  {film.running_time} {"mins"} {film.rt_score} Rotten Tomatoes
                  Score
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default Home;
