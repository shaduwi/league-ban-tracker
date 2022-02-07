import Api from "../services/Api";

// Gets summoner by summoner name
export const getSummonerByName = async (name) => {
  try {
    const response = await Api.get(
      `/summoner/v4/summoners/by-name/${name}?api_key=${""}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Gets matches by users puuid
export const getMatchesByPuuid = async (puuid) => {
  try {
    const response = await Api.get(`/match/v5/matches/by-puuid/${puuid}/ids`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Gets last played match by match ID
export const getMatchById = async (matchId) => {
  try {
    const response = await Api.get(`/match/v5/matches/${matchId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
