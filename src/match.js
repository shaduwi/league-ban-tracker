import Api from "../services/Api";

export const getSummonerByName = async (name) => {
  try {
    const response = await Api.get(`/summoner/v4/summoners/by-name/${name}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMatchesByPuuid = async (puuid) => {
  try {
    const response = await Api.get(`/match/v5/matches/by-puuid/${puuid}/ids`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMatchById = async (matchId) => {
  try {
    const response = await Api.get(`/match/v5/matches/${matchId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
