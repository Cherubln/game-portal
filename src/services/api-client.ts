import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0c76c68724de42d79de91cf062a2f576",
  },
});
