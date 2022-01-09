import {
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Person from "../components/Person";

const People = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setPeople] = useState([]);
  const [peopleCopy, setPeopleCopy] = useState([]);
  const [films, setFilms] = useState([]);
  const [filmsCopy, setFilmsCopy] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [rowData, setRowData] = useState({});
  // const { data, err, loading } = useFetch(
  //   "https://ghibliapi.herokuapp.com/films"
  // );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    {
      id: "name",
      label: "Name",
      minWidth: 170,
      options: {
        filterList: [],
      },
    },
    {
      id: "age",
      label: "Age",
      minWidth: 50,
      align: "right",
      options: {
        filterList: [],
      },
    },
    {
      id: "gender",
      label: "Gender",
      minWidth: 170,
      align: "right",
      options: {
        filterList: [],
      },
    },
    {
      id: "hair_color",
      label: "Hair color",
      minWidth: 170,
      align: "right",
      options: {
        filterList: [],
      },
    },
    {
      id: "eye_color",
      label: "Eye color",
      minWidth: 170,
      align: "right",
      options: {
        filterList: [],
      },
    },
  ];

  const onMouseOver = (event) => {
    const el = event.target;
    el.style.color = "#1CAB73";
  };

  const onMouseOut = (event) => {
    const el = event.target;
    el.style.color = "#000000";
  };

  const clickable = (cell) => {
    if (cell) {
      const person = people.find((person) => person.name === cell);
      if (person) {
        console.log("A name was clicked!", person);
      } else {
        console.log("Another cell was clicked");
      }
    }
  };

  const [cols, setCols] = useState(columns);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const options = {
    filter: false,
  };

  const onFilter = ({ target: { value } }) => {
    setSelectedFilter(value);
    const filteredCols = [...cols];
    let filterList = [];
    if (value !== "All") {
      filterList = [value];
    }
    // Target the column to filter on.
    filteredCols[0].options.filterList = filterList;
    setCols(filteredCols);

    if (value === "All") {
      setPeople(peopleCopy);
    } else {
      const filmId = filmsCopy.filter((film) => film.title === filterList[0])[0]
        .id;

      async function fetchPeopleOfFilm(filmId) {
        try {
          let response = await fetch(
            `https://ghibliapi.herokuapp.com/films/${filmId}`
          );
          let film = await response.json();
          const peopleUrls = film.people;
          // return people with corresponding urls
          const peopleObjs = peopleCopy.filter((el) =>
            peopleUrls.includes(el.url)
          );
          // const thePeople = peopleObjs.map((person) => person.name);
          // return thePeople;
          return peopleObjs;
        } catch (error) {
          console.error(error);
        }
      }

      // get people objects for selected film and update state
      async function getPeople() {
        const filteredPeople = await fetchPeopleOfFilm(filmId);
        setPeople(filteredPeople);
      }
      getPeople();
    }
  };

  useEffect(() => {
    Promise.all([
      fetch("https://ghibliapi.herokuapp.com/people"),
      fetch("https://ghibliapi.herokuapp.com/films"),
    ])
      .then(async ([peopleResponse, filmsResponse]) => {
        const resolvedPeople = await peopleResponse.json(); // await response object from resolved request
        const resolvedFilms = await filmsResponse.json(); // .jsoon() is async and returns a promise with a resolved body content
        setFilms(resolvedFilms);
        setFilmsCopy(resolvedFilms);
        setPeople(resolvedPeople);
        setPeopleCopy(resolvedPeople);
        return [resolvedPeople, resolvedFilms];
      })
      .then((responseText) => {
        setIsLoaded(true);
        console.log("responsetext", responseText);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(error);
        console.error(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        {openModal && (
          <Person
            row={rowData}
            modalState={openModal}
            closeModal={setOpenModal}
          />
        )}

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Toolbar sx={{ alignContent: "left" }}>
            <Select onChange={onFilter} value={selectedFilter}>
              <MenuItem value="All">All</MenuItem>
              {filmsCopy.map((x) => (
                <MenuItem key={x.title} value={x.title}>
                  {x.title}
                </MenuItem>
              ))}
            </Select>
          </Toolbar>
          <TableContainer sx={{ height: "100%" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        fontSize: "12pt",
                        fontFamily: "Rubik",
                      }}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {people
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        onClick={(event) => {
                          setRowData(row);
                          setOpenModal(true);
                          // only open modal if state was set to true
                          openModal && (
                            <Person
                              rowData={rowData}
                              modalState={openModal}
                              closeModal={setOpenModal}
                            />
                          );
                        }}
                      >
                        {/* {openModal && <Person closeModal={setOpenModal} />} */}

                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              onMouseEnter={(event) => onMouseOver(event)}
                              onMouseOut={(event) => onMouseOut(event)}
                              onClick={(column) =>
                                clickable(column.target.innerText)
                              }
                              key={column.id}
                              align={column.align}
                              sx={{
                                fontSize: "12pt",
                                fontFamily: "Rubik",
                                cursor: "pointer",
                              }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={people.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </React.Fragment>
    );
  }
};

export default People;
