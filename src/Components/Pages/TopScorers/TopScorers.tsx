import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MENU_LINK_TEXT = 'Menú';

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

const TopScorers: React.FC = () => {
  const [topScorers, setTopScorers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchTopScorers = async () => {
      try {
        const storedData = localStorage.getItem("topScorersData");
        if (storedData) {
          setTopScorers(JSON.parse(storedData));
        } else {
          const response = await fetch("https://v3.football.api-sports.io/players/topscorers?season=2023&league=239", {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "d5611bbd164a7f20c1111f1553f32fb5"
            }
          });
          const data = await response.json();
          setTopScorers(data.response);
          localStorage.setItem("topScorersData", JSON.stringify(data.response));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopScorers();
  }, []);

  return (
    <div>
      <Link to='/navmenu' className='link-navmenu-table'>
          {MENU_LINK_TEXT}
      </Link>
      <h2>Top Scorers</h2>
      <table>
        <thead>
          <tr>
            <th>Posición</th>
            <th></th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Equipo</th>
            <th>Goles</th>
          </tr>
        </thead>
        <tbody>
          {topScorers.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={player.player.photo} alt={player.player.name} /></td>
              <td>{player.player.name}</td>
              <td>{player.player.age}</td>
              <td><img src={player.statistics[0].team.logo} alt="Team Logo" /></td>
              <td>{player.statistics[0].goals.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopScorers;
;
