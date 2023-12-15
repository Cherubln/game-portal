import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      borderRadius={".5rem"}
      overflow={"hidden"}
      minW={{
        sm: "22rem",
        lg: "23rem",
        xl: "15rem",
      }}
    >
      <Skeleton height={"15rem"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
