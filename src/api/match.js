import Api from "../services/Api";
const token = import.meta.env.VITE_API_KEY;

// Gets summoner by summoner name
export const getSummonerByName = async (name) => {
  try {
    const response = await Api.getSummoner(
      `/summoner/v4/summoners/by-name/${name}?api_key=${token}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Gets matches by users puuid
export const getMatchesByPuuid = async (puuid) => {
  try {
    const response = await Api.getMatch(
      `/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=1&api_key=${token}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Gets last played match by match ID
export const getMatchById = async (matchId) => {
  try {
    const response = await Api.getMatch(
      `/match/v5/matches/${matchId}?api_key=${token}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
