import Genre from "./Genre";
import Platform from "./Platform";

export default interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
