import axios from "axios";

export interface StandingsData {
    league: {
        name: string;
        standings: any[];
    }
}

let  scoreboardCache: StandingsData | undefined;

export class ApiService {
    getScoreBoard = (): Promise<StandingsData> => {
        if (!scoreboardCache) {
            console.log(111);
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {
              league: '39',
              season: '2024'
            },
            headers: {
              'x-rapidapi-key': '39078bce62msh6328de9fc911fbbp1f2c47jsn26c13a67abc9',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };
          return axios.request(options).then(response => {
            scoreboardCache = response.data.response[0];
            return scoreboardCache as StandingsData;
          });
        }else {
            return Promise.resolve(scoreboardCache);
        }
    }
}