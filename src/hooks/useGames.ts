import Game from "../types/Game";
import Genre from "../types/Genre";
import useData from "./useData";

const useGames = (genre: Genre | null) =>
  useData<Game>("/games", { params: { genres: genre?.id } }, [genre?.id]);

export default useGames;
