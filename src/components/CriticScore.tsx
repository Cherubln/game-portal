import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const dynamicColor = score > 50 ? "green" : "yellow";
  return (
    <Badge
      paddingX={".45rem"}
      borderRadius={".25rem"}
      fontSize={".95rem"}
      colorScheme={dynamicColor}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
