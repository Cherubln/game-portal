import Game from "../types/Game";
import Genre from "../types/Genre";
import Platform from "../types/Platform";
import useData from "./useGenericData";

type Props = {
  genre: Genre | null;
  platform: Platform | null;
};

const useGames = ({ genre, platform }: Props) =>
  useData<Game>(
    "/games",
    { params: { genres: genre?.id, platforms: platform?.id } },
    [genre?.id, platform?.id]
  );

export default useGames;
