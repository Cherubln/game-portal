export interface Platform {
  id: string;
  name: string;
  slug: string;
}
export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
