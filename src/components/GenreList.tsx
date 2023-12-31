import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import Genre from "../types/Genre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { isLoading, error, data } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} mb={4}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY={"5px"}
            onClick={() => onSelectGenre(genre)}
          >
            <HStack>
              <Image
                src={genre.image_background}
                boxSize={"32px"}
                objectFit={"cover"}
                borderRadius={8}
              />
              <Button
                fontSize="lg"
                variant={"link"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
