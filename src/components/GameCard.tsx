import Game from "../types/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import imagePlaceholder from "../assets/no-image-placeholder.webp";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={".5rem"} overflow={"hidden"}>
      <Image src={game.background_image || imagePlaceholder} height={"15rem"} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
