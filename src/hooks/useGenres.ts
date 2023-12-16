import Genre from "../types/Genre";
import useData from "./useGenericData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
