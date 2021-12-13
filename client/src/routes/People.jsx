import {
  IconButton,
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
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import React, { useEffect, useState } from "react";
// import { useFetch } from "../utils/useFetch";

const People = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setPeople] = useState([]);
  const [peopleCopy, setPeopleCopy] = useState([]);
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
      console.log("person", person);
      if (person) {
        console.log("A name was clicked!", person.species);
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
    console.log("filteredCols", filteredCols);
    // Target the column to filter on.
    filteredCols[0].options.filterList = filterList;
    console.log("filterList", filterList);
    setCols(filteredCols);
    const _filteredPeople = peopleCopy.filter((person) => {
      return person.name === filterList[0];
    });
    console.log("_filteredPeople", _filteredPeople);
    if (value === "All") {
      setPeople(peopleCopy);
      console.log("setPeopleCopy", peopleCopy);
    } else {
      setPeople(_filteredPeople);
      console.log("set_FilteredPeople", _filteredPeople);
    }
  };

  // const onFilter = ({ target: { value } }) => {
  //   setSelectedFilter(value);
  //   const filteredCols = [...cols];
  //   let filterList = [];
  //   if (value !== "All") {
  //     filterList = [value];
  //   }
  //   console.log(filteredCols);
  //   // Target the column to filter on.
  //   filteredCols[0].options.filterList = filterList;
  //   setCols(filteredCols);
  // };

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
          setPeopleCopy(result);
          console.log("peopelCopy", peopleCopy);
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
    // people.forEach(function (elem) {
    //   if ((elem.name = "Haku")) {
    //     console.log("test", elem.name);
    //   }
    // });

    return (
      <React.Fragment>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Toolbar>
            <Select onChange={onFilter} value={selectedFilter}>
              <MenuItem value="All">All</MenuItem>
              {peopleCopy.map((x) => (
                <MenuItem key={x.name} value={x.name}>
                  {x.name}
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
                        onClick={() => {
                          console.log("onClick of row");
                        }}
                      >
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
