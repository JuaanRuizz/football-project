import React, { useEffect, useState } from "react";
import "./TableCSS.css";
import BurguerMenu from "../../Menu/Burguer_Menu";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TABLE_HEADERS, KEY } from "./Strings_table";
import ClipLoader from "react-spinners/ClipLoader";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface TeamData {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  rank: number;
  points: number;
}

const fetchStandings = async () => {
  const response = await fetch(
    "https://v3.football.api-sports.io/standings?league=239&season=2024",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": KEY || "",
      },
    }
  );
  const data = await response.json();
  return data.response[0].league.standings[0];
};

export default function CustomizedTables() {
  const [standings, setStandings] = useState<TeamData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const standingsData = localStorage.getItem("standingsData");
        if (standingsData) {
          setStandings(JSON.parse(standingsData));
        } else {
          const data = await fetchStandings();
          setStandings(data);
          localStorage.setItem("standingsData", JSON.stringify(data));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <ClipLoader
          color={'#003264'}
          // loading={isLoading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="table">
      <div className="burguer-menu">
        <BurguerMenu></BurguerMenu>
      </div>
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>{TABLE_HEADERS.ESCUDO}</StyledTableCell>
                <StyledTableCell align="right">{TABLE_HEADERS.POSICION}</StyledTableCell>
                <StyledTableCell align="right">{TABLE_HEADERS.EQUIPO}</StyledTableCell>
                <StyledTableCell align="right">{TABLE_HEADERS.PUNTOS}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standings.map((team) => (
                <StyledTableRow key={team.team.id}>
                  <StyledTableCell component="th" scope="row">
                    <img
                      className="img-table"
                      src={team.team.logo}
                      alt={team.team.name}
                      data-testid={`img-table-${team.team.id}`}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">{team.rank}</StyledTableCell>
                  <StyledTableCell align="right">{team.team.name}</StyledTableCell>
                  <StyledTableCell align="right">{team.points}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
