import Platform from "../types/Platform";
import useData from "./useGenericData";

const usePlatform = () => useData<Platform>("/platforms/lists/parents");
export default usePlatform;
