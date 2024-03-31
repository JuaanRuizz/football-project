import React, { useState, useEffect } from 'react';
import BurguerMenu from '../../Menu/Burguer_Menu';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const POSICION = 'Posición';
const NOMBRE = 'Nombre';
const EDAD = 'Edad';
const EQUIPO = 'Equipo';
const GOLES = 'Goles';

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

interface Player {
  player: {
    photo: string;
    name: string;
    age: number;
  };
  statistics: {
    team: {
      logo: string;
    };
    goals: {
      total: number;
    };
  }[];
}

const fetchTopScorers = async () => {
  const response = await fetch(
    "https://v3.football.api-sports.io/players/topscorers?season=2023&league=239",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "d5611bbd164a7f20c1111f1553f32fb5",
      },
    }
  );
  const data = await response.json();
  return data.response;
};

const TopScorers: React.FC = () => {
  const [topScorers, setTopScorers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("topScorersData");
        if (storedData) {
          setTopScorers(JSON.parse(storedData));
        } else {
          const data = await fetchTopScorers();
          setTopScorers(data);
          localStorage.setItem("topScorersData", JSON.stringify(data));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <BurguerMenu></BurguerMenu>
      </div>
      <h2>Top Scorers</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{POSICION}</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>{NOMBRE}</StyledTableCell>
              <StyledTableCell>{EDAD}</StyledTableCell>
              <StyledTableCell>{EQUIPO}</StyledTableCell>
              <StyledTableCell>{GOLES}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topScorers.map((player, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>
                  <img src={player.player.photo} alt={player.player.name} />
                </StyledTableCell>
                <StyledTableCell>{player.player.name}</StyledTableCell>
                <StyledTableCell>{player.player.age}</StyledTableCell>
                <StyledTableCell>
                  <img src={player.statistics[0].team.logo} alt="Team Logo" />
                </StyledTableCell>
                <StyledTableCell>{player.statistics[0].goals.total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopScorers;
