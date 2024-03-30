import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './TeamsCSS.css';
import Logo from '../../../Assets/Logo-LB3.png';

interface TeamData {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  rank: number;
  points: number;
}

// Constantes para los textos
const MENU_LINK_TEXT = 'Menú';
const HEADER_TITLE = 'Lista de Equipos Primera División';
const INTERESTING_FACTS_TITLE = 'Datos Interesantes';
const FACTS_LIST = [
  'Atlético Nacional es el equipo más ganador de la Liga BetPlay con 17 títulos',
  'Dayro Moreno es, hasta el momento, el mayor goleador de la liga colombiana.',
  'Los tres únicos clubes que han participado durante toda su historia en la máxima categoría del fútbol en Colombia han sido Santa Fe, Millonarios y Atlético Nacional.',
  'En el año 2022, el Deportivo Pereira ganó su primer título de la liga colombiana, al vencer en penaltis al Deportivo Independiente Medellín.',
  'El 15 de agosto de 1948 se jugó el primer partido del FPC y este miércoles se conmemoran siete décadas desde el primer encuentro.',
  'El primer campeón del fútbol colombiano fue Independiente Santa Fé'
];

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

export default function CustomizedList() {
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
    <div className="container-teams">
      <div>
        <Link to='/navmenu' className='link-navmenu-table'>
          {MENU_LINK_TEXT}
        </Link>
      </div>
      <div className="header-teams">
        <img className='logo-teams' src={Logo} alt='Logo' />
        <h1 className="header-teams-title">{HEADER_TITLE}</h1>
      </div>
      <div className="container-list">
        <ol className="teams-list">
          {standings.map((team) => (
            <li key={team.team.id} className="items-list-teams">
              <img
                src={team.team.logo}
                alt={team.team.name}
                width={30}
                height={30}
              />
              {team.team.name}
            </li>
          ))}
        </ol>
        <div className="interesting-facts-container">
          <h2 className="interesting-facts-title">{INTERESTING_FACTS_TITLE}</h2>
          <ol className="interesting-facts-list">
            {FACTS_LIST.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ol>
        </div>
      </div>
      <div>
        <Link to='/navmenu' className='link-navmenu-table'>
          {MENU_LINK_TEXT}
        </Link>
      </div>
    </div>
  );
}

