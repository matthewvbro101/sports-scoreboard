import "./headlineLeague.css";
import { ApiService } from "../../services/apiService";
import { useEffect, useState } from "react";

const HeadlineLeague = ({leagueNum}: any) => {

    const [leageName, setLeagueName] = useState('');
    const [logo, setLogo] = useState('');
    const [country, setCountry] = useState('');
    const [year, setYear] = useState([]);

    const fetchData = async (leagueNum: any) => {
      try {
        const response = await new ApiService().getScoreBoard(leagueNum);
        setLeagueName(response.league.name);
        setCountry(response.league.country);
        setLogo(response.league.logo);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {    
        fetchData(leagueNum);
      }, [leagueNum]);



    

    return(
        <div className="headline-wrap panel">
            <img src={logo} className="headline-logo" alt="logo" />
            <div className="headline-league">
                <div className="league-name">{leageName}</div>
                <div className="country">{country}</div>
            </div>
        </div>
    );
}

export default HeadlineLeague;