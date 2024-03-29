import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  // hide last border
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
        "x-rapidapi-key": "d5611bbd164a7f20c1111f1553f32fb5",
      },
    }
  );
  const data = await response.json();
  return data.response[0].league.standings[0];
};

export default function CustomizedTables() {
  const [standings, setStandings] = useState<TeamData[]>([]);

  useEffect(() => {
    const standingsData = localStorage.getItem("standingsData");
    if (standingsData) {
      setStandings(JSON.parse(standingsData));
    } else {
      fetchStandings()
        .then((data) => {
          setStandings(data);
          localStorage.setItem("standingsData", JSON.stringify(data));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="table">
      <div className="container-link-navmenu-table">
        <Link to='/navmenu' className='link-navmenu-table'>
          Menú
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Escudo</StyledTableCell>
              <StyledTableCell align="right">Posición</StyledTableCell>
              <StyledTableCell align="right">Equipo</StyledTableCell>
              <StyledTableCell align="right">Puntos</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {standings.map((team) => (
              <StyledTableRow key={team.team.id}>
                <StyledTableCell component="th" scope="row">
                  <img
                    src={team.team.logo}
                    alt={team.team.name}
                    width={30}
                    height={30}
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
  );
}