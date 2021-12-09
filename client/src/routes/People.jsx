import React from "react";
import { useState, useEffect } from "react";
import { useFetch } from "../utils/useFetch";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";

const People = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setPeople] = useState([]);
  const { data, err, loading } = useFetch(
    "https://ghibliapi.herokuapp.com/films"
  );
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
    { id: "name", label: "Name", minWidth: 170 },
    { id: "age", label: "Age", minWidth: 50, align: "right" },
    {
      id: "gender",
      label: "Gender",
      minWidth: 170,
      align: "right",
    },
    {
      id: "hair_color",
      label: "Hair color",
      minWidth: 170,
      align: "right",
    },
    {
      id: "eye_color",
      label: "Eye color",
      minWidth: 170,
      align: "right",
    },
  ];

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
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 540 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      sx={{ fontWeight: "bold" }}
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
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
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
        {/* <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 650,
              borderCollapse: "collapse",
              margin: "25px 0",
              fontSize: "0.9em",
              fontFamily: "sans-serif",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
            }}
            aria-label="simple table"
          >
            <TableHead
              sx={{
                backgroundColor: "#009879",
              }}
            >
              <TableRow>
                <TableCell sx={{ color: "#ffffff" }}>Name</TableCell>
                <TableCell align="right" sx={{ color: "#ffffff" }}>
                  Gender
                </TableCell>
                <TableCell align="right" sx={{ color: "#ffffff" }}>
                  Age
                </TableCell>
                <TableCell align="right" sx={{ color: "#ffffff" }}>
                  Eye color
                </TableCell>
                <TableCell align="right" sx={{ color: "#ffffff" }}>
                  Hair color
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {people.map((person) => (
                <TableRow
                  key={person.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {person.name}
                  </TableCell>
                  <TableCell align="right">{person.gender}</TableCell>
                  <TableCell align="right">{person.age}</TableCell>
                  <TableCell align="right">{person.eye_color}</TableCell>
                  <TableCell align="right">{person.hair_color}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </React.Fragment>
    );
  }
};

export default People;
