import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={".5rem"} overflow={"hidden"}>
      <Skeleton height={"15rem"} />
      <CardBody>
        <SkeletonText paddingY={8} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
