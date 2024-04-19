import React, { useEffect, useState } from "react";
import BurguerMenu from '../../Menu/Burguer_Menu';
import './TeamsCSS.css';
import Logo from '../../../Assets/Logo-LB3.png';
import { KEY, HEADER_TITLE, INTERESTING_FACTS_TITLE, FACTS_LIST } from "./Strings_teams";

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface TeamData {
  team: Team;
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

const Teams: React.FC = () => {
  const [standings, setStandings] = useState<TeamData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("standingsData");
        if (storedData) {
          setStandings(JSON.parse(storedData));
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
    return <div>Loading...</div>;
  }

  return (
    <div className="container-teams">
      <div className="burguer-menu">
        <BurguerMenu></BurguerMenu>
      </div>
      <div className="container-info-teams">
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
      </div>
    </div>
  );
}

export default Teams;
